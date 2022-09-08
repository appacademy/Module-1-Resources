const assert = require("assert");
const minValueCallback = require("../problems/13-min-value-callback.js");

describe("minValueCallback", function() {
  it("should return the smallest value in the array if a callback is not passed in", function() {
    assert.equal(minValueCallback([64, 25, 49, 9, 100]), 9);
  });
  it("should return the smallest value in the array after passing through the callback if a callback is passed in", function() {
    assert.equal(minValueCallback([64, 25, 49, 9, 100], Math.sqrt), 3);
  });
});
