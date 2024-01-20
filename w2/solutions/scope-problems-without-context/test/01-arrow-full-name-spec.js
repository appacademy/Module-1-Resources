const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const arrowGetFullName = require("../problems/01-arrow-full-name.js");

describe("arrowGetFullName()", function () {
  it("should return the full name values from within the object", function () {
    const p1 = { firstName: "John", lastName: "Doe" };
    const test1 = arrowGetFullName(p1);
    const p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
    const test2 = arrowGetFullName(p2);

    const result1 = "John Doe";
    const result2 = "Charlie Brown";

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowGetFullName.prototype).to.equal("undefined");
  });
});
