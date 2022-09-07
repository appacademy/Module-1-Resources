const assert = require('assert');

const longWords = require('../problems/03-long-words-filter');

describe('longWords()', function () {
  it('should return an array with all words over 5 characters in the given array with Array\'s filter method', function () {
    assert.deepStrictEqual(longWords(['bike', 'skateboard', 'scooter', 'moped']), [ 'skateboard', 'scooter' ]);
    assert.deepStrictEqual(longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco']), [ 'couscous', 'ceviche', 'solyanka' ]);
  });
});

