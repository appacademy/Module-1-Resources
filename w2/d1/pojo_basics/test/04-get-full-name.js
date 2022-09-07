const assert = require("assert");

const getFullName = require("../problems/04-get-full-name.js");

describe("getFullName()", function() {
    it("should return the full name values from within the object", function() {
        const p1 = { firstName: "John", lastName: "Doe" };
        const test1 = getFullName(p1);
        const p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
        const test2 = getFullName(p2);

        const result1 = "John Doe";
        const result2 = "Charlie Brown";

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
    });
});