const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const arrowAvgValue = require("../problems/04-arrow-average-value.js");

describe("arrowAvgValue()", function () {
  it("should return the average of an array of numbers", function () {
    assert.equal(arrowAvgValue([10, 20]), 15);
    assert.equal(arrowAvgValue([2, 3, 7]), 4);
    assert.equal(arrowAvgValue([100, 60, 64]), 74.66666666666667);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowAvgValue.prototype).to.equal("undefined");
  });
});
