const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const batchTimeouts = require("../problems/03-batch-timeouts.js");

describe("batchTimeouts()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should set a timeout for each callback with the correct delay", function() {
    const callbackSpies = [chai.spy(), chai.spy(), chai.spy()];
    const delays = [500, 200, 900];
    const timeoutSpy = chai.spy.on(global, "setTimeout");
    batchTimeouts(callbackSpies, delays);
    expect(timeoutSpy).to.have.been.first.called.with.exactly(
      callbackSpies[0],
      delays[0]
    );
    expect(timeoutSpy).to.have.been.second.called.with.exactly(
      callbackSpies[1],
      delays[1]
    );
    expect(timeoutSpy).to.have.been.third.called.with.exactly(
      callbackSpies[2],
      delays[2]
    );
  });

  it("should return an array containing the Timeout objects that are returned by each call to setTimeout", function() {
    chai.spy.on(global, "setTimeout");
    const callbacks = [() => null, () => null];
    const delays = [500, 200]
    const everyValueTimeout = batchTimeouts(callbacks, delays).every(val => val.constructor.name === 'Timeout');
    expect(everyValueTimeout).to.equal(true);
  });
});
