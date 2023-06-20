/*

  Reference vs primitive data types!

  What are primitive data types?
  * immutable
  - boolean
  - string
  - numbers
  - null
  - undefined
  - everything but objects!

  What are the reference data types?
  * mutable
  - Objects
  - arrays
  - functions

*/

//primitive example
let age = 27;
let newAge = age;
age += 1;
console.log(age, newAge);//28 27
// primitive data types have assigned spots in memory
// when we assign variable we are pointing that variable at that data type in memory
// we are pointing the age variable at 27 in memory
// we are then pointing newAge at whatever age was pointing at: newAge => age => 27
// when we reassign age, we are saying point the age variable at the new value 28
// but the newAge variable still points at 27 in memory
// immutable data types cant be changed, all were doing is pointing the variable at different data in memory

// reference data type
// js create reference values by assigning portions of memory
// we need to allocate memory for reference data types
// only one reference type object/array/functions

//lets create a reference in memory
// variable cat, that points at an object in memory
let cat = {
  name: 'pumpkin',
  age: 2
}
// cat => <reference1>
// we are pointing a variable at a reference in memory

let cat2 = cat;
// we are saying point the cat2 variable at whatever the cat variable is poiting at
// cat => <reference1>
// cat2 => cat => <reference1>

cat.name = 'celebi';
cat.age = 15;

console.log(cat, cat2);//{ name: 'celebi', age: 15 } { name: 'celebi', age: 15 }
//it changed both values why?

// when you change one, youre end up changing both, because the variables are pointing at the same reference in memory


// thats why problems may ask you to make a copy, sometimes to maintain the original but also create a copy

//if you want to make a copy and not change the original
let cat3 = {...cat};//this creates a shallow copy that does not change the original
// console.log(cat3, cat);//{ name: 'celebi', age: 15 } { name: 'celebi', age: 15 }
cat3.name = 'mochi';
// console.log(cat3, cat);
//{ name: 'mochi', age: 15 } { name: 'celebi', age: 15 }
// cat => <reference1>
// cat3 => <reference2> but the reference will have the same values

let arr = [1,2,3];
let arr2 = arr;
console.log(arr, arr2);
arr.push(4)
console.log(arr, arr2);//[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ];

//creating a copy allows to create a new reference in memory, allowing us to not change the original
let arrCopy = arr.slice();//create a shallow copy, creates a new reference in memory
// let arrCopy = [...arr]; another way to create a copy
arr.push(5);
console.log(arr, arrCopy);//[ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4 ]
