const assert = require("assert");

const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const mostFrequentVowel= require("../problems/01-most-frequent-vowel.js");

describe("mostFrequentVowel()", function() {

  it("should return the most frequent vowel in the strings of the given array", function() {
    let fruits = ['apple', 'pear', 'melon', 'coconut', 'lime'];
    let counter = {};
    let vowel = mostFrequentVowel(fruits, counter);
    assert.strictEqual(vowel, 'e');

    fruits = ['apple', 'pear', 'melon', 'coconut'];
    counter = { 'i': 1, 'e': 1 };
    vowel = mostFrequentVowel(fruits, counter);
    assert.strictEqual(vowel, 'e');
    assert.deepStrictEqual(counter, { 'i': 1, 'e': 4, 'o': 3, 'u': 1, 'a': 2 });

    fruits = ['apple', 'pear', 'melon'];
    counter = { 'i': 1, 'e': 1, 'o': 2, 'u': 1 };
    vowel = mostFrequentVowel(fruits, counter);
    assert.strictEqual(vowel, 'e');
    assert.deepStrictEqual(counter, { 'i': 1, 'e': 4, 'o': 3, 'u': 1, 'a': 2 });

    fruits = ['apple', 'pear'];
    counter = { 'i': 1, 'e': 2, 'o': 3, 'u': 1 };
    vowel = mostFrequentVowel(fruits, counter);
    assert.strictEqual(vowel, 'e');
    assert.deepStrictEqual(counter, { 'i': 1, 'e': 4, 'o': 3, 'u': 1, 'a': 2 });

    fruits = ['apple'];
    counter = { 'i': 1, 'e': 3, 'o': 3, 'u': 1, 'a': 1 };
    vowel = mostFrequentVowel(fruits, counter);
    assert.strictEqual(vowel, 'e');
    assert.deepStrictEqual(counter, { 'i': 1, 'e': 4, 'o': 3, 'u': 1, 'a': 2 });
  });

  it("should return an empty string when you haven't passed in any vowels", function() {
    emptyArray = [];
    vowel = mostFrequentVowel(emptyArray);
    assert.strictEqual(vowel, "")
  })

  it("should accept a default object argument as initial counter", function () {
    let animals = ['dog', 'cow', 'pig', 'chicken'];
    let counter = { 'a': 4 };
    let vowel = mostFrequentVowel(animals, counter);
    assert.strictEqual(vowel, 'a');
  });

  it("should return any of the most frequent vowels if there is a tie", function() {
    let animals = ['e', 'e', 'e', 'o', 'o', 'o', 'a', 'a', 'i'];
    vowel = mostFrequentVowel(animals);
    assert.strictEqual(['o', 'e'].includes(vowel), true);
  });
});
