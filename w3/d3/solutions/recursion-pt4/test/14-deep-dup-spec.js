const assert = require("assert");

const deepDup = require('../problems/14-deep-dup');

describe("deepDup()", function () {
  it("should return a deep duplicated version of the given array", function () {
    let arr = [1, 2, 3];
    let duped = deepDup(arr); // [1, 2, 3]
    assert.deepStrictEqual(duped, [1, 2, 3]);
    assert.strictEqual(arr === duped, false);

    arr = [1, [2, [3]]];
    duped = deepDup(arr); // [1, [2, [3]]]
    assert.deepStrictEqual(duped, [1, [2, [3]]]);
    assert.strictEqual(arr === duped, false);
    assert.strictEqual(arr[1] === duped[1], false);
    assert.strictEqual(arr[1][1] === duped[1][1], false);
  });
});
