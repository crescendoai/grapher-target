describe('a grapher instance with target', function () {
  var network, grapher;
  var index = 1;
  const MAX_PERFORMANCE_NODES = 10000;
  const MAX_PERFORMANCE_LINKS = 10000;
  const MAX_X = 2000;
  const MAX_Y = 2000;
  const MAX_R = 50;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function generateNodes(max) {
    var nodes = [max];
    for (let i = 0; i < max; i++) {
      nodes[i] = { x: getRandomInt(MAX_X),
                   y: getRandomInt(MAX_Y),
                   r: getRandomInt(MAX_R)
                 }
    }
    return nodes;
  }

  it('trying to find why PhantomJS breaks in Travis', function() {
    expect(0).toBe(0);
  })

});
