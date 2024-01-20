const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myForEach = require("../problems/01-my-for-each.js");

describe("myForEach", function() {
  it("should mimic the built-in Array.forEach", function() {
    let test = [];
    myForEach(['laika', 'belka'], function (el) {
        test.push(el.toUpperCase());
    });
    expect(test).to.eql(['LAIKA', 'BELKA']);
  });

  it("should not call the built-in Array.forEach", function() {
    const forEachSpy = chai.spy.on(Array.prototype, "forEach");
    myForEach(['laika', 'belka'], function () {});
    expect(forEachSpy).to.have.not.been.called();
  });
});
