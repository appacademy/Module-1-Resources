const assert = require("assert");
const count = require("../problems/08-count.js");

describe("count", function() {
  it("should return the number of elements of the array that return true when passed to the callback", function() {
    let result1 = count([18, 5, 32, 7, 100], function(n) {
      return n % 2 === 0;
    });
    assert.equal(result1, 3);

    let result2 = count([17, 5, 31, 7, 100], function(n) {
      return n % 2 === 0;
    });
    assert.equal(result2, 1);

    let result3 = count(["follow", "the", "yellow", "brick", "road"], function(
      str
    ) {
      return str.includes("o");
    });
    assert.equal(result3, 3);

    let result4 = count(["follow", "the", "yellow", "brick", "road"], function(
      str
    ) {
      return str.includes("x");
    });
    assert.equal(result4, 0);
  });
});
