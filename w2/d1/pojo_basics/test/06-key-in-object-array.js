const assert = require("assert");

const keyInObjectArray = require("../problems/06-key-in-object-array.js");

describe("keyInObjectArray()", function() {
    it("should return true if a key is within any of the objects within the array", function() {
        let objArray = [
            { name: "Rupert" },
            { age: 42 },
            { planet: "Earth", system: "Milky Way" }
        ];
        const test1 = keyInObjectArray(objArray, "planet");
        const test2 = keyInObjectArray(objArray, "age");
        const test3 = keyInObjectArray(objArray, "food");

        const result1 = true;
        const result2 = true;
        const result3 = false;

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
        assert.deepEqual(test3, result3);
    });
});