const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const postpone = require("../problems/05-postpone.js");

describe("postpone()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should return a function", function() {
    expect(postpone(() => null, 1000)).to.be.a("function");
  });

  it("should return a function that executes the callback after the given delay when it is called", function(done) {
    const setTimeoutSpy = chai.spy.on(global, "setTimeout");
    const callbackSpy = chai.spy(() => {
      expect(setTimeoutSpy).to.have.been.called.once.with(250);
      expect(callbackSpy).to.have.been.called.once;
      done();
    });
    postpone(callbackSpy, 250)();
  });
});
