const assert = require("assert");

const sort = require('../problems/13-sort');

describe("sort()", function () {
  it("should sort an array of numbers from least to greatest", function () {
    assert.deepEqual(sort([4, 1, 6, 3, 1, 7]), [1, 1, 3, 4, 6, 7]);
    assert.deepEqual(sort([0, 1, -3]), [-3, 0, 1]);
    assert.deepEqual(sort([]), []);
    assert.deepEqual(sort([-5.5, -10, 100, 0]), [-10, -5.5, 0, 100]);
    assert.deepEqual(sort([5, 2, 18, 6, 8]), [2, 5, 6, 8, 18]);
    assert.deepEqual(sort([10, 10, 20, 20, 5, 5, 1, 1]), [1, 1, 5, 5, 10, 10, 20, 20]);
  });
});
