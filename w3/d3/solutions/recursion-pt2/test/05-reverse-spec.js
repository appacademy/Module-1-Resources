const assert = require("assert");

const reverse = require('../problems/05-reverse');

describe("reverse()", function () {
  it("should return the string reversed", function () {
    assert.strictEqual(reverse("house"), "esuoh");
    assert.strictEqual(reverse("dog"), "god");
    assert.strictEqual(reverse("atom"), "mota");
    assert.strictEqual(reverse("q"), "q");
    assert.strictEqual(reverse("id"), "di");
    assert.strictEqual(reverse(""), "");
  });
});