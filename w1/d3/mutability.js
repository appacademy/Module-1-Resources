/*


  Mutability
  * Mutability is the concept of certain pieces of data being able to changed or mutated. Of the datatypes that we've seen so far, only arrays are mutable.

  Mutable - can be changed
    * arrays
    * objects

  Immutable - cannot be changed
    * string
    * numbers
    * booleans
    * etc

*/


// Arrays are mutable
let sequence = ['T','A','C','G'];
console.log(sequence);// [ 'T', 'A', 'C', 'G' ]
sequence[0] = 'C';
console.log(sequence);// [ 'C', 'A', 'C', 'G' ]
// We've mutated the array
// * altering what is there


// Strings might feel like they are mutable, but they're not
let name = 'brandon';
console.log(name);// brandon
name[0] = 'k';
console.log(name);// brandon
// We cant mutate a string!

// all we can do is reassign
// name = 'krandon';
// console.log(name);// krandon


