const assert = require("assert");

const permutations = require("../problems/17-bonus-permutations.js");
const deepIncludes = require('./util/deep-includes-order-matters');

describe("permutations()", function () {
  it("should return all the permutations of the given array", function () {
    assert.strictEqual(deepIncludes(permutations([1, 2]),
      [[1, 2],
      [2, 1]]
    ), true);
    assert.strictEqual(deepIncludes(permutations([1, 2]),
      [[1, 2],
      [2, 3]]
    ), false);
    assert.strictEqual(deepIncludes(permutations([1, 2]),
      [[1, 2],
      [1, 2]]
    ), false);
    assert.strictEqual(deepIncludes(permutations([1, 2, 3]),
      [[1, 2, 3], [1, 3, 2],
      [2, 1, 3], [2, 3, 1],
      [3, 1, 2], [3, 2, 1]]
    ), true);
    assert.strictEqual(deepIncludes(permutations([1, 2, 3]),
      [[2, 1, 3], [2, 3, 1],
      [1, 2, 3], [1, 3, 2],
      [3, 1, 2], [3, 2, 1]]
    ), true);
  });
});
