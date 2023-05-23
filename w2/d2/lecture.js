/*


  Reference vs primitive Types

  ? What are primitive data types?
  ! immutable! cannot be changed!
  1. boolean
  2. string
  3. number
  4. null
  5. undefined
  6. and many more!

  ? What are the reference data types?
  ! mutable! can be changed
  1. Objects!
  2. Everything thats not a primitive data type
    a. functions
    b. arrays
    c. objects

    Great read for under the hood!
https://blog.alexdevero.com/memory-life-cycle-heap-stack-javascript/#:~:text=As%20you%20know%2C%20stack%20is,function%20to%20the%20call%20stack.


*/


//primitive data type
let age = 27;
let newAge = age;
age += 1;
console.log(age, newAge); //28 and 27
// primitive data types have assigned spots in memory
// when we assign a variable, we are pointing that variable at the data type in memory
// we are pointing the age variable at 27 in memory
// we are then pointing newAge at what age was pointing at age => 27, newAge => 27
// when we reassign age, we are saying point the age variable at the new value, 28,
// so now age points at 28 in memory age => 28
// BUT newAge is still pointing at 27, we never moved that pointer


// reference data type
// js create reference values by assigning portions of memory
// we need to allocated memory for reference types, - dynamic memory allocation
// only one reference type per object

//lets create a reference in memory
// variable cat, that points at an object in memory
let cat = {
  name: 'pumpkin',
  age: 2
}
// cat => <reference1>
// we are pointing a variable at a reference in memory

let cat2 = cat;
// we are saying point the cat2 variable at whatever cat is pointing at
// cat => <reference1>
// cat2 => <reference1>

// cat.name = 'celebi';
cat2.age = 38
// console.log(cat, cat2);
// both cat and cat2 have been changed,. why?
//{ name: 'celebi', age: 2 } { name: 'celebi', age: 2 }

//when you change one, you change both, because the variables tho they are difference, they are pointing at the same reference in memory

// thats why problem may ask you to make a copy, to maintain the original array/object

// if you want to change one and not the other, create a copy
let cat3 = {...cat};//create a copy
cat.name = 'mochi';
console.log(cat3, cat);
