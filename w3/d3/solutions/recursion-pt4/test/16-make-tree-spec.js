const assert = require("assert");

const makeTree = require('../problems/16-bonus-make-tree');

describe("makeTree()", function () {
  it("with a simple example it should build a tree with the specified categories", function () {
    const categories = [
      { id: "animals", parent: null },
      { id: "mammals", parent: "animals" },
    ];

    const tree = {
      animals: {
        mammals: {},
      },
    };

    assert.deepEqual(makeTree(categories, null), tree);
  });

  it("with a complicated example it should build a tree with the specified categories", function () {
    const categories = [
      { id: "animals", parent: null },
      { id: "mammals", parent: "animals" },
      { id: "cats", parent: "mammals" },
      { id: "dogs", parent: "mammals" },
      { id: "chihuahua", parent: "dogs" },
      { id: "labrador", parent: "dogs" },
      { id: "persian", parent: "cats" },
      { id: "siamese", parent: "cats" },
    ];

    const tree = {
      animals: {
        mammals: {
          dogs: {
            chihuahua: {},
            labrador: {},
          },
          cats: {
            persian: {},
            siamese: {},
          },
        },
      },
    };

    assert.deepEqual(makeTree(categories, null), tree);
  });
});
