/*


  Mutability
  * The ability to change

  Mutable - can be changed
    * Arrays
    * Objects

  Immutable - cannot be changed
    * boolean
    * number
    * strings

*/

let sequence = ['T','A','C','G'];
console.log(sequence);// [ 'T', 'A', 'C', 'G' ]
sequence[0] = 'C';
console.log(sequence);// [ 'C', 'A', 'C', 'G' ]
// *  were able to modify or mutate the array by keying into indexes and altering whats there
// * we are mutating DNA CODE

// Doesnt work with strings
// They are immutable
let name = 'brandon';
console.log(name);// brandon
name[0] = 'k';
console.log(name);// brandon

name = 'krandon';
console.log(name);// krandon
