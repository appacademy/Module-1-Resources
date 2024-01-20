const assert = require('assert');

const longestWord = require('../problems/12-longest-word');

describe('longestWord()', function () {
  it('should return the longest word in the given string', function () {
    assert.equal(longestWord('where did everyone go'), 'everyone');
    assert.equal(longestWord('prefer simplicity over complexity'), 'simplicity');
    assert.equal(longestWord(''), '');
  });
});


