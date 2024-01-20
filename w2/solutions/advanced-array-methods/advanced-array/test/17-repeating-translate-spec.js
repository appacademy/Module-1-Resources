const assert = require('assert');

const repeatingTranslate = require('../problems/17-repeating-translate');

describe('repeatingTranslate()', function () {
  it('should return a new string that is the given string translated using the rules provided', function () {
    assert.equal(repeatingTranslate("we like to go running fast"), "we likelike to go runninging fastast");
    assert.equal(repeatingTranslate("he cannot find the trash"),   "he cannotot findind thethe trashash");
    assert.equal(repeatingTranslate("pasta is my favorite dish"),  "pastapasta is my favoritefavorite dishish");
    assert.equal(repeatingTranslate("her family flew to France"),  "herer familyily flewew to FranceFrance");
  });
});


