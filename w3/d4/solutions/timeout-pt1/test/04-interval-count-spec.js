const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const intervalCount = require("../problems/04-interval-count.js");

describe("intervalCount()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should set an interval with the given delay", function() {
    const setIntervalSpy = chai.spy.on(global, "setInterval", () => null);
    intervalCount(() => null, 300);
    intervalCount(() => null, 1000);
    expect(setIntervalSpy).to.have.been.called.first.with(300);
    expect(setIntervalSpy).to.have.been.called.second.with(1000);
  });

  it("should clear the interval once the callback has been called the amount of times", function(done) {
    const TEST_COUNT = 4;

    const originalClearInterval = global.clearInterval;
    const callbackSpy = chai.spy();
    chai.spy.on(global, "clearInterval", (intervalId) => {
        originalClearInterval(intervalId);
        expect(callbackSpy).to.have.been.called.exactly(TEST_COUNT);
        done();
    });

    intervalCount(callbackSpy, 100, TEST_COUNT);
  });
});
