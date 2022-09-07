const assert = require('assert');

const twoDimensionalProduct = require('../problems/18-two-d-product');

describe('twoDimensionalProduct()', function () {
  it('should return the product of all the elements of all the nested arrays in the given array', function () {
    let arr1 = [
      [6, 4],
      [5],
      [3, 1]
    ];
    assert.equal(twoDimensionalProduct(arr1),  360);

    let arr2 = [
      [11, 4],
      [2]
    ];
    assert.equal(twoDimensionalProduct(arr2),  88);
  });
});

