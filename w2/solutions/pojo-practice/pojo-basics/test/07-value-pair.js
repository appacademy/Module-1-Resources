const assert = require("assert");

const valuePair = require("../problems/07-value-pair.js");

describe("valuePair()", function() {
    it("should return an array of object keys and values", function() {
        const object1 = { name: "One", location: "NY", age: 3 };
        const object2 = { name: "Two", location: "SF" };

        const test1 = valuePair(object1, object2, "location");
        const test2 = valuePair(object1, object2, "name");

        const result1 = ["NY", "SF"];
        const result2 = ["One", "Two"];

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
    });
});