const assert = require("assert");
const exactly = require("../problems/12-exactly.js");

describe("exactly", function() {
  it("should return a boolean indicating whether or not there are exactly `number` elements of the array that return true when passed into the callback", function() {
    let result1 = exactly([18, 5, 32, 7, 100], 3, function(n) {
      return n % 2 === 0;
    });
    assert.equal(result1, true);

    let result2 = exactly([18, 5, 32, 7, 100], 2, function(n) {
      return n % 2 === 0;
    });
    assert.equal(result2, false);

    let result3 = exactly(
      ["follow", "the", "yellow", "brick", "road"],
      1,
      function(str) {
        return str.includes("x");
      }
    );
    assert.equal(result3, false);

    let result4 = exactly(
      ["follow", "the", "yellow", "brick", "road"],
      0,
      function(str) {
        return str.includes("x");
      }
    );
    assert.equal(result4, true);
  });
});
