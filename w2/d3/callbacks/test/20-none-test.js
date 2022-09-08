const assert = require("assert");
const none = require("../problems/20-none.js");

describe("none", function() {
  it("should return true if all elements of the array result to false when passed into the callback", function() {
    let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
        return w.includes('e');
    });
    assert.equal(result1, true);

    let result2 = none([4, 5, 7, 1], function(n) {
        return n < 0;
    });
    assert.equal(result2, true);
  });
  it("should return false if only some or none elements of the array result to false when passed into the callback", function() {
    let result3 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
      return w.includes('e');
    });
    assert.equal(result3, false);

    let result4 = none([4, -5, 7, -1], function(n) {
      return n < 0;
    });
    assert.equal(result4, false);
  });
});
