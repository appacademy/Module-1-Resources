/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


*/

let hasThreeVowels = function(string) {
    // Your code here
    let vowels = ["a", "e", "i", "o", "u"]

    //forEach Solve
    // let count = 0;

    // vowels.forEach((vowel) => {
    //     if (string.includes(vowel)) count++
    // })

    // // console.log(count)
    // return count >= 3

    //Filter Solve
    // let res = vowels.filter(vowel => (string.includes(vowel)))

    // return res.length >= 3

    //Map solve
    // let res = vowels.map(vowel => string.includes(vowel))
    // // console.log(res)
    // let boolCount = 0;

    // res.forEach(bool => {if (bool === true) boolCount++})
    // return boolCount >= 3

    let res = vowels.reduce((acc, curr) => {
        if(string.includes(curr)) acc++
        return acc;
    }, 0)

    return res >= 3

};

// Your code here

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
