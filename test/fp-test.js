'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('Modules', function() {
  describe('#map', function() {
    it('should return 2 4 6 8', function() {
      let result = fp.map([1, 2, 3, 4], n => n * 2);
      expect(fp.map).to.be.a('function');
      expect(result).to.deep.equal([2, 4, 6, 8]);
    });
  });
  describe('#filter', function() {
    it('should return 1 2 4', function() {
      let result = fp.filter([1, 2, 3, 4], n => n !== 3);
      expect(fp.filter).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 4]);
    });
  });
  describe('#concat', function() {
    it('should return 1 2 3 4 5 6', function() {
      let result = fp.concat([1, 2, 3], [4, 5, 6]);
      expect(fp.concat).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });
  });
  describe('#splice', function() {
    it('should return 1 2 5 6 4', function() {
      let result = fp.splice([1, 2, 3, 4], 2, 1, [5, 6]);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 5, 6, 4]);
    });
    it('should return 1 2 4', function() {
      let result = fp.splice([1, 2, 3, 4], 2, 1, []);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 4]);
    });
  });
});
