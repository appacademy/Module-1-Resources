/*

  Reference vs Primitive data types!

  Reference data types! - Mutable - can be changed
    1. Objects
    2. Arrays

  Primitive data types - Immutable - cannot change
    1. everything except objects!
    2. strings
    3. null
    4. undefined
    5. number
    6. boolean

*/

//primitive example
//static data types, memory is not allocated for them
//primitive data type, have assigned spots in memory
//whenever we declare a variable that holds a primitive data type
//we are pointing the variable at the data type in memory
let age = 27;//we are saying point the age variable at 27 in memory
let newAge = age;//we are saying, point the newAge variable at whatever age was pointing at -> 27
//age -> 27
//newAge -> 27
age++;
//age = age + 1
//hey point that age variable no longer at 27, point it at whatever age was + 1 -> 28
// console.log(age);//28
// console.log('new age', newAge);//27
//new age has not be changed, its primitive data type
//newAge is still pointing at 27 in memory


//reference example
//when we create a reference data type, memory is allocated for these type - dynamic memory allocation
//it allocates as needed, when were done with the reference, its trash collected - stored in heap!

//lets create a reference in memory
//variable that points at that reference in memory
//when you point a variable that is a reference data type, you are pointing at a reference
let cat = {
  name: 'mochi',
  age: 1
};
// cat -> <referenceToCatObj>
//hey point this cat variable at this reference

let cat2 = cat;//we are saying hey point the cat2 variable at whatever the cat variable is pointing at
// cat -> <referenceToCatObj>
// cat2 -> <referenceToCatObj>

cat.name = 'celebi';

console.log('1',cat);
console.log('2',cat2);
//both cat and cat2 have been mutated
// 1 { name: 'celebi', age: 1 }
// 2 { name: 'celebi', age: 1 }
//you change, you change both because they are the same reference in memory
console.log(cat === cat2);//true -  same reference in memory

let copyCat = {
  name: 'mochi',
  age: 1
};

//Cat 3 is a new reference in memory tho it looks the same, it is not the same reference
console.log(cat === copyCat);//false
// cat -> <referenceToCatObj>  name -> mochi, age -> 1
// copyCat -> <differentReferenceToCatObj>
