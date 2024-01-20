const assert = require("assert");
const mapMutator = require("../problems/14-map-mutator.js");

describe("mapMutator", function() {
  it("should pass each element and index into the callback and use the result to overwrite elements of the original array", function() {
    let arr1 = [4, 2, 6, 5];
    mapMutator(arr1, function(el) {
      return el * 2;
    });
    assert.deepEqual(arr1, [ 8, 4, 12, 10 ]);

    let arr2 = [8, 9, 10];
    mapMutator(arr2, function(el, i) {
      return el * i;
    });
    assert.deepEqual(arr2, [ 0, 9, 20 ]);
  });
});
