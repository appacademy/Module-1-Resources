const assert = require("assert");

const keysInObject = require("../problems/01-keys-in-object.js");

describe("keysInObject()", function() {
    it("should return an array containing all object keys", function() {
        const animals = keysInObject({ dog: "Wolfie", cat: "Jet", bison: "Bilbo" });
        const animalResult = ["dog", "cat", "bison"];

        const foods = keysInObject({
            apple: "tart",
            lemon: "sour",
            mango: "sweet"
        });
        
        const foodResult = ["apple", "lemon", "mango"];

        assert.deepEqual(animals, animalResult);
        assert.deepEqual(foods, foodResult);
    });
});