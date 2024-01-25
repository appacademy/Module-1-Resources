const assert = require("assert");

const addToTwelve = require('../problems/06-add-to-twelve');

describe("addToTwelve()", function () {
  it("should return true if there are two adjacent numbers in the array that sum to 12", function () {
    assert.strictEqual(addToTwelve([1, 3, 4, 7, 5]), true);
    assert.strictEqual(addToTwelve([1, 3, 4, 7, 6]), false);
    assert.strictEqual(addToTwelve([1, 11, 4, 7, 6]), true);
    assert.strictEqual(addToTwelve([1, 12, 4, 7, 6]), false);
    assert.strictEqual(addToTwelve([1]), false);
  });
});