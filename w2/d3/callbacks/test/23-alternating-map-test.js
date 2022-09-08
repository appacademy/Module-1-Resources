const assert = require("assert");
const alternatingMap = require("../problems/23-alternating-map.js");

describe("alternatingMap", function() {
  it("should return a new array containing the results of passing the values into the callbacks in an alternating fashion", function() {
    const triple = function(n) {
      return 3 * n;
    };

    const half = function(n) {
      return n / 2;
    };

    const actual1 = alternatingMap([7, 3, 2, 9, 8], triple, half);
    const expected1 = [21, 1.5, 6, 4.5, 24];
    assert.deepEqual(actual1, expected1);

    const yell = function(s) {
      return s.toUpperCase() + "!";
    };

    const whisper = function(s) {
      return ".." + s.toLowerCase() + "..";
    };

    const actual2 = alternatingMap(
      ["hEy", "EVERYone", "whats", "uP??"],
      yell,
      whisper
    );
    const expected2 = ["HEY!", "..everyone..", "WHATS!", "..up??.."];
    assert.deepEqual(actual2, expected2);
  });
});
