'use strict';

const index = require('../index.js');

const chai = require('chai')
  , expect = chai.expect;

// I found this (lines 8-18) at: https://github.com/chaijs/chai/issues/76
chai.Assertion.addProperty('uppercase', function () {
  var obj = this._obj;
  new chai.Assertion(obj).to.be.a('string');

  this.assert(
        obj === obj.toUpperCase()
      , 'expected #{this} to be all uppercase'
      , 'expected #{this} to not be all uppercase'
    );
});

describe('CLI Test', () => {
  it('should console.log command line arguments in uppercase', () => {
    let result = JSON.stringify(index());
  // I tried just using index(), but it was an array, so the test failed and said result is not a string. I couldn't figure out how to test each string in the array, so I just stringified the whole thing.
    console.log(result);
    expect(result).to.be.uppercase;
  });
});
