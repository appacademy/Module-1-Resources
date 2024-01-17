/*

  Rest and Spread Operator

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function - These are functions that accept a variable number of arguments (https://en.wikipedia.org/wiki/Variadic_function)
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/

function sentenceMaker (word1, ...words) {

    // console.log(word)
    // console.log(words) // [ 'make', 'a', 'sentence' ]

    let sentence = word1

    for (let word of words){
        // console.log(word)
        sentence += " " + word;
    }

    return sentence

}

// console.log(sentenceMaker("let's", "make", "a", "sentence"))
// console.log(sentenceMaker("hello", "world"))

function product(...numbers){

    let total = 1;
    for (let num of numbers) {
        // console.log(num)
        total *= num
    }

    return total

}

// console.log(product(1, 2, 3, 4)) // 24
// console.log(product(1, 2, 3)) // 6
// console.log(product(2)) // 2


/*

  Spread Operator

  What is the Spread Operator?
    * The spread operator allows you to break down a data type into the elements that make it up.
  Two Basic Behaviors
    * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
    * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.

    * Create a shallow copy

*/


// spread arrays
// # spread the value of one array into another array

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [0, arr1, arr2] // [ 0, [ 1, 2, 3 ], [ 3, 4, 5 ] ]
// this did not work! we want the values not as nested arrays
// console.log(arr3)


// Use spread instead
let arr4 = [0, ...arr1, arr2] // [ 0, 1, 2, 3, [ 3, 4, 5 ] ]
// console.log(arr4)

// [0, 1, 2, 3, 4, 5]

// Spread can create a shallow copy

// Shallow copying creates a new object with references to the same memory locations as the original object,
 //- means that only the first level of the object is copied. Deeper levels are referenced.

// while deep copying creates a new object with new memory locations for all of its properties and nested objects or arrays.
 // - means that all levels of the object are copied. This is a true copy of the object.

// old way to make a copy
let copy1 = arr1.slice();
//* new way to make a copy
let copy2 = [...arr1]

// console.log(copy1)
// console.log(copy2)


// Spread with Objects
// * spread key:value pairs of the object into another object
// ! avoid spread between different data types
let obj1 = { name: "brandon" }
let obj2 = { pet : "cat", favColor: "red" }
let obj3 = { obj1, obj2, city: "brooksville" }
// console.log(obj3) // gives us a nested obj

// use spread instead
let obj4 = { ...obj1, ...obj2, city: "Tamps" }
console.log(obj4) // { name: 'brandon', pet: 'cat', favColor: 'red', city: 'Tamps' }
