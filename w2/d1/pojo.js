/*

  What is an POJO - plain old javascript objects?
  - A data type that can hold collections of values that can be accessed with a key
  - has key:value pairs  ie: { key: value }
  - Unordered list of values
  - dictionary(python) === object(javascript)
  - Keys can be strings
  - values can be any data type
  - can store many data types in a object's value
    - other objects
    - arrays
    - numbers
    - strings
    - and more!

*/

// Arrays!
// we learnt that arrays can be accessed by keying into indexes
// each index corresponded to a value
// indexes - 0 1 2 3
// value   - c a t s
let arr = ["c", "a", "t", "s"];
// console.log(arr[0]); // c
// console.log(arr[1]); // a
// console.log(arr[2]); // t

// so with the array, whenever we try to access a value, we provide a key
// so wed index into the array at key 0, to get the value c
// objects work under the same premises, expect that objects key can be a string and is not limited to just a number
// indexes are our keys to get the values

// Objects
// object literal - {};
// { key1:value1, key2:value2, key3:value3 };
// in order to gain access to a value; we must provide the key
// key - is usually a string, if a string is not used, it will typecast the type into a string
// value - can be any data type

// object with 4 key value pairs
// number as the key, and letter as the value
let cat = { 1: "a", 2: "t", 3: "s", 0: "ZERO" };

// if we want to see what the value is, we must provide a key
// we are saying in the cat obj; I want to see the value at the key of 0
// console.log(cat[0]); // "ZERO"
// console.log(cat['0']);// "ZERO" <- SAME THING
// console.log(cat[1]); // a
// console.log(cat[2]); // t

// key gets typecase into string
// console.log(cat);
// { '0': 'c', '1': 'a', '2': 't', '3': 's' }

// lets make a more practical object
// we will make a brandon object
// keys are strings
// values can be any data type

let brandon = {
  name: "brandon",
  age: 27,
  softwareEngineer: true,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "tampa",
    state: "Florida",
  },
  sayHello: function (param) {
    return "Hello " + param;
  },
};

// the sayHello key holds a value that is a function
// that is what a method is, a function that belongs to an object

// console.log('===>',brandon['sayHello']());
// console.log(brandon);
// {
//   name: 'brandon',
//   age: 27,
//   softwareEngineer: true,
//   favoriteBands: [ 'Joyce Manor', 'Neck Deep', 'Idles' ],
//   location: { city: 'tampa', state: 'Florida' },
//   sayHello: [Function: sayHello]
// }

// console.log(brandon.sayHello);// [Function: sayHello]
// console.log(brandon.sayHello());// Helloundefined

// console.log(console) // will show console object

// Accessing values from an object
// If you want to access an objects value, you must provide the key
// key unlocks the value

// Two ways to access are key:value pairs
// Dot vs Bracket Notation

// Bracket notation
// we are evaluating the code inside the square brackets and using that as the key to get the value
// console.log(brandon['name']); //brandon
// // so we use the name key to access the brandon value in the object
// console.log(brandon['age']); //27
// console.log(brandon['softwareEngineer']); //true
// console.log(brandon['location']);// { city: 'tampa', state: 'Florida' }
// console.log(brandon['location']['city']); //tampa

// When using bracket notation, were are able to use variables as our keys. This allows us to be dynamic

// console.log(brandon['name']); //brandon
// console.log(brandon[name]); //ReferenceError: name is not defined
// // name variable does not exists

// let example = 'name';

// console.log(brandon[example]); //brandon
// // We are keying into the brandon object using square brackets
// the expression inside the brackets must evaluate before we try to use to key into the object
// the example variable holds the string 'name'
// so when we try access brandon[example]
// were really accessing brandon['name'];

// console.log(brandon['na' + 'me']); //brandon
// console.log(brandon['name']); //brandon

// we can access location using variable holding the key

console.log(brandon);

// grabbing name using []
console.log(brandon['name']); //brandon

// console.log(brandon[name]);// ReferenceError: name is not defined

// js tries to look for name variable but doesnt find it, throws error

// what you can do is store the value in a variable
let test = 'name';
// console.log(brandon[test]); //brandon


// console.log(brandon['sayHello']('rod')); //Hello rod


