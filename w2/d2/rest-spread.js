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
      * take a data type (object) and spread the values of that type where elements are expected
      * Take an iterable data type (array/string) and spread the elements of that type where arguments are expected

      * Creates a shallow copy - only a copy one deep

*/

// spread with arrays
// * spread values of an array into another array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
// console.log(arr3); // [ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// * not what were looking for

// use spread instead
// add elements they are positional
// can add elements wherever youd like
let arr4 = [0, ...arr1, 10, ...arr2, 4000, ...arr1];
// console.log(arr4); //
// [
//   0, 1, 2,    3, 10,
//   4, 5, 6, 4000,  1,
//   2, 3
// ]

// spread can be used to make a copy
// let copy1 = arr4.slice();
// let copy2 = [...arr4];

// spread with objects
// * spread key:value pair of object to another object
// ! avoid spread between different data types
let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
// console.log(obj3);
// {
//   obj1: { name: 'brandon' },
//   obj2: { pet: 'cat', favColor: 'red' },
//   city: 'brooksville'
// }
// Not what were looking for

// use spread
let obj4 = { ...obj1, ...obj2, city: "brooksville" };
// console.log(obj4);
// { name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }

//! did not work through throws error
// let arr = [...obj4];
// console.log(arr);

let obj = { ...arr1 };
// console.log(obj);// { '0': 1, '1': 2, '2': 3 }

obj1 = { ...obj1, city: "brooksville" };

// console.log(obj1);// { name: 'brandon', city: 'brooksville' }

// Destructuring
// * Allow us move and access values within an array or object
// * we can use destructing to extract elements of an array object
// * matching a patten!

// Destructing with arrays
let array = [1, true, "hello world"];

// Unpack the values into variables
// * we can name the variable whatever we want
// * just knows its positional
let [num, bool, string] = array;
// console.log(num, bool, string); // 1 true hello world
// * extract from the array to the right of the equal sign
// * the values from the array into variables positionally

// can skip elements if you want
// * use comma operator
// let [num, ,string] = array;
// console.log(num, string);// 1 hello world

// Swapping variable using destructuring
// * we can use destructing to swap what a valuable holds
let firstName = "laursen";
let lastName = "brandon";

// positionally provide the variable you'd like the swap the contents with
[firstName, lastName] = [lastName, firstName];

// console.log(firstName, lastName);// brandon laursen

// A literal - the literal characters use to represent the data type
// literal array
let arrLiteral = [];
//object literal
let objLiteral = {};
//template literal
let stringLiteral = `${"hey"}`;

// swap index in array
let arr5 = [10, 20, 30]; // [ 10, 20, 30 ]
// console.log(arr5);

// positionally provide the variable you'd like the swap the contents with
[arr5[1], arr5[2]] = [arr5[2], arr5[1]];
// console.log(arr5);// [ 10, 30, 20 ]

// Destructing with rest
// * we can use rest outside of function parameters
// * the premise is the same; gather the rest of the elements and store them in a data type preserving the data type
// * we can use destructing to interesting behaviors

let numbers = [1, 2, 3];

[num1, ...restOfNums] = numbers;
// * destructring out and store the first num in the num1 variable
// and store the REST of the numbers in an array called restOfNums

// console.log(num1, restOfNums);// 1 [ 2, 3 ]

// use both rest and spread with destructing
// [1, [2, 3, 4]] = [1, 2, 3, 4]
[firstNum, ...rest] = [...numbers, 4];
// to the right of the equal sign, SPREAD the values of the numbers array into a new array literal, while also adding the number 4
// to the left of the equal sign, store positionally the first element that is too the right of the equal sign in a variable called firstNum, and store the REST of the elements in a variable called rest
// console.log(firstNum, rest);//1 [ 2, 3, 4 ]
// console.log(numbers)
// ! rest and spread do not mutate the og array

// let user = {
//   name: "John",
//   address: {
//     street: "123 Street Rd",
//     city: "Orlando",
//   },
//   age: 30,
// };

// destructing with objects
// * lets destructure values out of the user object
// * with objects we have to provide the key that we want to grab the value from
// let {name, age, ...restOfObj} = user;
// so weve extracted the value into the name of the key using the key as the variable

// console.log(name, age, restOfObj);
// John 30 { address: { street: '123 Street Rd', city: 'Orlando' }, age: 30 }

// we can take this further

// let { name, age, address: {street, city} } = user;
// console.log(name, age, street, city);//
// 123 Street Rd Orlando

// console.log(address)// cannot due because its being used to destructure street and city

// let { street, city } = user.address;
// console.log(street, city);// 123 Street Rd Orlando


let user = {
  name: "John",
  address: {
    street: "123 Street Rd",
    city: "Orlando",
  },
  age: 30,
};

// destructing in a loop
console.log(Object.entries(user))
for(let [key, value] of Object.entries(user)) {
  console.log(key, value);
}


//destructing taking in function argument

function destructure({name}) {
// console.log('===>',obj);// { name: 'brandon' }
console.log(name);// brandon
}


// console.log(destructure({name:'brandon'}))
