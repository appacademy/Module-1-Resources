const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const coinCollector = require("../problems/19-coin-collector.js");

describe("coinCollector()", function () {
  it("should return a function numCoins number of times before returning an array of all collected coins", function () {
    let oneCoin = coinCollector(1);

    let twoCoins = coinCollector(2);
    twoCoins(25);

    let threeCoins = coinCollector(3);
    threeCoins(25);
    threeCoins(5);

    expect(oneCoin).to.be.a("function");
    expect(oneCoin(10)).to.eql([10]);
    expect(twoCoins).to.be.a("function");
    expect(twoCoins(10)).to.eql([25, 10]);
    expect(threeCoins).to.be.a("function");
    expect(threeCoins(10)).to.eql([25, 5, 10]);
  });
});
