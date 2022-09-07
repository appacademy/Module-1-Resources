const assert = require("assert");

const valuesInObject = require("../problems/02-values-in-object.js");

describe("valuesInObject()", function() {
    it("should return an array containing all object values", function() {
            const animals = valuesInObject({
            dog: "Wolfie",
            cat: "Jet",
            bison: "Bilbo"
        });
            const animalResult = ["Wolfie", "Jet", "Bilbo"];

            const foods = valuesInObject({
            apple: "tart",
            lemon: "sour",
            mango: "sweet"
        });
        const foodResult = ["tart", "sour", "sweet"];

        assert.deepEqual(animals, animalResult);
        assert.deepEqual(foods, foodResult);
    });
});