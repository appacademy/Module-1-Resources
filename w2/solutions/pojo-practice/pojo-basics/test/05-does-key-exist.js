const assert = require("assert");

const doesKeyExist = require("../problems/05-does-key-exist.js");

describe("doesKeyExist()", function() {
    it("should return true if a key is within an object", function() {
        let obj1 = { bootcamp: "App Academy", course: "Bootcamp Prep" };
        const test1 = doesKeyExist(obj1, "course");
        const test2 = doesKeyExist(obj1, "name");

        const result1 = true;
        const result2 = false;

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
    });
});