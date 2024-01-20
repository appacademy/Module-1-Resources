const assert = require('assert');

const choosePrimes = require('../problems/15-choose-primes');

describe('choosePrimes()', function () {
  it('should return an array of prime numbers', function () {
    assert.deepStrictEqual(choosePrimes([36, 48, 9, 13, 19]), [ 13, 19 ]);
    assert.deepStrictEqual(choosePrimes([5, 6, 4, 11, 2017]), [ 5, 11, 2017 ]);
  });
});
