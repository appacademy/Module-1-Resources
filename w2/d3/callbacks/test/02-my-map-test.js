const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myMap = require("../problems/02-my-map.js");

describe("myMap", function() {
  it("should mimic the built-in Array.map", function() {
    let result1 = myMap([100, 25, 81, 64], Math.sqrt);
    expect(result1).to.eql([ 10, 5, 9, 8 ]);

    let result2 = myMap(["run", "Forrest"], function(el) {
      return el.toUpperCase() + "!";
    });
    expect(result2).to.eql([ 'RUN!', 'FORREST!' ]);
  });

  it("should not call the built-in Array.map", function() {
    const mapSpy = chai.spy.on(Array.prototype, "map");
    myMap([100, 25, 81, 64], Math.sqrt);
    expect(mapSpy).to.have.not.been.called();
  });
});
