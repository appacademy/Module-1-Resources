const assert = require("assert");

const exponent = require('../problems/07-exponent');

describe("exponent()", function () {
  it("should return the base number to the n power", function () {
    assert.strictEqual(exponent(3, 2), 9);
    assert.strictEqual(exponent(2, -2), 0.25);
    assert.strictEqual(exponent(5, 5), 3125);
    assert.equal(exponent(3, 3), 27);
    assert.equal(exponent(-2, 2), 4);
    assert.equal(exponent(0, 10), 0);
    assert.equal(exponent(10, 10), 10000000000);
  });
});