const assert = require('assert');

const sumWithReduce = require('../problems/06-sum-reduce');

describe('sumWithReduce()', function() {
  it('should add all the numbers in the given array with Array\'s reduce method', function() {
    assert.equal(sumWithReduce([10, 3, 5, 2]), 20);
    assert.equal(sumWithReduce([]), 0);
  });
});