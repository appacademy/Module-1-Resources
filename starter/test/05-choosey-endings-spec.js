const assert = require('assert');

const chooseyEndings = require('../problems/05-choosey-endings-filter');

describe('chooseyEndings()', function () {
  it('should return an array of strings only with the given ending with Array\'s filter method', function () {
    assert.deepStrictEqual(
      chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'ly'),
      [ 'family', 'fly', 'timidly' ]
    );

    assert.deepStrictEqual(
      chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'nd'),
      [ 'hound', 'bond' ]
    );

    assert.deepStrictEqual(
      chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'),
      [ 'simplicity', 'felicity' ]
    );

    assert.deepStrictEqual(
      chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'),
      [ ]
    );

    assert.deepStrictEqual(
      chooseyEndings(17, 'ily'),
      []
    );
  });
});




