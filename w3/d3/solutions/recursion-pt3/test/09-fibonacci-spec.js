const assert = require("assert");

const fibonacci = require('../problems/09-fibonacci');

describe("fibonacci()", function () {
  it("should return the expected nth Fibonacci number", function () {
    assert.strictEqual(fibonacci(1), 1);
    assert.strictEqual(fibonacci(2), 1);
    assert.strictEqual(fibonacci(3), 2);
    assert.strictEqual(fibonacci(4), 3);
    assert.strictEqual(fibonacci(10), 55);
    assert.strictEqual(fibonacci(5), 5);
    assert.strictEqual(fibonacci(20), 6765);
  });
});