const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const setSecondsTimeoutArgs = require("../problems/02-set-seconds-timeout-args.js");

describe("setSecondsTimeoutArgs()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it ("should set a timeout with the given delay", function() {
    const timeoutSpy = chai.spy.on(global, "setTimeout", () => null);
    setSecondsTimeoutArgs(() => null, 0.25, 5, 1, 4);
    setSecondsTimeoutArgs(() => null, 0.7, 'hello', 'world');
    expect(timeoutSpy).to.have.been.first.called.with(250);
    expect(timeoutSpy).to.have.been.second.called.with(700);
    chai.spy.restore(global);
  });

  context("when 3 additional args are provided", function() {
    it("should call the callback with the 3 args", function(done) {
      function callback(...args){
        expect(args).to.eql([5, 1, 4])
        done();
      }
      setSecondsTimeoutArgs(callback, 0.25, 5, 1, 4);
    });
  });

  context("when 2 additional args are provided", function() {
    it("should call the callback with the 2 args", function(done) {
      function callback(...args){
        expect(args).to.eql(['hello', 'world'])
        done();
      }
      setSecondsTimeoutArgs(callback, 0.7, 'hello', 'world');
    });
  });
});
