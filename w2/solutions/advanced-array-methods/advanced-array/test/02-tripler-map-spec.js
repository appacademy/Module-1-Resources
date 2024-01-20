const assert = require('assert');

const tripler = require('../problems/02-tripler-map');

describe('tripler()', function () {
  it('should return an array of all the numbers multiplied by 3 in the given array with Array\'s map method', function () {
    assert.deepStrictEqual(tripler([2, 7, 4]), [ 6, 21, 12 ]);
    assert.deepStrictEqual(tripler([-5, 10, 0, 11]), [ -15, 30, 0, 33 ]);
  });
});
