const assert = require("assert");
const dynamicMultiply = require("../problems/15-closure-dynamic-multi.js");

describe("dynamicMultiply()", function () {
  it("should return a function that accepts a number", function () {
    const doubler = dynamicMultiply(2);

    assert.equal(doubler(5), 10);
  });

  it("should return a new multiply function for each initial argument", function () {
    const tripler = dynamicMultiply(3);
    const multiplyByFive = dynamicMultiply(5);

    assert.equal(tripler(5), 15);
    assert.equal(multiplyByFive(5), 25);
  });
});
