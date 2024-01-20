const assert = require("assert");
const selectiveMap = require("../problems/05-selective-map.js");

describe("selectiveMap", function() {
  it("should selectively call the second callback if the value returns true on the first callback", function() {
    function isEven(n) {
      return n % 2 === 0;
    }

    function isPositive(n) {
      return n > 0;
    }

    function square(n) {
      return n * n;
    }

    function flipSign(n) {
      return n * -1;
    }

    assert.deepEqual(selectiveMap([8, 5, 10, 4], isEven, square), [ 64, 5, 100, 16 ])
    assert.deepEqual(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign), [ 10, -4, 7, -6, 2, -9 ])
    assert.deepEqual(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square), [-10, 16, 49, 36, -2, -9])
  });
});
