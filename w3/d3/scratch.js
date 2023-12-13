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

// primitive data types
let age = 27;
// age => 27
let newAge = age;
// newAge = age = 27
age += 1;
// console.log({age, newAge})
// age => 28
// newAge => 27


// Reference data types
// * JS creates reference data types by assigning portions of memory
// * Dynamic memory allocation - memory needs to be freed and allocated for reference data types
// * Memory is allocated as needed in order to save memory

// lets create a reference in memory
let cat1 = {
  name: 'pumpkin',
  age: 3
};
// cat1 => <reference-cat1>

// let cat2 = cat1;
// // cat2 => <reference-cat1>
// // cat1 => <reference-cat1>

// cat1.name = 'celebi';
// // * changing one; changes both
// // * both variables are pointing at the same reference
// // * cat1 => <reference1>
// // * cat2 => <reference1>
// // * <reference1> holds they properties/methods
// console.log(cat1, cat2);
// // { name: 'celebi', age: 3 } { name: 'celebi', age: 3 }

// // a shallow copy, this create a shallow copy
// let cat3 = {...cat1};
// // cat3 => <reference2-cat3>

// cat3.name = 'mochi';

// console.log(cat3, cat1);
// /*
// { name: 'celebi', age: 3 } { name: 'celebi', age: 3 }
// { name: 'mochi', age: 3 } { name: 'celebi', age: 3 }
// */


const avenger = {
  name:'Tony stark',
  alias:'iron man',
  team: 'avengers',
  powers: ['rich', 'smart'],
  weapons:'mark 43 suit',
  abilities: {
    flight: true,
    immortality: false
  },
  status: 'rip'
}

console.log(avenger);

// avenger => <reference1>

let avenger2 = avenger;
// avenger => <reference1>
// avenger2 => <reference1>

console.log(avenger === avenger2);

let avenger3 = {
  name:'Tony stark',
  alias:'iron man',
  team: 'avengers',
  powers: ['rich', 'smart'],
  weapons:'mark 43 suit',
  abilities: {
    flight: true,
    immortality: false
  },
  status: 'rip'
}
// avenger3 => <reference2>
// console.log(avenger === avenger3);
// <reverence1> !== <reference2>

// this creates a shallow copy
let avenger4 = {...avenger};
// avenger4 => <reference3>

console.log(avenger4 === avenger)
// <reverence1> !== <reference3>

console.log(avenger4.abilities === avenger.abilities);
// <reverence1> !== <reference3>
//           <reference1>
/* <nestedReference-powers> <nestedReference-abilities> */
//           <reference3>
/* <nestedReference-powers>  <nestedReference-abilities> */
//  <nestedReference-abilities> ====  <nestedReference-abilities>

// deep copy!
let deepAvenger = JSON.parse(JSON.stringify(avenger));


console.log(deepAvenger === avenger);// false
console.log(deepAvenger.abilities === avenger.abilities);// false
