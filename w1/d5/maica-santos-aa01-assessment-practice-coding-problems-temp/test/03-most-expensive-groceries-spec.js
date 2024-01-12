const chai = require("chai");
const expect = chai.expect;
const fns = require("../problems/03-most-expensive-groceries");

describe("costOfGroceries", function() {
  const costOfGroceries = fns.costOfGroceries;

  it("costOfGroceries(['cheese', 'butter', 'eggs']) returns 8", function () {
    expect(costOfGroceries(['cheese', 'butter', 'eggs'])).to.eq(8);
  });
  it("costOfGroceries(['eggs', 'milk', 'bread', 'bread']) returns 13", function () {
    expect(costOfGroceries(['eggs', 'milk', 'bread', 'bread'])).to.eq(13);
  });
  it("costOfGroceries(['cheese', 'bread']) returns 9", function () {
    expect(costOfGroceries(['cheese', 'bread'])).to.eq(9);
  });
  it("costOfGroceries(['eggs', 'butter']) returns 3", function () {
    expect(costOfGroceries(['eggs', 'butter'])).to.eq(3);
  });
});

describe("mostExpensiveGroceries - uses the costOfGroceries function", function() {
  it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']]) returns 1", function () {
    expect(
      fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']])
    ).to.eq(1);
    const mostExpensiveGroceries = formatFile((arr) => {
      return arr[1] === 'bread' ? 10 : 0;
    });
    expect(
      mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'milk', 'bread', 'bread'], ['cheese', 'bread'], ['eggs', 'butter']]),
      "mostExpensiveGroceries must use the costOfGroceries function"
    ).to.eq(2);
  });
  it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']]) returns 0", function () {
    expect(
      fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']])
    ).to.eq(0);
    const mostExpensiveGroceries = formatFile((arr) => {
      return arr[0] === 'eggs' ? 10 : 0;
    });
    expect(
      mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter']]),
      "mostExpensiveGroceries must use the costOfGroceries function"
    ).to.eq(1);
  });
  it("mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']]) returns 2", function () {
    expect(
      fns.mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']])
    ).to.eq(2);
    const mostExpensiveGroceries = formatFile((arr) => {
      return arr[0] === 'eggs' ? 10 : 0;
    });
    expect(
      mostExpensiveGroceries([['cheese', 'butter', 'eggs'], ['eggs', 'butter'], ['cheese', 'bread']]),
      "mostExpensiveGroceries must use the costOfGroceries function"
    ).to.eq(1);
  });
});

function formatFile (cb) {
  const fs = require('fs');
  const path = require('path');
  const args = [
    /(function\s+costOfGroceries\()|((?<=\n\s*)(const|let|var)?\s*costOfGroceries\s*=\s*function\s*\()|((?<=\n\s*)(const|let|var)?\s*costOfGroceries\s*=\s*\((?=.*=>))/g,
    "exports.costOfGroceries = function (",
    /=>/g,
    "",
    /(?<!function\s*)costOfGroceries\s*\(/g,
    "exports.costOfGroceries(",
    "module.exports = {\n  costOfGroceries,\n",
    "module.exports = {\n",
  ]

  if (!args.length) return require("../problems/03-most-expensive-groceries");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/03-most-expensive-groceries.js"),
    "utf-8"
  );
  let i = 0;
  while (i < args.length) {
    let [regex, replaceStr] = [args[i], args[i + 1]];
    file = file.replace(
      regex,
      replaceStr
    );
    i += 2;
  }
  file += "exports.costOfGroceries = " + cb.toString();
  const Module = module.constructor;
  const m = new Module();
  m._compile(file, "");
  const obj = m.exports;
  return obj.mostExpensiveGroceries;
};
