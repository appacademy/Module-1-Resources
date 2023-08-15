/*


  Reference vs Primitive Types

  What are reference data types?
    * objects
    * array
    * Mutable - can be changed

  What are primitive data types?
    * boolean
    * strings
    * numbers
    * null
    * undefined
    * Immutable - cannot be changed

*/


// Primitive data type
// * point the age variable at the number 27 in memory
let age = 27;

// * Pint the newAge variable at whatever the age variable is pointing at; at this point its the number 27
let newAge = age;
// * Increment the age variable -  reassign what the age variable is pointing at
age += 1;

console.log('age: ', age, 'newAge: ', newAge);
// age:  28 newAge:  27
// * Notice that age has changed and newAge remains the same
// * this is because primitive data type are immutable
// * we just tell js what to point at in memory
// * static memory allocation - memory already exists we just need allocate it
// * when we reassign , we changed what the age variable was pointing at, but not what the newAge variable was pointing at.
// age => 28
// newAge => 27

// Reference data type
// * JS create references data types by assigning portions of memory
// * Dynamic memory allocation - memory needs to be freed and allocated for reference data types
// * Memory is allocate as needed in order save memory

// lets create a reference in memory
// variable cat1 that points at a reference in memory
// * cat1 => <reference>
let cat1 = {
  name: 'pumpkin',
  age: 4
}

let cat2 = cat1;
// * point the cat2 variable at whatever cat1 is pointing at; its a reference in memory
// * so now we have two variable pointing at the same reference in memory
// * cat2 => <reference>
// * cat1 => <reference>

cat1.name = 'celebi';

console.log('cat1:', cat1, 'cat2:', cat2);
// cat1: { name: 'celebi', age: 4 }
// cat2: { name: 'celebi', age: 4 }
// * changing one change both
// * both variables are pointing at the same reference
// * cat1 => <reference>
// * cat2 => <reference>
// * <reference> hold the properties/methods

cat1.isCute = true;

console.log(cat);
