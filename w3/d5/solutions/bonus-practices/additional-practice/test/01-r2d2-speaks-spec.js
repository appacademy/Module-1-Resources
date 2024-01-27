const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

const r2d2Speaks = require('../problems/01-r2d2-speaks.js');

describe('r2d2Speaks()', () => {
  afterEach(() => {
    chai.spy.restore(global);
    chai.spy.restore(console);
  });

  it("should print 'beep' with 400ms break and 'boop' with 800ms break", function (done) {
    const totalTime = 2400;
    this.timeout(totalTime + 200);

    const code = [0, 1, 1, 0];

    let setTimeoutSpy;
    let setConsoleLogSpy;
    setTimeout(() => {
      expect(setTimeoutSpy).to.have.been.called.nth(1).with(400);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with('beep');

      expect(setTimeoutSpy).to.have.been.called.nth(2).with(800);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with('boop');

      done();
    }, totalTime + 100);

    setTimeoutSpy = chai.spy.on(global, 'setTimeout');
    setConsoleLogSpy = chai.spy.on(console, 'log');

    r2d2Speaks(code);
  });

  it('should retain correct timing between each console log', function (done) {
    const totalTime = 2000;
    this.timeout(totalTime + 200);

    const code = [1, 0, 1];

    let setTimeoutSpy;
    let setConsoleLogSpy;
    setTimeout(() => {
      expect(setTimeoutSpy).to.have.been.called.nth(2).with(400);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with('beep');
      expect(setTimeoutSpy).to.have.been.called.exactly(3);
      expect(setConsoleLogSpy).to.have.been.called.exactly(3);

      done();
    }, totalTime + 100);
    setTimeoutSpy = chai.spy.on(global, 'setTimeout');
    setConsoleLogSpy = chai.spy.on(console, 'log');

    r2d2Speaks(code);
  });
});
