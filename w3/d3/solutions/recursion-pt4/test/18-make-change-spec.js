const assert = require("assert");

const makeBetterChange = require("../problems/18-bonus-make-change.js");

function includesEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let matches = [];
  for (let ele1 of arr1) {
    let matched = false;
    for (let i = 0; i < arr2.length; i++) {
      if (matches.includes(i)) continue;
      const ele2 = arr2[i];
      if (ele1 === ele2) {
        matches.push(i);
        matched = true;
        break;
      }
    }
    if (!matched) return false
  }
  return true;
}

describe("makeBetterChange()", function () {
  it("should return the best way to make change for the given target amount", function () {
    assert.strictEqual(includesEqual(makeBetterChange(21), [1, 10, 10]), true);
    assert.strictEqual(includesEqual(makeBetterChange(75), [25, 25, 25]), true);
    assert.strictEqual(includesEqual(makeBetterChange(33, [15, 3]), [3, 15, 15]), true);
    assert.strictEqual(makeBetterChange(34, [15, 3]), null);
    assert.strictEqual(includesEqual(makeBetterChange(24, [10, 7, 1]), [7, 7, 10]), true);
  });
});
