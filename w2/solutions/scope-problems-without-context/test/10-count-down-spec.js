const assert = require("assert");

const countDownTimer = require("../problems/10-count-down.js");

describe("countDownTimer()", function () {
  it("should return a function the specified number of times until it returns 'Happy New Year'", function () {
    let threeDays = countDownTimer(3);
    threeDays();
    threeDays();

    let twoDays = countDownTimer(2);
    twoDays();

    let oneDay = countDownTimer(1);

    assert.equal(threeDays(), "Happy New Year!");
    assert.equal(twoDays(), "Happy New Year!");
    assert.equal(oneDay(), "Happy New Year!");
    assert.equal(countDownTimer(0), "Happy New Year!");
  });
});
