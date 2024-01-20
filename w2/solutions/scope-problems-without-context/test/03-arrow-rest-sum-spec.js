const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const arrowRestSum = require("../problems/03-arrow-rest-sum.js");

describe("arrowRestSum()", function () {
  it("should add any number of incoming arguments", function () {
    const test1 = arrowRestSum(3, 5, 6);
    const result1 = 14;

    const test2 = arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9);
    const result2 = 45;

    const test3 = arrowRestSum(0, 0);
    const result3 = 0;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowRestSum.prototype).to.equal("undefined");
  });
});
