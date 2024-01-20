const assert = require('assert');

const removeEWords = require('../problems/04-remove-e-words-filter');

describe('removeEWords()', function () {
  it('should return a string of words without the letter "e" with Array\'s filter method', function () {
    assert.equal(removeEWords('What time is it everyone?'), 'What is it');
    assert.equal(removeEWords('Enter the building'), 'building');
  });
});
