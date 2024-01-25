const assert = require("assert");

const isSorted = require('../problems/12-is-sorted');

describe("isSorted()", function () {
  it("should return true if the array is sorted, else false", function () {
    assert.strictEqual(isSorted([1, 2, 3, 4, 5]), true);
    assert.strictEqual(isSorted([1, 2, 4, 3, 5]), false);
    assert.strictEqual(isSorted([2, 4, 6, 7, 8]), true);
    assert.strictEqual(isSorted([5, 4, 3, 2, 1]), false);
  });
});
