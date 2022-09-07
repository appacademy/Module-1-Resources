const assert = require("assert");

const countScores = require("../problems/14-count-scores.js");

describe("countScores()", function() {
  it("should return an object of each person's total score", function() {
    const ppl = [
      { name: "Anthony", score: 10 },
      { name: "Fred", score: 10 },
      { name: "Anthony", score: -8 },
      { name: "Winnie", score: 12 }
    ];
    const result1 = { Anthony: 2, Fred: 10, Winnie: 12 };

    const peeps = [
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 }
    ];
    const result2 = { Anthony: 4, Fred: 4, Winnie: 6 };

    assert.deepEqual(countScores(ppl), result1);
    assert.deepEqual(countScores(peeps), result2);
  });
});
