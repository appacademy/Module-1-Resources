/*

When fixed, this function should behave similarly to JavaScript's
'.map()' function


Hints: 
What is this function doing?
    - the spread operator is concatenating two arrays into one
    - this means that calling action returns a element
        - but calling doForAll should return an array

What are the parts of a recursive function
Does this function have all the parts?
Can you label them?

*/
function doForAll(arr, cb) {
}

console.log(doForAll([], (x) => x * 2)); // []
console.log(doForAll([1, 2, 3], (x) => x + 1)); // [2, 3, 4]
console.log(doForAll(['a', 'b', 'c'], (x) => x.toUpperCase())); // ["A", "B", "C"]
