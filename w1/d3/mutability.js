/*




  Mutability! - is the concept of certain pieces of data being able to be mutated. Of the datatypes we've seen so far that can be mutated are arrays.

  Mutable - can change element
    - arrays
    - objects

  Immutable - cannot be changed
    - strings
    - numbers
    - booleans
*/


let sequence = ['T','A','C','G'];
// console.log(sequence);//[ 'T', 'A', 'C', 'G' ]
sequence[0] = 'C';
console.log(sequence);//[ 'C', 'A', 'C', 'G' ]
// were able to modify or mutate the array by keying into and altering whats there
// we are mutating this sequence

//strings may seem mutable but they are not
let name = 'brandon';
console.log(name);// brandon
name[0] = 'k';
console.log(name);// brandon

//we cant mutate a string
//all we can do, is reassign the string
name = 'krandon';//have to reassign name to a whole new string
console.log(name);//krandon


