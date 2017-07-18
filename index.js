'use strict';

const fp = require('./lib/fp.js');

module.exports = () => fp.map(process.argv, (n) => n.toUpperCase());
