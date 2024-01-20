/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
Examples:
console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
*/

let unique = function(array) {
    //!!START
    let uniques = [];
    array.forEach(function(el) {
        if (!uniques.includes(el)) {
            uniques.push(el);
        }
    });
    return uniques;
    //!!END
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
