/*

  Reference vs Primitive Types

  What are Reference Data Types?
    * Mutable - can be changed
    ** Objects (includes arrays!)

  What are Primitive Data Type?
   * Immutable - cant be changed
    ** Boolean
    ** Null
    ** Undefined
    ** Number
    ** String

*/



// Primitive data type
// * Point the age variable at the number 27 in memory
let age = 27;
// * Point the newAge variable at whatever the age variable is point at; at this point, its the number 27
let newAge = age;
// * Increment the age variable - reassign what age is pointing at
age += 1;
console.log("age: ", age, "newAge: ", newAge); // age: 28 newAge: 27
// * Notice that age has changed and newAge remains the same
// * This is because primitive data types are immutable
// * primitive data types have assigned spots in memory
// * we just tell js what to point a variable at in memory
// * static memory allocation - memory already exists just need to allocate it
// * when we reassign, we change where we are pointing the age variable but not the newAge variable, so it still points at the same thing
// age => 27
// newAge => 28

// Reference data type
// * JS creates reference data types by assigning portions of memory
// * Dynamic memory allocation - memory needs to be freed and allocated for reference data types
// * Memory is allocated as needed in order to save memory

// lets create a reference in memory
// *  variable cat1 that points at a reference in memory
// * cat1 => <reference1>
let cat1 = {
  name: "pumpkin",
  age: 3,
};

// * actually just pointing another variable at the same reference in memory
// * cat2 => <reference1>
let cat2 = cat1;

cat1.name = "celebi";
// * changing one; changes both
// * both variables are pointing at the same reference
// * cat1 => <reference1>
// * cat2 => <reference1>
// * <reference1> holds they properties/methods
console.log("cat1: ", cat1, "cat2: ", cat2);
