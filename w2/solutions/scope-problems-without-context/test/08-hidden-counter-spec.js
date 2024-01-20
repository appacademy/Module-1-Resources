const assert = require("assert");
const hiddenCounter = require("../problems/08-hidden-counter.js");

describe("hiddenCounter()", function () {
  it("should return a function that will increment the counter when invoked", function () {
    let hidden1 = hiddenCounter();
    hidden1();
    let testResult1 = hidden1();

    let hidden2 = hiddenCounter();
    let testResult2 = hidden2();
    assert.equal(testResult1, 2);
    assert.equal(testResult2, 1);
  });
});
