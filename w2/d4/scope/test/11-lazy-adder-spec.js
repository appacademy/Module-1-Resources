const assert = require("assert");
const lazyAdder = require("../problems/11-lazy-adder.js");
const chai = require("chai");
const expect = chai.expect;

describe("lazyAdder()", function () {
  let firstAdd = lazyAdder(1);

  it("should return a function when first invoked", function () {
    expect(firstAdd).to.be.a("function");
  });

  let secondAdd = firstAdd(2);

  it("should also return a function when invoked a second time", function () {
    expect(secondAdd).to.be.a("function");
  });

  let sum = secondAdd(3);
  let func1 = lazyAdder(10);
  let func2 = func1(20);
  let total = func2(3);

  it(`should finally return the sum of all numbers after being invoked a third time`, function () {
    expect(func1).to.be.a("function");
    expect(func2).to.be.a("function");
    assert.equal(sum, 6);
    assert.equal(total, 33);
  });
});
