/*

  Function expression syntax!
    * another a way to write a function
    * we learn about function declaration yesterday
    * storing an anonymous function in a variable therefore giving it a name to alias it by

*/

// anon function
// function with no name
// function () {};

// function declaration
function name() {}

console.log(name); // [Function: name]

let bool = true;
let num = 12;
let string = "cool";
let anything = null;

let myFunc = function () {
  return "thats pretty cool";
};
// this logging what myFunc variable holds
console.log(myFunc); // [Function: myFunc]

// this is logging what myFunc invoked returns
console.log(myFunc()); // thats pretty cool

// calling the func and not logging it
myFunc();

let sum = (numbers) => {
  let res = 0;
  for (let num of numbers) {
    res += num;
  }

  return res;
};

let sum1 = numbers => numbers.reduce((res, num) => res + num);

console.log(sum1);
console.log(sum([1, 2, 3])); // 6

// function myFunc(callbackFunction){

// };

// console.log(myFunc(function name() {
//   return 'hey'
// }));

console.log(myFunc(() =>'hey'));
// for of - ONLY ON ARRAYS
// for in - ONLY ON OBJECTS
console.log('========')


// console.log(sayHello());// ReferenceError: Cannot access 'sayHello' before initialization
// let sayHello = function (){
//   return 'hello';
// }

// console.log(name1);// ReferenceError: Cannot access 'name1' before initialization
// let name1 = 'brandon';

console.log(sayHello2());// THIS DOES WORK WILL NOT THROW ERROR
function sayHello2(){
  return 'hello';
}
// let sayHello = function (){
//   return 'hello';
// }

// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// * 1. It can be stored in a variable
// * 2. it can be passed as an argument to a function (coming up next week!)
// * 3. It can be returned from a function (also coming up next week!)


let numbers = [1,2,3];
//need index or need to modify i use for let i = 0
for(let i = 0; i < numbers.length; i++){
  let number = numbers[i];
};

// only need value use for of
for(let number of numbers) console.log(number)


// for each quicker version of standard for loop and you need i
numbers.forEach((number, i, array) => console.log(number))
