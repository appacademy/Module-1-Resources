const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const plannedIntersect = require("../problems/18-planned-intersection.js");

describe("plannedIntersect()", function () {
  it("when invoked it should return a function", function () {
    let abc = plannedIntersect(["a", "b", "c"]);

    expect(abc).to.be.a("function");
  });

  it("when the function returned by plannedIntersect is invoked with an array it should return a list of common elements", function () {
    let abc = plannedIntersect(["a", "b", "c"]);
    let fame = plannedIntersect(["f", "a", "m", "e"]);

    expect(abc(["b", "d", "c"]).sort()).to.eql(["b", "c"]);
    expect(fame(["a", "f", "z", "b"]).sort()).to.eql(["a", "f"]);
  });
});
