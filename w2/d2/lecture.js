/*

  Reference vs Primitive Types

  Reference Data Types - Mutable
  - objects
  - arrays

  Primitive Data Types - Immutable
  - boolean
  - null
  - undefined
  - number
  - string

*/

//Primitive example
let age = 27;
//in memory point the age variable at 27 in memory
let newAge = age;
//were saying hey, whatever age is pointing at in memory, also point the newAge variable
//two variables pointing at the number 27 - newAge and age
age += 1;
//that age variable, no longer point at 27, take the value 27, add one and point that variable at that new number -> 28
//age points at 28 in memory
// console.log(age, newAge)
//the age variable was reassigned and pointed at 28 in memory
//newAge is still pointing at 27 in memory


//reference data types
//whenever we point a variable at a reference data type, we are pointing at the reference in memory


//lets create a reference in memory
//variable cat point at an objects reference in memory
let cat = {
  name: 'pumpkin',
  age: 2
};

let cat2 = cat;
//hey point cat2 variable at whatever cat is pointing at, well its pointing at a reference data type, therefore pointing a reference in memory
//point both cat2 and cat at the same reference in memory

cat.name = 'Celebi';
cat2.age = 14
//change one object, we change both
console.log(cat, cat2);
//because both cat and cat2 are pointing at the same reference in memory, if you change one, you change both








//we use spread to create a slice
//we created a shallow copy
//we are pointing at cat3 at a new reference in memory therefore if you change, it will not effect the other
let cat3 = {...cat};
cat3.name = 'jazz';
console.log(cat3, cat2, cat)
