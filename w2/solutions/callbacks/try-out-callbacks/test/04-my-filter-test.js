const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myFilter = require("../problems/04-my-filter.js");

describe("myFilter", function() {
  it("should mimic the built-in Array.filter", function() {
    let result1 = myFilter([5, 7, 4, 3, 8], function(n) {
      return n % 2 === 0;
    });
    expect(result1).to.eql([ 4, 8 ]);

    let result2 = myFilter(["choose", "big", "words", "only"], function(s) {
      return s.length > 3;
    });
    expect(result2).to.eql(['choose', 'words', 'only']);
  });

  it("should not call the built-in Array.filter", function() {
    const filterSpy = chai.spy.on(Array.prototype, "filter");
    myFilter([5, 7, 4, 3, 8], function(n) {
      return n % 2 === 0;
    });
    expect(filterSpy).to.have.not.been.called();
  });
});
