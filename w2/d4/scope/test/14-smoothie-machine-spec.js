const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const smoothieMachine = require("../problems/14-smoothie-machine.js");
describe("smoothieMachine()", function () {
  it("should return a function", function () {
    let smoothie1 = smoothieMachine();
    let smoothie2 = smoothieMachine("apples", "bananas", "berries");

    expect(smoothie1 instanceof Function).to.eql(true);
    expect(smoothie2 instanceof Function).to.eql(true);
  });

  it("should accept multiple params to add to the parameters of the returned function and join them together", function () {
    let smoothie1 = smoothieMachine();
    let smoothie2 = smoothieMachine("apples", "bananas", "berries");

    let test1 = smoothie1("milk");
    let result1 = "I'm having a smoothie with milk";
    let test2 = smoothie1("kale", "spinach");
    let result2 = "I'm having a smoothie with milk and kale and spinach";
    let test3 = smoothie1("honey", "pears", "berries");
    let result3 =
      "I'm having a smoothie with milk and kale and spinach and honey and pears and berries";
    let test4 = smoothie2("pineapple");
    let result4 =
      "I'm having a smoothie with apples and bananas and berries and pineapple";

    assert.equal(test1, result1);
    assert.equal(test2, result2);
    assert.equal(test3, result3);
  });
});
