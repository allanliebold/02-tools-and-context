'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('Modules', () => {
  describe('#map', () => {
    it('should return 2 4 6 8', () => {
      let result = fp.map([1, 2, 3, 4], n => n * 2);
      expect(fp.map).to.be.a('function');
      expect(result).to.deep.equal([2, 4, 6, 8]);
    });
  });
  describe('#filter', () => {
    it('should return 1 2 4', () => {
      let result = fp.filter([1, 2, 3, 4], n => n !== 3);
      expect(fp.filter).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 4]);
    });
    it('should return 3 6 9', () => {
      let result = fp.filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 3 === 0);
      expect(fp.filter).to.be.a('function');
      expect(result).to.deep.equal([3, 6, 9]);
    });
  });
  describe('#concat', () => {
    it('should return 1 2 3 4 5 6', () => {
      let result = fp.concat([1, 2, 3], [4, 5, 6]);
      expect(fp.concat).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });
    it('should return see spot see spot run', () => {
      let result = fp.concat(['see', 'spot'], ['see', 'spot', 'run']);
      expect(fp.concat).to.be.a('function');
      expect(result).to.deep.equal(['see', 'spot', 'see', 'spot', 'run']);
    });
  });
  describe('#splice', () => {
    it('should return 1 2 5 6 4', () => {
      let result = fp.splice([1, 2, 3, 4], 2, 1, [5, 6]);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 5, 6, 4]);
    });
    it('should return 1 2 4', () => {
      let result = fp.splice([1, 2, 3, 4], 2, 1);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 4]);
    });
    it('should return 1 2 42 skidoo 5', () => {
      let result = fp.splice([1, 2, 3, 4], 2, 2, [42, 'skidoo', 5]);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal([1, 2, 42, 'skidoo', 5]);
    });
  });
  describe('#reduce', () => {
    it('should return 10', () => {
      let result = fp.reduce([1, 2, 3, 4], (a, b) => a + b);
      expect(fp.reduce).to.be.a('function');
      expect(result).to.equal(10);
    });
    it('should return 25', () => {
      let result = fp.reduce([10, 3, 4, 5], (a,b) => a + b, 3);
      expect(fp.reduce).to.be.a('function');
      expect(result).to.equal(25);
    });
  });
});
