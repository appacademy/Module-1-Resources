const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const mirrorArray = require("../problems/05-arrow-mirror-array.js");

describe("mirrorArray()", function () {
  it("should return a single array where the first half is the original array and the second half is a mirror of the first half", function () {
    assert.deepEqual(mirrorArray([1, 2, 3]), [1, 2, 3, 3, 2, 1]);
    assert.deepEqual(mirrorArray(["a", "b", "c", "d"]), [
      "a",
      "b",
      "c",
      "d",
      "d",
      "c",
      "b",
      "a",
    ]);
  });

  it("should be an arrow function", function () {
    expect(typeof mirrorArray.prototype).to.equal("undefined");
  });
});
