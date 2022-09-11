const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const funcTimer = require("../problems/07-set-time-out");

describe("funcTimer()", function () {
  it("should invoke the callback function after a specified time", function (done) {
    let startTime = new Date();
    let msecs = 500;

    this.timeout(msecs + 500);

    funcTimer(msecs, function() {
      let endTime = new Date();
      let diff = endTime - startTime;
      assert.equal(diff >= msecs - 10, true);
      assert.equal(diff <= msecs + 10, true);
      done();
    });
  });
});
