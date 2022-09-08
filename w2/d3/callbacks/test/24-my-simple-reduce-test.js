const assert = require("assert");
const mySimpleReduce = require("../problems/24-my-simple-reduce.js");

describe("mySimpleReduce", function() {
  it("should mimic the behavior of the built in Array.reduce", function() {
    let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
      return sum + el;
    });
    assert.equal(result1, 14);

    let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
      return product * el;
    });
    assert.equal(result2, 48);

    let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
      if (el > max) {
        return el;
      } else {
        return max;
      }
    });
    assert.equal(result3, 8);
  });
});
