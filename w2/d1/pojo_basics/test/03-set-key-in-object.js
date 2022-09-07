const assert = require("assert");


const setKeyInObject = require("../problems/03-set-key-in-object.js");

describe("setKeyInObject()", function() {
    it("should set a key-value pair into a given object", function() {
        let obj = {};
        const test1 = setKeyInObject(obj, "apple", "yum");
        const result1 = { apple: "yum" };

        let obj1 = { str: "hello" };
        const test2 = setKeyInObject(obj1, "num", 3);
        const result2 = { str: "hello", num: 3 };

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
    });
});