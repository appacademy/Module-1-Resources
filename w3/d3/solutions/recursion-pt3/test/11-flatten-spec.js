const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const flatten = require('../problems/11-flatten');

describe("flatten()", function () {
  it("should return the all the nested array contents in a single array", function () {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([1, 2]), [1, 2]);
    assert.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3]);
    assert.deepEqual(flatten([[[[]]]]), []);
    assert.deepEqual(
      flatten([
        [1, 2],
        [3, [4, 5]],
      ]),
      [1, 2, 3, 4, 5]
    );
    assert.deepEqual(flatten([[[1, 2]], [[3, 4]]]), [1, 2, 3, 4]);
  });
  it("should not call the Array.prototype.flat() method", function () {
    const flatSpy = chai.spy.on(Array.prototype, "flat");
    assert.deepEqual(flatten([[[[]]]]), []);
    expect(flatSpy).to.have.not.been.called();
  })
});