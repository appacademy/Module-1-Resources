const assert = require('assert');

const sumForEach = require('../problems/00-sum-forEach');

describe('sumForEach()', function () {
  it('should add all the numbers in the given array with Array\'s forEach method', function () {
    assert.equal(sumForEach([4, 3, -1, 10]), 16);
    assert.equal(sumForEach([6, 7, 2]), 15);
    assert.equal(sumForEach([]), 0);
  });
});

