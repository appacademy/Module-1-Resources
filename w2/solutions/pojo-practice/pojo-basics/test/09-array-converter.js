const assert = require("assert");

const arrayConverter = require("../problems/09-array-converter.js");

describe("arrayConverter()", function() {
    it("should convert an array into an object with keys are the elements, and the values are the number of occurrences of each element", function() {
        const test1 = arrayConverter(["apple", "apple"]);
        const result1 = { apple: 2 };

        const test2 = arrayConverter(["mango", "pineapple"]);
        const result2 = { mango: 1, pineapple: 1 };

        const test3 = arrayConverter(["apple", "banana", "potato", "banana"]);
        const result3 = { apple: 1, banana: 2, potato: 1 };

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
        assert.deepEqual(test3, result3);
    });
});