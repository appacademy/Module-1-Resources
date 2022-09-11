const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const recVolume = require("../problems/12-volume.js");

describe("recVolume()", function () {
  it("should return a function that can be invoked twice to find the volume of a rectangle", function () {
    let table1 = recVolume(5);
    table1(4);

    let table2 = recVolume(3);
    table2(2);
    expect(table1(3)).to.eql(60);
    expect(table1(145)).to.eql(60);
    expect(table2(1)).to.eql(6);
    expect(table2(76)).to.eql(6);
  });

  it("should return a function when it doesn't yet have all dimension", function () {

    let table = recVolume(4)
    expect(table(2)).to.be.a("function");

  });
});
