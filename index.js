'use strict';

var fp = require('./lib/fp.js');

fp.map(process.argv, (n) => console.log(n.toUpperCase()));
