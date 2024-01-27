const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const setSecondsTimeout = require("../problems/01-set-seconds-timeout.js");

describe("setSecondsTimeout()", function() {
  let timeoutSpy;

  beforeEach(function() {
    timeoutSpy = chai.spy.on(global, "setTimeout", () => null);
  });

  afterEach(function() {
    chai.spy.restore(global);
  });

  context("when the delay arg is 1 second", function() {
    it("should set a timeout on the callback for 1000ms", function() {
      const callback = () => null;
      setSecondsTimeout(callback, 1);
      expect(timeoutSpy).to.have.been.called.once.with.exactly(callback, 1000);
    });
  });

  context("when the delay arg is 1.4 seconds", function() {
    it("should set a timeout on the callback for 1400ms", function() {
      const callback = () => null;
      setSecondsTimeout(callback, 1.4);
      expect(timeoutSpy).to.have.been.called.once.with.exactly(callback, 1400);
    });
  });
});
