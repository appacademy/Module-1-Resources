const assert = require("assert");
const evenNumberRange = require("../problems/03-even-number-range.js");

describe("evenNumberRange()", function() {
    it("should return an array", function() {
        assert.strictEqual(Array.isArray(evenNumberRange(-3, 2)), true);
    });

    it("containing all even numbers between the two arguments inclusively", function() {
        assert.deepEqual(evenNumberRange(-3, 2), [-2, 0, 2]);
        assert.deepEqual(evenNumberRange(22, 25), [22, 24]);
        assert.deepEqual(evenNumberRange(2, 2), [2]);
    });

    it ("should return an empty array if the first argument is greater than the second", function() {
        assert.deepEqual(evenNumberRange(3, 2), []);
        assert.deepEqual(evenNumberRange(1, -1), []);

    });
})