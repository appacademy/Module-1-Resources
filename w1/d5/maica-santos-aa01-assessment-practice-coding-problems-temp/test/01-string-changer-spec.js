const chai = require("chai");
const expect = chai.expect;
const stringChanger = require("../problems/01-string-changer");

describe("stringChanger", function() {
  it("stringChanger('foo', 'capitalize') returns 'Foo'", function () {
    expect(stringChanger('foo', 'capitalize')).to.eq('Foo');
  });
  it("stringChanger('foo', 'uppercase') returns 'FOO'", function () {
    expect(stringChanger('foo', 'uppercase')).to.eq('FOO');
  });
  it("stringChanger('foo', 'double') returns 'foofoo'", function () {
    expect(stringChanger('foo', 'double')).to.eq('foofoo');
  });
  it("stringChanger('foo', 'reverse') returns 'oof'", function () {
    expect(stringChanger('foo', 'reverse')).to.eq('oof');
  });
  it("stringChanger('foo', 'unknown') returns 'foo'", function () {
    expect(stringChanger('foo', 'unknown')).to.eq('foo');
  });
});
