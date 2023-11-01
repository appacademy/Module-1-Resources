
/*

  Mutability
  * Mutability is the concept of certain pieces of data being able to changed or mutated.Of the datatypes that we've seen so far, only arrays are mutable.

  Mutable - can be changed
    * arrays
    * objects - learn next week

  Immutable - cannot be changed
    * strings
    * numbers
    * booleans
    * null
    * undefined
    * anything that is not object/array
*/

let sequence = ['T','A','C','G'];
console.log(sequence);// [ 'T', 'A', 'C', 'G' ]
sequence[0] = 'C';
console.log(sequence);// [ 'C', 'A', 'C', 'G' ]
// were able t modify or mutate the array by keying into its index
// sequence[4] = true;
// console.log(sequence);

// a string
let name = 'brandon';
console.log(name);// brandon
name[0] = 'k';
console.log(name);// brandon
// we cannot mutate a string

// what we can do
name = 'krandon';
console.log(name);// krandon
