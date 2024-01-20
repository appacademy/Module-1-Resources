const assert = require("assert");

const stringConverter = require("../problems/10-string-converter.js");

describe("stringConverter()", function() {
    it("should convert a string into an object with keys are the letters, and the values are the number of occurrences of each letter", function() {
        const apple = stringConverter("apple");
        const appleResult = { a: 1, p: 2, l: 1, e: 1 };

        const banana = stringConverter("banana");
        const bananaResult = { b: 1, a: 3, n: 2 };

        const raccoon = stringConverter("raccoon");
        const raccoonResult = { r: 1, a: 1, c: 2, o: 2, n: 1 };

        assert.deepEqual(apple, appleResult);
        assert.deepEqual(banana, bananaResult);
        assert.deepEqual(raccoon, raccoonResult);
    });
});