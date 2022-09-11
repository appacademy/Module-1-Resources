const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const sandwichMaker = require("../problems/06-closure-sandwiches.js");

describe("sandwichMaker()", function () {
  it("should return a function that accepts new arguments for the order", function () {
    let sandwich = sandwichMaker();
    let result1 = "One sandwich with tomato and spinach";
    let result2 = "One sandwich with tomato and spinach and jelly";
    let result3 = "One sandwich with tomato and spinach and jelly and bread";

    expect(sandwich).to.be.a("function")
    assert.equal(sandwich("spinach"), result1);
    assert.equal(sandwich("jelly"), result2);
    assert.equal(sandwich("bread"), result3);
  });
});
