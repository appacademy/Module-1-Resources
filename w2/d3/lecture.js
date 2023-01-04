/*

  Reference vs primitive data types!

  Reference data types:
    1. Array
    2. objects
    3. functions
    * mutable -  can be changed

  Primitive data types:
    1. string
    2. boolean
    3. null
    4. undefined
    5. number
    * Immutable - cannot be changed

*/


//Primitive example
//stored in the stack
let age = 27;
//pointing the new age variable at whatever the age variable was
let newAge = age;
//reassigning age to be 27 + 1
age += 1;
//age points at 28 in memory, newAge points at 27 in
console.log(age, newAge);//28 , 27
//primitive data types have assigned spots in memory
//when we declare a variable that is a primitive type, we are telling the variable to point at that data type in memory
//primitive data types cannot be mutated, the variable can just be reassigned to point a different location in memory


//reference example
//lets create a reference in memory
//a cat variable that points at an object in memory
//stored in the heap
let cat = {
  name: 'pumpkin',
  age: 2
}

//were a pointing the cat2 variable at the same reference in memory
let cat2 = cat;

cat.name = 'celebi';

//point to the same spot in memory
//change one, you change both
//can mutate
console.log(cat, cat2);//{ name: 'celebi', age: 2 } { name: 'celebi', age: 2 }
