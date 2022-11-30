/*



  Reference vs Primitive types!

  Reference types!
    - Object (include arrays! functions!)
    - Mutable!

  Primitive data type!
    - Immutable
    - Boolean
    - Null
    - Undefined
    - Number
    - String

*/


//Primitive example
//Primitive data types have assigned spots in memory
//Telling variable to point at the data type in memory
//when we reassign we change where we are pointing
//age and newAge are just pointing at the same value in memory
//when we reassigned we point newAge at 27, and the old age is point 28
let age = 27;
let newAge = age;
age += 1;
// console.log('age:', age, 'new age:', newAge);

//Reference values!
//javascript create reference values by assigning portions of memory
//only one reference type - object

//lets create a reference in memory
//variable cat that points at an object in memory
let cat = {
  name: 'pumpkin',
  age: 2
}

//just creating another variable to point at the same object in memory
//therefore if you change one, you change both
let cat2 = cat;
cat.name = 'celebi';

console.log('cat1:', cat, 'cat2:', cat2);//cat1: { name: 'celebi', age: 2 } cat2: { name: 'celebi', age: 2 }
