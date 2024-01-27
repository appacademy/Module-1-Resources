const assert = require("assert");
const preserveTypes = require("../problems/05-preserve-types.js");

describe("preserveTypes()", function() {
    it("should return a function", function() {
        const preserveFunc = preserveTypes([1, 'one', 2, 'two', 3, 'three']);
        assert.equal(preserveFunc instanceof Function, true);
    });

    it("the returned function should accept any number of strings", function () {
        const preserveFunc = preserveTypes([1, 'one', 2, 'two', 3, 'three']);
        assert.doesNotThrow(() => preserveFunc('object','number','string','boolean', 'undefined'));
    });

    it("the returned function should return a copy of the input array with only elements of the specified types", function() {
        const preserveFunc = preserveTypes([1, 'one', 2, 'two', 3, 'three']);
        assert.deepEqual(preserveFunc('number'), [1, 2, 3]);
        assert.deepEqual(preserveFunc('string'), ['one', 'two', 'three']);

        const preserveFunc2 = preserveTypes([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
        assert.deepEqual(preserveFunc2('number'), [2, 3]);
        assert.deepEqual(preserveFunc2('object'), [{ color: 'red' }, [4, 5]]);
        assert.deepEqual(preserveFunc2('boolean', 'string', 'undefined'), [undefined, 'world', true, 'hello', false]);

    });

    it("should not mutate the original array", function() {
        const array = [1, 'one', 2, 'two', 3, 'three'];
        const preserveFunc = preserveTypes(array);
        preserveFunc('number');
        preserveFunc('string');
        
        assert.deepEqual(array, [1, 'one', 2, 'two', 3, 'three']);
    });

});