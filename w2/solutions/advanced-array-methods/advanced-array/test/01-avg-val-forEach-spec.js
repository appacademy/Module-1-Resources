const assert = require('assert');

const avgVal = require('../problems/01-avg-val-forEach');

describe('avgVal()', function () {
  it('should take the average value from the array with Array\'s forEach method', function () {
    assert.equal(avgVal([5, 10]), 7.5);
    assert.equal(avgVal([3, 7, 2, 1, 2]), 3);
    assert.equal(avgVal([]), null);
  });
});



