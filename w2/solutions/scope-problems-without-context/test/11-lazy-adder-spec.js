const assert = require("assert");
const lazyAdder = require("../problems/11-lazy-adder.js");

describe("lazyAdder()", function () {
  it(`should return and add input numbers through numerous function calls`, function () {
    let firstAdd = lazyAdder(1);
    let secondAdd = firstAdd(2);
    let sum = secondAdd(3);

    let func1 = lazyAdder(10);
    let func2 = func1(20);
    let total = func2(3);

    assert.equal(sum, 6);
    assert.equal(total, 33);
  });
});
