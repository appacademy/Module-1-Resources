const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const printAndPause = require("../problems/04-print-and-pause.js");

describe("printAndPause()", function() {
  afterEach(function() {
    chai.spy.restore(global);
    chai.spy.restore(console);
  });

  it("print and pause small numbers", function(done) {
    let msecs = 400;
    this.timeout(msecs + 200);

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with(100);

      expect(setIntervalSpy).to.have.been.called.nth(2).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with(100);

      expect(setIntervalSpy).to.have.been.called.nth(3).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(3).with(100);

      expect(setIntervalSpy).to.have.been.called.nth(4).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(4).with(100);

      done();
    }, msecs + 100);

    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    printAndPause([100, 100, 100, 100]);
  });

  it("print and pause big numbers", function(done) {
    let msecs = 2000;
    this.timeout(msecs + 200);

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(1000);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with(1000);

      expect(setIntervalSpy).to.have.been.called.nth(2).with(1000);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with(1000);

      done();
    }, msecs + 100);

    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    printAndPause([1000, 1000]);
  });

  it("print and pause for each number in a list", function(done) {
    let msecs = 3000;
    this.timeout(msecs + 200);

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with(200);

      expect(setIntervalSpy).to.have.been.called.nth(2).with(800);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with(800);

      expect(setIntervalSpy).to.have.been.called.nth(3).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(3).with(200);

      expect(setIntervalSpy).to.have.been.called.nth(4).with(800);
      expect(setConsoleLogSpy).to.have.been.called.nth(4).with(800);

      expect(setIntervalSpy).to.have.been.called.nth(5).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(5).with(200);

      expect(setIntervalSpy).to.have.been.called.nth(6).with(800);
      expect(setConsoleLogSpy).to.have.been.called.nth(6).with(800);


      done();
    }, msecs + 100);

    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    printAndPause([200,800,200,800,200,800]);
  });

  it("should retain correct timing between each console log", function(done) {
    let msecs = 2000;
    this.timeout(msecs + 200);

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(2).with(100);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with(100);
      expect(setIntervalSpy).to.have.been.called.exactly(2);
      expect(setConsoleLogSpy).to.have.been.called.exactly(2);

      done();
    }, 400);

    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    printAndPause([300,100,300]);
  });
});
