const assert = require("assert");
const one = require("../problems/18-one.js");

describe("one", function() {
  it("should return a boolean indicating whether or not exactly one element of the array results in true when passed into the callback", function() {
    let result1 = one(["x", "y", "z"], function(el) {
      return el === "a";
    });
    assert.equal(result1, false);

    let result2 = one(["x", "a", "y", "z"], function(el) {
      return el === "a";
    });
    assert.equal(result2, true);

    let result3 = one(["x", "a", "y", "a", "z"], function(el) {
      return el === "a";
    });
    assert.equal(result3, false);

    let result4 = one(["apple", "dog"], function(el) {
      return el.length > 3;
    });
    assert.equal(result4, true);

    let result5 = one(["apple", "dog", "pear"], function(el) {
      return el.length > 3;
    });
    assert.equal(result5, false);

    let result6 = one(["apple", "dog", "food", "cat"], function(el, idx) {
      return el.length === idx;
    });
    assert.equal(result6, true);
  });
});
