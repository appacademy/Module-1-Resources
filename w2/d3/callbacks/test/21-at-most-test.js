const assert = require("assert");
const atMost = require("../problems/21-at-most.js");

describe("atMost", function() {
  it("should return a boolean indicating whether or not there are no more than `max` elements of the array that result in true when passed into the callback", function() {
    let isPositive = function(n) {
      return n > 0;
    };
    let startsWithA = function(s) {
      return s[0].toUpperCase() === "A";
    };

    assert.equal(atMost([6, -2, 4, -1], 3, isPositive), true);
    assert.equal(atMost([6, -2, 4, 1], 3, isPositive), true);
    assert.equal(atMost([6, 2, 4, 1], 3, isPositive), false);
    assert.equal(atMost(["boat", "cat", "car"], 1, startsWithA), true);
    assert.equal(
      atMost(["boat", "cat", "car", "academy"], 1, startsWithA),
      true
    );
    assert.equal(
      atMost(["boat", "arc", "cat", "car", "academy"], 1, startsWithA),
      false
    );
  });
});
