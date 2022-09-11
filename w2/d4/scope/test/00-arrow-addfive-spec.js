const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const addFive = require("../problems/00-arrow-addfive.js");

describe("addFive()", function () {
  it("should add 5 to any passed in argument", function () {
    const test1 = addFive(0);
    const result1 = 5;

    const test2 = addFive(10);
    const result2 = 15;

    const test3 = addFive(37);
    const result3 = 42;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });

  it("should be an arrow function", function () {
    expect(typeof addFive.prototype).to.equal("undefined");
  });
});
