const assert = require("assert");
const chainMap = require("../problems/09-chain-map.js");

describe("chainMap", function() {
  it("should return the final result of passing the value through all of the given callbacks", function() {
    let add5 = function(n) {
      return n + 5;
    };

    let half = function(n) {
      return n / 2;
    };

    let square = function(n) {
      return n * n;
    };

    assert.equal(chainMap(25, add5), 30);
    assert.equal(chainMap(25, add5, half), 15);
    assert.equal(chainMap(25, add5, half, square), 225);
    assert.equal(chainMap(4, square, half), 8);
    assert.equal(chainMap(4, half, square), 4);
  });
});
