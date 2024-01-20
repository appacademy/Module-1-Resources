const assert = require("assert");
const interrupter = require("../problems/09-interrupter.js");

describe("interrupter()", function () {
  it("should return a function that accepts new arguments and interjects the original passed in word", function () {
    let rudePerson = interrupter("what");
    let rudePerson2 = interrupter("yo");
    let result1 = "how what are what you";
    let result2 = "I what like what pie";
    let result3 = "I yo love yo dogs";

    assert.equal(rudePerson("how are you"), result1);
    assert.equal(rudePerson("I like pie"), result2);
    assert.equal(rudePerson2("I love dogs"), result3);
  });
});
