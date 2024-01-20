const assert = require("assert");
const firstIndex = require("../problems/22-first-index.js");

describe("firstIndex", function() {
  it("should return the index of the first element of the array that results in true when passed into the callback", function() {
    let result1 = firstIndex([3, 7, 8, 10], function(n) {
      return n % 2 === 0;
    });
    assert.equal(result1, 2);

    let result2 = firstIndex(["dog", "cat", "tree"], function(s) {
      return s.length === 3;
    });
    assert.equal(result2, 0);
  });
  it("should return -1 if no elements of the array result in true", function() {
    let result3 = firstIndex(["canine", "feline", "tree"], function(s) {
      return s.length === 3;
    });
    assert.equal(result3, -1);
  });
});
