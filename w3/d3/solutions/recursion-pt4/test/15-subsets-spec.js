const assert = require("assert");

const subsets = require('../problems/15-bonus-subsets');
const deepIncludes = require('./util/deep-includes');

describe("subsets()", function () {
  it("should return all the subsets of the given array", function () {
    assert.strictEqual(deepIncludes(subsets([]), [[]]), true);
    assert.strictEqual(deepIncludes(subsets([1]), [[], [1]]), true);
    assert.strictEqual(deepIncludes(subsets([1, 2]), [[], [1], [2], [1, 2]]), true);
    assert.strictEqual(deepIncludes(subsets([1, 2]), [[1], [2], [1, 2]]), false);
    assert.strictEqual(deepIncludes(subsets([1, 2]), [[], [1, 2], [2], [1, 2]]), false);
    assert.strictEqual(deepIncludes(subsets([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]), true);
  });
});