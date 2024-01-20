const assert = require('assert');

const unique = require('../problems/13-unique');

describe('unique()', function () {
  it('should return an array of unique values with Array\'s map method', function () {
    assert.deepStrictEqual(unique([1, 1, 2, 3, 3]), [1, 2, 3]);
    assert.deepStrictEqual(unique([11, 7, 8, 10, 8, 7, 7]), [11, 7, 8, 10]);
    assert.deepStrictEqual(unique(['a', 'b', 'c', 'b']), ['a', 'b', 'c']);
  });
});
