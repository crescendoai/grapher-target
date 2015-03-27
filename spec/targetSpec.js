describe('a grapher instance with target', function () {
  var network, grapher;
  var index = 1;

  beforeEach(function () {
    network = {
      nodes: [
        {x: 100, y: 100, r: 20},
        {x: 200, y: 100, r: 15},
        {x: 300, y: 300, r: 25}
      ],
      links: [
        {from: 0, to: 1},
        {from: 1, to: 2}
      ]
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
    expect(grapher.nearest(point, 'links')[0]).toBe(linkId);
  });
});
