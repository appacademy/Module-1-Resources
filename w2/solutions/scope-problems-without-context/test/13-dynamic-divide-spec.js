const assert = require("assert");
const dynamicDivide = require("../problems/13-dynamic-divide.js");

describe("dynamicDivide()", function () {
  it("should return a function that accepts a number", function () {
    const halfer = dynamicDivide(2);

    assert.doesNotThrow(() => halfer(5), TypeError);
  });

  it("should return a new multiply function for each initial argument", function () {
    const halfer = dynamicDivide(2);

    const divideByThree = dynamicDivide(3);

    const divideByFive = dynamicDivide(5);

    assert.equal(halfer(20), 10);
    assert.equal(divideByThree(30), 10);
    assert.equal(divideByFive(50), 10);
  });
});
