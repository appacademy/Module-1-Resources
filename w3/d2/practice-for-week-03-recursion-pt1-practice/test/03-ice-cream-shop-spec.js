const assert = require("assert");

const iceCreamShop = require('../problems/03-ice-cream-shop');

describe("iceCreamShop()", function () {
  it("should return true if the favorite ice cream is included in the flavors", function () {
    assert.strictEqual(iceCreamShop(['vanilla', 'strawberry'], 'blue moon'), false);
    assert.strictEqual(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'), true);
    assert.strictEqual(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'), false);
    assert.strictEqual(iceCreamShop(['moose tracks'], 'moose tracks'), true);
    assert.strictEqual(iceCreamShop([], 'honey lavender'), false);
  });
});