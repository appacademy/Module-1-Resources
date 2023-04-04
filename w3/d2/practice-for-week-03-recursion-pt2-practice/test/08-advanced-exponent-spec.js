const assert = require("assert");

const advancedExponent = require('../problems/08-advanced-exponent');

describe("advancedExponent()", function () {
  it("should return the base number to the n power", function () {
    assert.strictEqual(advancedExponent(2, 0), 1);
    assert.strictEqual(advancedExponent(2, 1), 2);
    assert.strictEqual(advancedExponent(2, 2), 4);
    assert.strictEqual(advancedExponent(2, 3), 8);
    assert.strictEqual(advancedExponent(2, 4), 16);
    assert.strictEqual(advancedExponent(2, 5), 32);
    assert.strictEqual(advancedExponent(2, 6), 64);
    assert.strictEqual(advancedExponent(2, 7), 128);
    assert.strictEqual(advancedExponent(2, 8), 256);
    assert.strictEqual(advancedExponent(2, 9), 512);
    assert.strictEqual(advancedExponent(2, 10), 1024);
    assert.strictEqual(advancedExponent(2, 11), 2048);
    assert.strictEqual(advancedExponent(2, 12), 4096);
  });

  it("should not throw a maximum call stack error for high powers", function () {
    try {
      advancedExponent(2, 100000);
    } catch (e) {
      if (e instanceof RangeError) {
        throw new Error(e.message);
      }
      throw e;
    }
  });
});