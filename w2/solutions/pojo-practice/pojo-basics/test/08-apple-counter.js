const assert = require("assert");

const appleCounter = require("../problems/08-apple-counter.js");

describe("appleCounter()", function() {
    it("should return a count of the number of keys that contain the word apple", function() {
        const obj = { banana: "yay!" };
        const test1 = appleCounter(obj); // => 0

        const obj1 = { crabapple: "yum!" };
        const test2 = appleCounter(obj1); // => 1

        const obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
        const test3 = appleCounter(obj2); // => 2

        const obj3 = {
            crabApple: "yum!",
            honeyApple: "super yum",
            banana: "yay",
            bigapple: "NYC"
        };
        const test4 = appleCounter(obj3); // => 3

        const result1 = 0;
        const result2 = 1;
        const result3 = 2;
        const result4 = 3;

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
        assert.deepEqual(test3, result3);
        assert.deepEqual(test4, result4);
    });
});
