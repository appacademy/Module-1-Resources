/*



  Rest and Spread Operator

  What is the rest parameter?
   * The rest parameter syntax allows a function to accept a varying number of arguments and stores them as an array
     *  Variadic function
   * The rest parameter will gather all the additional arguments into an array

  Rest Operator
   * Rest operator collects multiple elements and condenses them into a single data type
   * Can be used outside function parameter

*/

// Using Rest
// * create a function that takes in varying arguments


function sentenceMaker(word1, ...words){
  // store the first argument in word 1. store the rest of the arguments that do not have a parameter in a variable called words
  console.log(word1, words);// lets [ 'make', 'a', 'sentence' ]

  return word1 + ' ' + words.join(' ') + '!'
}


// console.log(sentenceMaker('lets', 'make', 'a', 'sentence'))
// console.log(sentenceMaker('hello', 'world'));
// console.log(sentenceMaker('one'))



function product(num1, ...numbers) {
  console.log(num1, numbers);// 1 [ 2, 3, 4 ]

  let total = num1;
  for(let num of numbers) {
    total *= num;
  };

  return total;
}

// console.log(product(1,2,3,4))





/*

  Spread Operator

  What is spread operator?
    * The spread operator allows you to break down a data type into the elements that make it up
  Two basic behaviors
    * Take a data type and spread the values of that type where elements are expected into another data type
    * Take an iterate data type (string/array) and spread the elements of that type where arguments are expected

  * Create a shallow copy
*/


// Spread with arrays
// * spread values of an array into another array
let arr1 = [1,2,3];
let arr2 = [3,4,5];
let arr3 = [arr1, arr2];
// console.log(arr3);// [ [ 1, 2, 3 ], [ 3, 4, 5 ] ]

// use spread!
// * spread the values of arr1 and arr2 into array literal - []
let arr4 = [...arr1, ...arr2];
console.log(arr4);// [ 1, 2, 3, 3, 4, 5 ]

// You can add elements when spreading
let arr5 = [0, ...arr1, true, ...arr2, 6]
console.log(arr5);
// [
//   0,    1, 2, 3,
//   true, 3, 4, 5,
//   6
// ]

// we can make a shallow copy
// * make copies so we don't mutate the original array
let copy1 = arr1.slice();
let copy2 = [...arr1];
console.log(copy1, copy2);// [ 1, 2, 3 ] [ 1, 2, 3 ]


// Spread with objects
let obj1 = { name: 'brandon'}
let obj2 = {pet: 'cat', favColor:'red'}
let obj3 = {obj1, obj2};
console.log(obj3);
// We dont want nested objects
// { obj1: { name: 'brandon' }, obj2: { pet: 'cat', favColor: 'red' } }


// use spread!
let obj4 = {...obj1, ...obj2, city: 'Brooksville'};
// * Spread into object literal all the key:value pairs of obj1 and obj2 while also adding the key:val pair of city: 'Brooksville'
console.log(obj4);//{ name: 'brandon', pet: 'cat', favColor: 'red', city: 'Brooksville' }
