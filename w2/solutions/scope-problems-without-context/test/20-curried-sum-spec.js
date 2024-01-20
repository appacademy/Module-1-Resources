const assert = require("assert");

const curriedSum = require("../problems/20-curried-sum.js");

describe("curriedSum()", function () {
  it("should sum numbers using currying", function () {
    const sum = curriedSum(4);
    sum(5);
    sum(20);
    sum(30);
    let testResult = sum(20);
    assert.equal(testResult, 75);
  });
  it("should allow the calculator to add multiple numbers using currying", function () {
    const testResult = curriedSum(3)(2)(1)(7);
    assert.equal(testResult, 10);
  });
});
