const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const postponeWithArgs = require("../problems/07-postpone-with-args.js");

describe("postponeWithArgs()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should return a function", function() {
    expect(postponeWithArgs(() => null, 1000)).to.be.a("function");
  });

  it("should return a function that executes the callback after the given delay when it is called", function(done) {
    const setTimeoutSpy = chai.spy.on(global, "setTimeout");
    const callbackSpy = chai.spy(() => {
      expect(setTimeoutSpy).to.have.been.called.once.with(250);
      expect(callbackSpy).to.have.been.called.once;
      done();
    });
    postponeWithArgs(callbackSpy, 250)();
  });

  it("the returned function should pass any arguments to the callback when it is called", function(done) {
    const arg1 = chai.spy();
    const arg2 = chai.spy();
    const arg3 = chai.spy();
    const callbackSpy = chai.spy(() => {
      expect(callbackSpy).to.have.been.called.once.with.exactly(arg1, arg2, arg3);
      done();
    });
    postponeWithArgs(callbackSpy, 250)(arg1, arg2, arg3);
  });
});
