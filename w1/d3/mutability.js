/*



  Mutability
    * A concept that certain pieces of data being able to be changed or mutated.

  Mutable - can be changed
    * array
    * objects - learn next week

  Immutable - cannot be changed
    * strings
    * numbers
    * booleans
    * everything else!
*/


let sequence = ['T','A','C','G'];
// console.log(sequence);// [ 'T', 'A', 'C', 'G' ]
sequence[0] = 'C';
// console.log(sequence);// [ 'C', 'A', 'C', 'G' ]
// * were able to modify or mutate the array by keying into the index and reassigning the value that is there


// Strings are not mutable!
let name = 'brandon';
console.log(name);// brandon
name[0] = 'k';
console.log(name);// brandon
// we cannot mutate a string!

// all we can do is reassign the string to an entirely new string
name = 'krandon';
console.log(name);// krandon
