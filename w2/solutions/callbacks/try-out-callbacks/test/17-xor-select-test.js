const assert = require("assert");
const xorSelect = require("../problems/17-xor-select.js");

describe("xorSelect", function() {
  it("should return a new array containing elements of the original array that result in true when passed in one of the callbacks, but not both", function() {
    let isEven = function(n) {
      return n % 2 === 0;
    };

    let isPositive = function(n) {
      return n > 0;
    };

    let result1 = xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive);
    assert.deepEqual(result1, [-2, 1, 3]);

    let longString = function(s) {
      return s.length > 4;
    };

    let startsA = function(s) {
      return s[0] === "a";
    };

    let result2 = xorSelect(
      ["art", "academy", "app", "cat", "buttery"],
      longString,
      startsA
    );
    assert.deepEqual(result2, ["art", "app", "buttery"]);
  });
});
