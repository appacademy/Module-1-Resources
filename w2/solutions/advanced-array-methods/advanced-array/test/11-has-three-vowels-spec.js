const assert = require('assert');

const hasThreeVowels = require('../problems/11-has-three-vowels');

describe('hasThreeVowels()', function () {
  it('should return true if the given string has three different vowels, else false', function () {
    assert.equal(hasThreeVowels('delicious'), true);
    assert.equal(hasThreeVowels('bootcamp prep'), true);
    assert.equal(hasThreeVowels('bootcamp'), false);
    assert.equal(hasThreeVowels('dog'), false);
    assert.equal(hasThreeVowels('go home'), false);
  });
});
