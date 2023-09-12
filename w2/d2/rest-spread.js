/*



  Rest and Spread

  What is the rest parameter?
    * The rest parameter ... - allows our functions to accept varying amounts of arguments
      * Variadic function
    * The rest parameters will gather any additional arguments and place them in a array

  Rest Operator
    * Rest operator collect multiple elements and condense them into a single data type - array/object
    * REST is going to gather the rest the arguments and place in an array
*/

// Using rest
// create a function that takes in varying amounts of words and make a sentence out of them
// REST is going to gather the rest the arguments and place in an array
function sentenceMaker(word1, ...words) {
  // console.log(word1, words);
  let newSentence = word1;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newSentence += " " + word;
  }

  return newSentence;
}

// * are functions are dynamic and can handle varying amounts of arguments
// console.log(sentenceMaker('hey'));// hey undefined
// console.log(sentenceMaker("hello", "world"));// hello world
// console.log(sentenceMaker("hello", "world", 'and', 'universe'));// hello world
// * take all arguments and put them into an array
function product(...numbers) {
  // return num1 * num2 * num3// <- this only works on one test case!
  // make this dynamic!
  // console.log(num1, num2, num3)
  // console.log(numbers);
  let res = 1;
  for (let number of numbers) {
    res *= number;
  }
  return res;
}

// console.log(product(1, 2, 3, 4));// 24
// console.log(product(1, 2, 3));// 6
// console.log(product(2));// 2


/*


  Spread Operator

  What is the spread operator is?
    * The spread operator allows us to break down data types into the elements that make it up
    Two basics behaviors
      * take a data type (array/object) and spread the values of that type where elements are expected
      * Take an iterable data type (array/string) and spread the elements of that type where arguments are expected
      * Creates a shallow copy - only a copy one deep

*/


// spread with arrays
// * spread values of an array into another array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, arr1, arr2];
console.log(arr3);// [ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// * not what were looking for


// use spread instead
// add elements they are positional
// can add elements wherever youd like
let arr4 = [0, ...arr1, 10,...arr2, 4000, ...arr1 ];
console.log(arr4);// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

// spread can be used to make a copy
let copy1 = arr4.slice();
let copy2 = [...arr4];
