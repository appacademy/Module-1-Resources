/*

  Reference vs Primitive data types

  What are reference data types?
    ** Mutable - can be changed
    * Objects
    * Arrays

  What are primitive data types?
    ** Immutable
    * numbers
    * strings
    * boolean
    * null
    * undefined
    * Anything that isnt a object

*/


// Primitive Data type
// * Point the age a valuable at the number 27 in memory
let age = 27;
// * Point the newAge variable at whatever the age variable is pointing at this point in time, it is the number 27
// age -> 27
// newAge -> 27
let newAge = age;
// * Increment the age variable - reassign what age is pointing at
age += 1;
// console.log('age:', age, 'newAge:', newAge);// age: 28 newAge: 27
// * Notice that age has changed and newAge remains the same
// * This because primitive data types are immutable
// * We just tell hs what to point at
// * Static memory allocation - memory already exists just need to allocate it
// * when we reassign we change where we are pointing the age variable but the newAge variable still points at 27
// age -> 28
// newAge -> 27



// Reference data type
// * JS create reference data types by assigning portion of memory
// * Dynamic memory allocation - memory needs to be freed and allocated for reference data types
// * Memory is allocated as need in order to save memory
// * anytime a reference data type is no longer used; it is garbage collected


// lets create a reference in memory
// * variable cat1 that points at a reference in memory
// * cat1 => <reference1>
let cat1 = {
  name: 'pumpkin',
  age: 3
}
// * actually just pointing another variable at the SAME reference in memory
// *  cat2 => <reference1>
let cat2 = cat1;

cat1.name = 'celebi';
// * changing one; changes both
// * both variables are point at the same reference
// * cat1 => <reference1>
// * cat2 => <reference1>
console.log('cat1:', cat1, 'cat2:', cat2);
// cat1: { name: 'celebi', age: 3 } cat2: { name: 'celebi', age: 3 }
