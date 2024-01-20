const chai = require("chai");
const expect = chai.expect;

const coupon = require("../problems/16-coupon.js");

describe("coupon()", function () {
  it("should return a function that accepts an array of prices to apply the discount to", function () {
    let tenPercent = coupon(0.1);
    let twentyPercent = coupon(0.2);

    expect(tenPercent([10, 20, 30])).to.eql([9, 18, 27]);
    expect(tenPercent).to.be.a("function");
    expect(twentyPercent([10, 20, 30])).to.eql([8, 16, 24]);
  });
});
