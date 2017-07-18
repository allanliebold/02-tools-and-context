'use strict';

module.exports = exports = {};

exports.map = (arr, callback) => {
  if (!arr) throw new Error('no array');
  return Array.prototype.map.call(arr, callback);
};

exports.filter = (arr, callback) => {
  if (!arr) throw new Error('no array');
  return Array.prototype.filter.call(arr, callback);
};

exports.concat = (arr1, arr2) => {
  if (!arr1 || !arr2) throw new Error('missing array');
  return Array.prototype.concat.apply(arr1, arr2);
};

exports.splice = (arr, idx, del, add=[]) => {
  Array.prototype.splice.call(arr, idx, del, ...add);
  return arr;
};

exports.reduce = (arr, callback, start=0) => {
  if (!arr) throw new Error('no array');
  return Array.prototype.reduce.call(arr, callback, start);
};
