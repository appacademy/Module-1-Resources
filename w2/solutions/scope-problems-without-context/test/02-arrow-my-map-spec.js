const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const arrowMyMap = require("../problems/02-arrow-my-map.js");

describe("arrowMyMap()", function () {
  it("should function like the built in Array.map", function () {
    let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
    expect(result1).to.eql([10, 5, 9, 8]);

    let result2 = arrowMyMap(["run", "Forrest"], function (el) {
      return el.toUpperCase() + "!";
    });
    expect(result2).to.eql(["RUN!", "FORREST!"]);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowMyMap.prototype).to.equal("undefined");
  });

  it("should not call the built in Array.map", function () {
    const mapSpy = chai.spy.on(Array.prototype, "map");
    arrowMyMap([100, 25, 81, 64], Math.sqrt);
    expect(mapSpy).to.not.have.been.called();
  });
});
