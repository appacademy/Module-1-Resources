const assert = require("assert");
const recursivePreserveType = require("../problems/06-recursive-preserve-type.js");

describe("recursivePreserveType()", function(){
    it("should return a function", function(){
        const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']); 
        assert.equal(preserveFunc instanceof Function, true);
    });

    it("when invoked, the returned function should return the correct elements of the array", function(){
        const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']); 
        const result1 = preserveFunc('number');
        const result2 = preserveFunc('string');

        assert.strictEqual(result1.includes(1), true);
        assert.strictEqual(result1.includes(2), true);
        assert.strictEqual(result1.includes(3), true);
        assert.strictEqual(result1.length, 3);

        assert.strictEqual(result2.includes('one'), true);
        assert.strictEqual(result2.includes('two'), true);
        assert.strictEqual(result2.includes('three'), true);
        assert.strictEqual(result2.length, 3);

        const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
        const result3 = preserveFunc2('number');
        const result4 = preserveFunc2('object');
        const result5 = preserveFunc2('boolean');

        assert.strictEqual(result3.includes(2), true);
        assert.strictEqual(result3.includes(3), true);
        assert.strictEqual(result3.length, 2);
        
        assert.deepEqual(result4, [{ color: 'red' }, [4, 5]]);
        
        assert.strictEqual(result5.includes(true), true);
        assert.strictEqual(result5.includes(false), true);
        assert.strictEqual(result5.length, 2);
    });
});