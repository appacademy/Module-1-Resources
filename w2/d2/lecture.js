/*
  Primitive vs Reference Types
    Reference Data Type:
      - Objects (Includes Arrays!)
      - referncing a place in memory
      - Mutable

    Primitive Data Types:
      - Boolean
      - Strings
      - Numbers/Integers
      - Null
      - Undefined
      - Immutable
*/

//primitive example
let age = 27;
//primitive data types have assgined spots in memory
//were pointing the age varaible at the number 27 in memory
let newAge = age;
//hey point this variable at whatever age is pointing at,
//so both newAge and age var pointing at the number 27
age += 1;
//when we reassign, we are changing where we are pointing
//so age was pointing at 27, we then reassgien and point it, at 28
// console.log(age, newAge)


//Reference example
//javascript creates reference values by assigning portions of memory
//only one reference type - object

//created a reference in memory
//variable cat, that points at an object in memory
let cat = {
  name: 'Pumpkin',
  age:2
}

//were actually just creating anotehr variable to point the same reference in memory
//both cat2 and cat both point at our object in memory
let cat2 = cat;

//we can prove this
cat.name = 'Celebi';

console.log(cat, cat2)//{ name: 'Celebi', age: 2 } { name: 'Celebi', age: 2 }
