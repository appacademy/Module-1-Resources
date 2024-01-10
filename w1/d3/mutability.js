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
*/


let sequence = ['T','A','C','G'];
console.log(sequence);// [ 'T', 'A', 'C', 'G' ]
sequence[0] = 'C';
console.log(sequence);// [ 'C', 'A', 'C', 'G' ]


let name = 'brandon';
console.log(name);// brandon
name[0] = 'k';
console.log(name);// brandon

name = 'krandon';
console.log(name);// krandon


console.log('brandon'.slice(0,2))
