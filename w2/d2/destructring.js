/*


  Destructuring
  * Allow us to move and access values within an array or object
  * We can use destructuring behavior to extract elements from an array or object

*/


// Destructuring with arrays
let array = [1, true, 'hello world'];

// Unpack the array values into variables
// * let keyword
// *  the literal we are unpacking from - in this case - []
// *  to the right of the equal sign, the data type we are destructuring from
let [num, bool, str] = array;
console.log(num, str);// 1 true hello world


// can skip elements
// * use a comma to skip elements that you don't want destructured
let [num1, , str1] = array;
console.log(num1, str1);// 1 hello world


// Swapping variables
// * we can use destructuring to swap the values a variable holds
let firstName = 'brandon';
let lastName = 'laursen';

// positionally provide the variable youd like to swap the contents of
[firstName, lastName] = [lastName, firstName];

console.log(firstName);// laursen
console.log(lastName);// brandon

// swap index an array
let arr = [1,2,3];
console.log(arr);// [ 1, 2, 3 ]

[arr[1], arr[2]] = [arr[2], arr[1]];
console.log(arr);// [ 1, 3, 2 ]
// * we swapped the position of 3 and 2



/*


  Destructuring with rest
   * we can use rest outside of function parameters
   * the premise is the same, gather the REST of the elements and store then in a data type
   * we can use destructuring in combination with rest to create some interesting behavior

*/

// Rest operator
let numbers = [1,2,3];
[num1, ...restOfNums] = numbers;
// we are destructuring out of the numbers array
// the number 1 into the variable num1
// and storing the REST of the numbers in a variable called restOfNums

console.log(num1, restOfNums);// 1 [ 2, 3 ]


// Rest parameter
// function that takes in varying arguments

// Notice the similarities!
function sentenceMaker(word1, ...words){
  // store the first argument in word 1. store the rest of the arguments that do not have a parameter in a variable called words
  console.log(word1, words);// lets [ 'make', 'a', 'sentence' ]

  return word1 + ' ' + words.join(' ') + '!'
}
console.log(sentenceMaker('lets', 'make', 'a', 'sentence'));


/*
  Key differences between Rest operator and rest parameter
  Rest operator
    * The rest operator is used when you are destructuring out elements into variables, and you need to store the REST of the elements in array/object that have not been assigned a value
  Rest Parameter
    * The rest parameter is used in the context of a function; and we use it to represent arguments passed that do not have a parameter to be assigned too

  * In the end they gather the rest of the elements
*/



// using both rest and spread w destructuring

[firstNum, ...rest] = [...numbers, 4];
// were saying to the right of the equal sign
// * spread all the elements of the numbers array into this array literal and also add the number 4
// to the left of the equal sign
// * destructuring out the first element into the variable firstNum and store the rest of the element in the variable called rest
// console.log(firstNum, rest);//1 [ 2, 3, 4 ]


// Destructuring with object

let user = {
  name: "John",
  address: {
    street: "123 Street Rd",
    city: "Orlando",
  },
  age: 30,
};

// * lets destructure some values from the user object
// * we just need to provide the key name
// * the variable will hold the value
// let { name, ...restOfObj} = user;

// console.log(name, restOfObj);
// John
//{ address: { street: '123 Street Rd', city: 'Orlando' }, age: 30 }

// user object is unchanged
// * destructuring does not mutate original object
console.log(user);

// we can destruct nested objects as well

// let { address } = user;

// console.log(address);// { street: '123 Street Rd', city: 'Orlando' }

let { address: { city } } = user;

// * Wont have access to key name you used to destructuring out a nested object
// console.log(address);// { street: '123 Street Rd', city: 'Orlando' }
// console.log(city);// Orlando


// good to know!
// destructuring in a loop
/*
[
  [ 'name', 'John' ],
  [ 'address', { street: '123 Street Rd', city: 'Orlando' } ],
  [ 'age', 30 ]
]
*/
console.log(Object.entries(user))
for (let [key, value] of Object.entries(user)) {
  // console.log(subArr);
  console.log('===>',key, value); //
}

// destructuring taking in function argument
function destructure({ name }) {
  console.log(name); // brandon
}

destructure({ name: "brandon" });
