const assert = require('assert');
const dynamicSlice = require('../problems/04-dynamic-slice.js');

describe('dynamicSlice()', () => {
  it('should return a function', () => {
    const slicer = dynamicSlice(2, 4);
    assert.equal(slicer instanceof Function, true);
  });

  it('the returned function should return a copy of the correct portion of the original array', () => {
    const slicer = dynamicSlice(1, 3);
    assert.deepEqual(slicer([0, 1, 2, 3]), [1, 2]);

    const slicer2 = dynamicSlice(2, 5);
    assert.deepEqual(slicer2([2, 'hello', false, 11, 'goodbye']), [false, 11, 'goodbye']);

  });

  it('should exclude indices not available to the array', () => {
    const slicer = dynamicSlice(2, 7);
    assert.deepEqual(slicer([0, 1, 2, 3]), [2, 3]);
    assert.deepEqual(slicer(['kittens', 'puppies', 'cats', 'dogs']), ['cats', 'dogs']);

    const slicer2 = dynamicSlice(-10, 2);
    assert.deepEqual(slicer2([99, 40, 131, 8]), [99, 40]);
  });
});
