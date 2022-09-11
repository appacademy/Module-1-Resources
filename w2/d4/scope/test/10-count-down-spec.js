const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const countDownTimer = require("../problems/10-count-down.js");

describe("countDownTimer()", function () {
  it("should return a function the specified number of times until it returns 'Happy New Year'", function () {
    let threeDays = countDownTimer(3);

    let twoDays = countDownTimer(2);

    let oneDay = countDownTimer(1);

    expect(threeDays()).to.be.a("function");
    expect(threeDays()).to.be.a("function");
    expect(twoDays()).to.be.a("function");
    assert.equal(threeDays(), "Happy New Year!");
    assert.equal(twoDays(), "Happy New Year!");
    assert.equal(oneDay(), "Happy New Year!");
    assert.equal(countDownTimer(0), "Happy New Year!");
  });
});
