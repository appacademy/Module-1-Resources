const assert = require('assert');

const hipsterfy = require('../problems/16-hipsterfy');

describe('hipsterfy()', function () {
  it('should return the string with the last vowel of every word removed', function () {
    assert.equal(hipsterfy('When should everyone wake up?'), 'Whn shold everyon wak p?');
    assert.equal(hipsterfy('get ready for our bootcamp'), 'gt redy fr or bootcmp');
    assert.equal(hipsterfy('panthers are great animals'), 'panthrs ar gret animls');
  });
});
