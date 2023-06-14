/*


  Mutability - is the concept pieces of data being able to be mutated(to change), Of the the datatypes we've seen up to this point, only arrays can be mutated

  Mutable - can change
    - arrays
    - objects

  Immutable - cannot change
    - strings
    - numbers
    - booleans

*/

let sequence = ['T','A','C','G'];
console.log(sequence);
sequence[0] = 'C';
console.log(sequence);//[ 'C', 'A', 'C', 'G' ]
//we have mutated the array
//weve done so by keying into the array and using the assignment operator to reassign the value
// we are mutating the sequence


//strings may seem mutable but they are not
let name = 'brandon';
console.log(name);//brandon
name[0] = 'k';
console.log(name);//brandon

//we cant mutate a string
//all we can do is reassign
name = 'krandon';
console.log(name);//krandon


