
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

// *  we can take it a step further
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




// * 1. destructure array
let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];
let [first, second, third, fourth, fifth, sixth] = bigArray;
console.log(second); // prints: 14
console.log(fifth); // prints: { name: "party" }
console.log(sixth); // prints: ["pineapple"]
