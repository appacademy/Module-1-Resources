const assert = require("assert");

const sumToN = require('../problems/01-sum-to-n');

describe("sumToN()", function () {
  it("should sum all the numbers from 0 to n", function () {
    assert.strictEqual(sumToN(5), 15);
    assert.strictEqual(sumToN(1), 1);
    assert.strictEqual(sumToN(9), 45);
    assert.strictEqual(sumToN(-8), null);
  });
});