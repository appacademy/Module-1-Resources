const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const printOuterNumsFirst = require("../problems/02-print-outer-nums-first.js");

describe("printOuterNumsFirst()", function () {
  afterEach(function () {
    chai.spy.restore(global);
  });

  it("should print the outermost numbers first starting at the beginning number for an even amount of numbers", function () {
    let setConsoleLogSpy = chai.spy.on(console, "log");

    printOuterNumsFirst([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(setConsoleLogSpy).to.have.been.called.nth(1).with(1);
    expect(setConsoleLogSpy).to.have.been.called.nth(2).with(8);
    expect(setConsoleLogSpy).to.have.been.called.nth(3).with(2);
    expect(setConsoleLogSpy).to.have.been.called.nth(4).with(7);
    expect(setConsoleLogSpy).to.have.been.called.nth(5).with(3);
    expect(setConsoleLogSpy).to.have.been.called.nth(6).with(6);
    expect(setConsoleLogSpy).to.have.been.called.nth(7).with(4);
    expect(setConsoleLogSpy).to.have.been.called.nth(8).with(5);
  });

  it("should print the outermost numbers first starting with the end number for an odd amount of numbers", function () {
    let setConsoleLogSpy = chai.spy.on(console, "log");
    let setPrintSpy = chai.spy(printOuterNumsFirst);
    setPrintSpy([21, 4, 6, 93, 78]);
    expect(setConsoleLogSpy).to.have.been.called.nth(1).with(78);
    expect(setConsoleLogSpy).to.have.been.called.nth(2).with(21);
    expect(setConsoleLogSpy).to.have.been.called.nth(3).with(93);
    expect(setConsoleLogSpy).to.have.been.called.nth(4).with(4);
    expect(setConsoleLogSpy).to.have.been.called.nth(5).with(6);
  });
});
