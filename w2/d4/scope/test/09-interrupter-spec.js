const assert = require("assert");
const { expect } = require("chai");
const interrupter = require("../problems/09-interrupter.js");

describe("interrupter()", function () {
  let rudePerson = interrupter("what");
  let rudePerson2 = interrupter("yo");
  let result1 = "how what are what you";
  let result2 = "I what like what pie";
  let result3 = "I yo love yo dogs";
  it("should return a function", function(){
    expect(rudePerson).to.be.a("function")
    expect(rudePerson2).to.be.a("function")
  })
  it("should return a new sentence with the interrupting word when invoked again with a sentence", function () {
    assert.equal(rudePerson("how are you"), result1);
    assert.equal(rudePerson("I like pie"), result2);
    assert.equal(rudePerson2("I love dogs"), result3);
  });
});
