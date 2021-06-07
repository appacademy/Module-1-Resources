const assert = require('assert');

const removeEWords = require('../problems/04-remove-e-words-filter');

describe('removeEWords()', function () {
  it('should return an array with all words over 5 characters in the given array with Array\'s filter method', function () {
    assert.equal(removeEWords('What time is it everyone?'), 'What is it');
    assert.equal(removeEWords('Enter the building'), 'building');
  });
});


