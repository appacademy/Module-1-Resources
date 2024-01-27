const assert = require('assert');
const sort = require('../problems/02-recursive-sort.js');

describe('sort()', () => {
  it('should return an array', () => {
    assert.strictEqual(Array.isArray(sort([3, 2, 1])), true);
  });

  it('should sort the contents of an array from smallest to largest', () => {
    assert.deepEqual(sort([9]), [9]);
    assert.deepEqual(sort([3, 2, 1]), [1, 2, 3]);
    assert.deepEqual(sort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(
      sort([14, 5, 10, 6, 3, 4, 21, 16, 9]),
      [3, 4, 5, 6, 9, 10, 14, 16, 21]
    );
  });

  it('should return an empty array if passed an empty array', () => {
    assert.deepEqual(sort([]), []);
  });
});
