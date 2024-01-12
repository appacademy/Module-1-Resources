const chai = require("chai");
const expect = chai.expect;
const isSorted = require("../problems/02-debugging-is-sorted");

describe("isSorted", function() {
  it("isSorted([1]) returns true", function () {
    expect(isSorted([1])).to.be.true;
  });
  it("isSorted([1, 2, 3, 4, 5]) returns true", function () {
    expect(isSorted([1, 2, 3, 4, 5])).to.be.true;
  });
  it("isSorted([2, 2, 4, 4]) returns true", function () {
    expect(isSorted([2, 2, 4, 4])).to.be.true;
  });
  it("isSorted([1, 2, 4, 3, 5, 6]) returns false", function () {
    expect(isSorted([1, 2, 4, 3, 5, 6])).to.be.false;
  });
});
