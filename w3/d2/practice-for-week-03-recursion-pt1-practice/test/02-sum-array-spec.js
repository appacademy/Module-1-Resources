const assert = require("assert");

const sumArray = require('../problems/02-sum-array');

describe("sumArray()", function () {
  it("should return the sum of all the elements in the array", function () {
    assert.strictEqual(sumArray([1, 2, 3]),  6);
    assert.strictEqual(sumArray([0, 1, -3]),  -2);
    assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15);
    assert.strictEqual(sumArray([5, 4, 3, 2, 1]), 15);
    assert.strictEqual(sumArray([0, 0, 1, 0, 0]), 1);
    assert.strictEqual(sumArray([-1, -1, -1, -1]), -4);
    assert.strictEqual(sumArray([99, 100, 101]), 300);
  });
});