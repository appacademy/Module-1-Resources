
/*

  Rest and Spread Operator

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/

// Using rest
// * create a function that takes in varying amounts of words and creates a sentence out of them
// * Rest is gather the REST of the arguments and placing them an a array

function sentenceMaker(word1, ...words) {
  console.log(word1, words); //lets ["make", "a", "sentence"]
  let sentence = word1;

  // concatenate on to the sentence string the current word as we iterate
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    sentence += " " + word;
  }

  return sentence;
  // return words.join(' ') + '!';
}

// * Our functions can now be more dynamic in accepting varying different arguments
console.log(sentenceMaker("lets", "make", "a", "sentence")); //
console.log(sentenceMaker("hello", "world")); //
console.log("varying", "amount", "arguments"); //

// Example 2
function product(...numbers) {
  // console.log(numbers);// [1,2,3,4]
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total *= number;
  }
  return total;
}

console.log(product(1, 2, 3, 4)); // 24
console.log(product(1, 2, 3)); // 6
console.log(product(2)); // 2

/*

  Spread Operator

  What is the Spread Operator?
    * The spread operator allows you to break down a data type into the elements that make it up.
  Two Basic Behaviors
    * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
    * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.

    * Create a shallow copy

*/

// Spread with Arrays
// * spread values of array into another array
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [0, arr1, arr2];
console.log(arr3); // [ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ];
// * not what we want, we want the values not as nested arrays

// * Use spread instead
let arr4 = [0, ...arr1, arr2];
// * spread into an array literal the number 0, the elements of arr1 and the elements of arr2 and store in the variable arr4
console.log(arr4); //  [ 0, 1, 2, 3 , 4, 5, 6  ];

// * Spread can be used to create a shallow copy
// *  old way to make copy
let copy1 = arr1.slice();
// *  new way to make copy using spread
let copy2 = [...arr1];

// Spread with Objects
// * spread key:value pairs of object into another object
// ! avoid spread between different data types
let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
console.log(obj3); // end up with nested object

// * use spread instead
let obj4 = { ...obj1, ...obj2, city: "tampa" };
// *  spread into an object literal all the key:value pairs of obj1 and obj2, while also adding the key:value pair of city:'tampa' and store it in the variable obj4
console.log(obj4);

/*

  Destructuring
  * Allows us to move and and access values within an array or object
  * We can use destructuring behavior to extract elements of an array or object

*/

// ! Destructuring with Arrays
let array = [1, true, "hello world"];

// Unpacking array values into variables
// * we can use destructuring to unpack values into variables
let [num, bool, str] = array;
// * extract from the array to the right of the equal sign
// * the values from the array into variables positionally

console.log(num); // 1
console.log(bool); // true
console.log(str); // hello world

// * can skip elements
// * using comma operator
// let [num, ,str] = array;
console.log(num, str); // 1 hello world

// ! skip
// Swapping variables using destructuring
// * we can use destructuring to swap the values a variable holds
let firstName = "brandon";
let lastName = "laursen";

// positionally provide the variable you'd like to swap the contents of
[firstName, lastName] = [lastName, firstName];

console.log(firstName); // laursen
console.log(lastName); // brandon

// ! skip
// can swap index in array
let arr5 = [10, 20, 30];
console.log(arr5); //[ 10, 20, 30 ]

// positionally provide the index you'd like to swap the contents of
[arr5[1], arr5[2]] = [arr5[2], arr5[1]];
console.log(arr5); //[ 10, 30, 20 ]

// Destructuring with rest
// * we can use rest outside of function parameters
// * the premise is the same, gather the REST of the elements and store them in a data type.
// * we can use destructuring to in combination with rest to create some interesting behaviors

let numbers = [1, 2, 3];
[num1, ...restOfNums] = numbers;

console.log(num1, restOfNums); // 1 [2,3];
// * destruct the first arg into num1, and take the rest and store in a variable called restOfNums

// Using both rest and spread with destructuring

[firstNum, ...rest] = [...numbers, 4];
// so were saying to the right, SPREAD all the elements of the numbers array into this new array literal, but also a the number 4
// on the left, store the first element of the array literal to the right of the = sigh in firstNum, store the REST of the elements in an array called rest

console.log(firstNum, rest); // 1 [2,3,4];

// ! Destructuring with Objects

let user = {
  name: "John",
  address: {
    street: "123 Street Rd",
    city: "Orlando",
  },
  age: 30,
};

// *  lets destructure some values out of the user object
let { name, ...restOfObj } = user;

// this will destructure the name of the user giving us the value as well as store the rest of the key:value pairs in a object named restOfObj
// * note that we maintain the data type
console.log(name); // John
console.log(restOfObj); // { address: { street: '123 Street Rd', city: 'Orlando' }, age: 30 }

// * we can take it a step further
// * we just need the key name: the we can get the value store at that key
// let {
//   name,
//   address: { street, city },
// } = user;

// console.log(street, city); // 123 Street Rd Orlando

// console.log(address);// Error
// * cant do this because we destructuring out of address

// destructuring in a loop
for (let [key, value] of Object.entries(user)) {
  console.log(key, value); //
}

// destructuring taking in function argument
function destructure({ name }) {
  console.log(name); // brandon
}

destructure({ name: "brandon" });
