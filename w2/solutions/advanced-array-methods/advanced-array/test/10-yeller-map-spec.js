const assert = require('assert');

const yeller = require('../problems/10-yeller-map');

describe('yeller()', function () {
  it('should turn all the elements in the given array uppercase and imperative using Array\'s map method', function () {
    assert.deepStrictEqual(yeller(['hello', 'world']), [ 'HELLO!', 'WORLD!' ]);
    assert.deepStrictEqual(yeller(['kiwi', 'orange', 'mango']), [ 'KIWI!', 'ORANGE!', 'MANGO!' ]);
  });
});
