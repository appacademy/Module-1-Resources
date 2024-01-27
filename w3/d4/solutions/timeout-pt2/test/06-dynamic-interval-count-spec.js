const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const dynamicIntervalCount = require("../problems/06-dynamic-interval-count.js");

describe("dynamicIntervalCount()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should set an interval with the given delay", function() {
    const setIntervalSpy = chai.spy.on(global, "setInterval", () => null);
    dynamicIntervalCount(() => null, 300);
    dynamicIntervalCount(() => null, 1000);
    expect(setIntervalSpy).to.have.been.called.first.with(300);
    expect(setIntervalSpy).to.have.been.called.second.with(1000);
  });

  context("when an amount is passed as an argument", function() {
    it("should clear the interval once the callback has been called the amount of times", function(done) {
      const TEST_COUNT = 5;

      const originalClearInterval = global.clearInterval;
      const callbackSpy = chai.spy();
      chai.spy.on(global, "clearInterval", intervalId => {
        originalClearInterval(intervalId);
        expect(callbackSpy).to.have.been.called.exactly(TEST_COUNT);
        done();
      });

      dynamicIntervalCount(callbackSpy, 100, TEST_COUNT);
    });
  });

  context("when an amount is not passed as an argument", function() {
    it("should return the Timeout object that setInterval returns", function() {
      const intervalReturnSpy = chai.spy();
      chai.spy.on(global, "setInterval", () => intervalReturnSpy);
      expect(dynamicIntervalCount(() => null, 100)).to.equal(intervalReturnSpy);
    });

    it("should not clear the interval", function(done) {
      const originalClearInterval = global.clearInterval;
      const clearIntervalSpy = chai.spy.on(global, "clearInterval");
      let count = 0;
      const timeoutObj = dynamicIntervalCount(() => {
        count++;
        if (count === 20) {
          expect(clearIntervalSpy).to.have.not.been.called();
          originalClearInterval(timeoutObj);
          done();
        }
      }, 50);
    });
  });
});
