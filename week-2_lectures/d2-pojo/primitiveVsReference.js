/**
 * Pirmitive Data Types cannot be DIRECTLY changed in memory.
 *    Instead, they have 'pointers', that get reassigned
 *    to whatever new value you are attempting to reassign 
 *    your Primitive Data Type variable to. 
 * 
 * Reference Data Types CAN BE DIRECTLY changed in memory, 
 *    aka they can be 'mutated', and are 'mutable' data types.
 *   
 * 
 * Reference => MUTABLE
 * Primitive => IMMUTABLE
 *  
 */
// PRIMITIVE :
  // Boolean
  // Null
  // Undefined
  // Number
  // String
  
// REFERENCE :
  // Object

// ------------------------------------------------

// Setting variables equal to each other and memory.

  // If we set variables holding primitive data types equal to each other
  // and then change one of those variables, the other variable will
  //  remain unchanged.

  // If we set variables holding reference data types equal to each other
  // and then change one of those variables, both variables will change.


// Primitive example:

let prim1 = 'old value';
let prim2 = prim1; // 'old value

// console.log(prim1);
// console.log(prim2);

// reassign prim1
prim1 = 'new value';
debugger


//  Reference example:

let ref1 = { key: 'old value'};
let ref2 = ref1; 

debugger

// mutating ref1
ref1.newKey = 'kiwi'
ref2.updatingRefTwo = true;
debugger

// Reassignment shown below creates a new array 
// rather than mutating the array.
// This would not change the value in ref2
ref1 = ['new value'];
debugger