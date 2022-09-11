const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const reverseStr = require("../problems/17-arrow-reverse.js");
describe("reverseStr()", function () {
  it("should reverse the passed in string argument", function () {
    const test = reverseStr("hello");
    const result = "olleh";

    const test2 = reverseStr("garden");
    const result2 = "nedrag";

    const test3 = reverseStr("potato");
    const result3 = "otatop";

    assert.deepEqual(test, result);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });

  it("should be an arrow function", function () {
    expect(typeof reverseStr.prototype).to.equal("undefined");
  });
});
