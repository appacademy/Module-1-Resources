const assert = require('assert');

const maxWithReduce = require('../problems/07-max-reduce');

describe('maxWithReduce()', function () {
  it('should return the max number in the given array using Array\'s reduce method', function () {
    assert.equal(maxWithReduce([4, 6, 3, 5, 42, 4]), 42);
    assert.equal(maxWithReduce([-2, -3, -7, 3]), 3);
  });
});

