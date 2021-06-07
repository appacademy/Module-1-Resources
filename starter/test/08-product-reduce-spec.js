const assert = require('assert');

const productWithReduce = require('../problems/08-product-reduce');

describe('productWithReduce()', function () {
  it('should add all the numbers in the given array with Array\'s reduce method', function () {
    assert.equal(productWithReduce([10, 3, 5, 2]), 300);
    assert.equal(productWithReduce([4, 3]), 12);
  });
});

