const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const dynamicMultiply = require("../problems/15-closure-dynamic-multi.js");

describe("dynamicMultiply()", function () {
  it("should return a function that accepts a number", function () {
    const doubler = dynamicMultiply(2);

    expect(doubler).to.be.a("function")
    assert.equal(doubler(5), 10);
  });

  it("should return a value after being called with a second number", function () {
    const tripler = dynamicMultiply(3);
    const multiplyByFive = dynamicMultiply(5);

    expect(tripler).to.be.a("function")
    expect(multiplyByFive).to.be.a("function")
    assert.equal(tripler(5), 15);
    assert.equal(multiplyByFive(5), 25);
  });
});
