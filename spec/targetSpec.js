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
    for (var i = 0; i < max; i++) {
      nodes[i] = { x: getRandomInt(MAX_X),
                   y: getRandomInt(MAX_Y),
                   r: getRandomInt(MAX_R)
                 }
    }
    return nodes;
  }

  function generateLinks(max) {
    var links = [max];
    for (var i = 0; i < max; i++) {
      links[i] = { from: getRandomInt(max),
                    to: getRandomInt(max)
                 }
    }
    return links;
  }

  beforeEach(function () {    
    // 50 nodes and 50 links test data set
    network = {
      "nodes": [
        {
          "x": 186,
          "y": 1239,
          "r": 27
        },
        {
          "x": 25,
          "y": 1712,
          "r": 14
        },
        {
          "x": 1022,
          "y": 1288,
          "r": 0
        },
        {
          "x": 732,
          "y": 457,
          "r": 30
        },
        {
          "x": 1778,
          "y": 1957,
          "r": 47
        },
        {
          "x": 1386,
          "y": 1877,
          "r": 15
        },
        {
          "x": 762,
          "y": 1900,
          "r": 3
        },
        {
          "x": 1489,
          "y": 650,
          "r": 18
        },
        {
          "x": 463,
          "y": 792,
          "r": 14
        },
        {
          "x": 1499,
          "y": 777,
          "r": 26
        },
        {
          "x": 1009,
          "y": 84,
          "r": 43
        },
        {
          "x": 1569,
          "y": 864,
          "r": 12
        },
        {
          "x": 653,
          "y": 1343,
          "r": 46
        },
        {
          "x": 673,
          "y": 882,
          "r": 13
        },
        {
          "x": 700,
          "y": 785,
          "r": 22
        },
        {
          "x": 223,
          "y": 205,
          "r": 35
        },
        {
          "x": 992,
          "y": 1059,
          "r": 36
        },
        {
          "x": 1278,
          "y": 1234,
          "r": 49
        },
        {
          "x": 1227,
          "y": 234,
          "r": 22
        },
        {
          "x": 431,
          "y": 400,
          "r": 47
        },
        {
          "x": 1350,
          "y": 436,
          "r": 34
        },
        {
          "x": 1767,
          "y": 357,
          "r": 21
        },
        {
          "x": 1870,
          "y": 697,
          "r": 32
        },
        {
          "x": 761,
          "y": 1406,
          "r": 49
        },
        {
          "x": 1636,
          "y": 1298,
          "r": 23
        },
        {
          "x": 761,
          "y": 526,
          "r": 31
        },
        {
          "x": 1846,
          "y": 618,
          "r": 39
        },
        {
          "x": 376,
          "y": 1436,
          "r": 15
        },
        {
          "x": 1349,
          "y": 1125,
          "r": 49
        },
        {
          "x": 224,
          "y": 121,
          "r": 20
        },
        {
          "x": 1348,
          "y": 474,
          "r": 24
        },
        {
          "x": 1112,
          "y": 1988,
          "r": 35
        },
        {
          "x": 537,
          "y": 1798,
          "r": 29
        },
        {
          "x": 242,
          "y": 1158,
          "r": 34
        },
        {
          "x": 335,
          "y": 1003,
          "r": 17
        },
        {
          "x": 1148,
          "y": 114,
          "r": 49
        },
        {
          "x": 946,
          "y": 1822,
          "r": 0
        },
        {
          "x": 1871,
          "y": 559,
          "r": 27
        },
        {
          "x": 272,
          "y": 736,
          "r": 5
        },
        {
          "x": 1974,
          "y": 357,
          "r": 11
        },
        {
          "x": 460,
          "y": 340,
          "r": 0
        },
        {
          "x": 1803,
          "y": 1535,
          "r": 25
        },
        {
          "x": 142,
          "y": 47,
          "r": 27
        },
        {
          "x": 1521,
          "y": 1717,
          "r": 23
        },
        {
          "x": 1563,
          "y": 1139,
          "r": 16
        },
        {
          "x": 1830,
          "y": 192,
          "r": 46
        },
        {
          "x": 1920,
          "y": 1302,
          "r": 36
        },
        {
          "x": 91,
          "y": 566,
          "r": 41
        },
        {
          "x": 1288,
          "y": 804,
          "r": 10
        },
        {
          "x": 552,
          "y": 860,
          "r": 9
        }
      ],
      "links": [
        {
          "from": 16,
          "to": 32
        },
        {
          "from": 45,
          "to": 18
        },
        {
          "from": 14,
          "to": 37
        },
        {
          "from": 21,
          "to": 23
        },
        {
          "from": 22,
          "to": 13
        },
        {
          "from": 16,
          "to": 14
        },
        {
          "from": 41,
          "to": 43
        },
        {
          "from": 49,
          "to": 21
        },
        {
          "from": 36,
          "to": 1
        },
        {
          "from": 13,
          "to": 22
        },
        {
          "from": 25,
          "to": 13
        },
        {
          "from": 44,
          "to": 13
        },
        {
          "from": 6,
          "to": 32
        },
        {
          "from": 34,
          "to": 46
        },
        {
          "from": 7,
          "to": 23
        },
        {
          "from": 16,
          "to": 28
        },
        {
          "from": 16,
          "to": 21
        },
        {
          "from": 38,
          "to": 46
        },
        {
          "from": 18,
          "to": 3
        },
        {
          "from": 22,
          "to": 30
        },
        {
          "from": 25,
          "to": 23
        },
        {
          "from": 28,
          "to": 18
        },
        {
          "from": 47,
          "to": 20
        },
        {
          "from": 8,
          "to": 33
        },
        {
          "from": 12,
          "to": 5
        },
        {
          "from": 26,
          "to": 2
        },
        {
          "from": 47,
          "to": 6
        },
        {
          "from": 22,
          "to": 40
        },
        {
          "from": 35,
          "to": 6
        },
        {
          "from": 26,
          "to": 1
        },
        {
          "from": 12,
          "to": 27
        },
        {
          "from": 12,
          "to": 11
        },
        {
          "from": 14,
          "to": 2
        },
        {
          "from": 26,
          "to": 35
        },
        {
          "from": 24,
          "to": 37
        },
        {
          "from": 38,
          "to": 9
        },
        {
          "from": 37,
          "to": 0
        },
        {
          "from": 46,
          "to": 37
        },
        {
          "from": 29,
          "to": 29
        },
        {
          "from": 33,
          "to": 17
        },
        {
          "from": 13,
          "to": 45
        },
        {
          "from": 42,
          "to": 13
        },
        {
          "from": 27,
          "to": 20
        },
        {
          "from": 31,
          "to": 10
        },
        {
          "from": 26,
          "to": 46
        },
        {
          "from": 23,
          "to": 35
        },
        {
          "from": 31,
          "to": 24
        },
        {
          "from": 19,
          "to": 41
        },
        {
          "from": 49,
          "to": 14
        },
        {
          "from": 29,
          "to": 24
        }
      ]
    }
    
    grapher = new Grapher({});
    grapher.data(network);
  });

  it('trying to find why PhantomJS breaks in Travis', function() {
    expect(0).toBe(0);
  })

});
