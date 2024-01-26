const assert = require("assert");
const eliminateType = require("../problems/03-eliminate-type.js");

describe("eliminateType()", function() {
  it("should return a function", function() {
    assert.equal(eliminateType([]) instanceof Function, true)
  });

  it("should remove the specified type from the array", function() {
    const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
    assert.deepStrictEqual(
      eliminate('number'), 
      [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
    );
    assert.deepStrictEqual(
      eliminate('object'), 
      [2, undefined, 'world', true, 3, 'hello', false]
    );
  });
});
