describe('a grapher instance with target', function () {
  var network, grapher;
  var index = 1;
  const MAX_NODES = 5;
  const MAX_LINKS = 5;
  const MAX_PERFORMANCE_NODES = 10000;
  const MAX_PERFORMANCE_LINKS = 10000;
  const MAX_X = 2000;
  const MAX_Y = 2000;
  const MAX_R = 50;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function generateNodes(max) {
    let nodes = [max];
    for (let i = 0; i < max; i++) {
      nodes[i] = { x: getRandomInt(MAX_X),
                   y: getRandomInt(MAX_Y),
                   r: getRandomInt(MAX_R)
                 }
    }
    return nodes;
  }

  function generateLinks(max) {
    let links = [max];
    for (let i = 0; i < max; i++) {
      links[i] = { from: getRandomInt(max),
                    to: getRandomInt(max)
                 }
    }
    return links;
  }

  beforeEach(function () {
    network = {
      nodes: generateNodes(MAX_NODES),
      links: generateLinks(MAX_LINKS)
    };
    grapher = new Grapher({});
    grapher.data(network);
  });

  it('can target or find the nearest node or link', function () {
    expect(grapher.target).toBeDefined();
    expect(grapher.nearest).toBeDefined();
  });

  it('can find a node that falls on a point in data space', function () {
    var nodeId = 0,
        node = network.nodes[nodeId],
        point = {
          x: node.x - node.r / 2,
          y: node.y + node.r / 2
        };
    expect(grapher.target(point)).toBe(nodeId);
  });

  it('can find a link that intersects on a point in data space', function () {
    var linkId = 0,
        link = network.links[linkId],
        from = network.nodes[link.from],
        to = network.nodes[link.to],
        intersect = 0.25,
        point = {
          x: from.x + (to.x - from.x) * intersect,
          y: from.y + (to.y - from.y) * intersect
        };
    expect(grapher.target(point, 'links')).toBe(linkId);
  });

  it('can find the nearest nodes to a point in data space', function () {
    var nodeId = 0,
        node = network.nodes[nodeId],
        point = {
          x: node.x - node.r * 4,
          y: node.y + node.r * 4
        };
    expect(grapher.nearest(point)[0]).toBe(nodeId);
  });

  it('can efficiently find the nearest nodes in data space', function () {
    let point = {
          x: getRandomInt(MAX_X),
          y: getRandomInt(MAX_Y)
        };
    network.nodes = generateNodes(MAX_PERFORMANCE_NODES);
    let results = grapher.nearest(point, Grapher.NODES, { count: 10 });
    expect(results.length).toBe(10);
  });

  it('can find the nearest links to a point in data space', function () {
    var linkId = 0,
        link = network.links[linkId],
        from = network.nodes[link.from],
        to = network.nodes[link.to],
        intersect = 0.25,
        point = {
          x: from.x + (to.x - from.x) * intersect + 20,
          y: from.y + (to.y - from.y) * intersect - 20
        };
    expect(grapher.nearest(point, Grapher.LINKS)[0]).toBe(linkId);
  });

  it('can efficiently find the nearest links in data space', function () {
    let linkId = 0,
        link = network.links[linkId],
        from = network.nodes[link.from],
        to = network.nodes[link.to],
        intersect = 0.25,
        point = {
          x: from.x + (to.x - from.x) * intersect + 20,
          y: from.y + (to.y - from.y) * intersect - 20
        };
    network.nodes = generateNodes(MAX_PERFORMANCE_NODES);
    network.links = generateLinks(MAX_PERFORMANCE_LINKS);
    let results = grapher.nearest(point, Grapher.LINKS, { count: 10 });
    expect(results.length).toBe(10);
  });
});
