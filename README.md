Grapher.target
==============

Target module for [Grapher](https://github.com/ayasdi/grapher).

Given a point in data space, target a node or link, or find the nearest nodes and links to a point.

Files
-----

  * [target.js](https://raw.githubusercontent.com/ayasdi/grapher-target/master/target.js)
  * [target-min.js](https://raw.githubusercontent.com/ayasdi/grapher-target/master/target-min.js)

Usage
-----

###grapher.target(point, type)

Returns a node or link index given a point and optionally type.

  * point: an object containing x and y in data space. ex. {x: 0, y: 1}.
    You can convert a point from the canvas offset to data space by using grapher.getDataPosition:

        var point = grapher.getDataPosition(x, y);
        var nodeId = grapher.target(point);

  * type (optional): "nodes" or "links", default "nodes".

###grapher.nearest(point, type, options)

Returns an array of the nearest node or link indices given a point, optionally type, and optionally options.

  * point: an object containing x and y in data space. ex. {x: 0, y: 1}.
    You can convert a point from the canvas offset to data space by using grapher.getDataPosition:

        var point = grapher.getDataPosition(x, y);
        var nodeId = grapher.nearest(point)[0];

  * type (optional): "nodes" or "links", default "nodes".

  * options (optional): an object containing d, a distance function, and count.
    - d (optional): a distance function used for comparison. Accepts as arguments a point and a node or link.
    - count (optional): number of nearest indices to return.

Installing
----------

Import target.js after the main grapher script.

    <script src="grapher.js"></script>
    <script src="target.js"></script>

You can build Grapher with grapher-target using [Duo](http://duojs.org/) and
providing Grapher as the argument:

    var Grapher = require('ayasdi/grapher');
    require('ayasdi/grapher-target')(Grapher);
