const assert = require('assert');

const shortestWord = require('../problems/14-shortest-word');

describe('shortestWord()', function () {
  it('should return the shortest word in the given string', function () {
    assert.equal(shortestWord('what a wonderful life'), 'a');
    assert.equal(shortestWord('the quick brown fox jumps'), 'fox')
    assert.equal(shortestWord('do what you enjoy'), 'do')
  });
});
