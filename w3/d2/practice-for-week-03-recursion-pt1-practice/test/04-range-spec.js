const assert = require("assert");

const range = require('../problems/04-range');

describe("range()", function () {
  it("should an array of numbers from the start to the end number, not inclusive", function () {
    assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4]);
    assert.deepStrictEqual(range(3, 4), [3]);
    assert.deepStrictEqual(range(7, 6), []);
  });
});