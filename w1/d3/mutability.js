/*


  Mutability
  - is the concept of certain pieces of data being abel to be mutated or changed. Of the datatypes that weve seen so far, only arrays are mutable

  Mutable - can be changed
   - array
   - objects - learn next week

  Immutable - cannot be changed
   - strings
   - booleans
   - numbers
   - anything that is not an object

*/

//

let sequence = ["T", "A", "C", "G"];
console.log(sequence); //[ 'T', 'A', 'C', 'G' ]
// lets mutate the array
sequence[0] = "C";
console.log(sequence); //[ 'C', 'A', 'C', 'G' ]

// we mutated the sequence array
// we reassigned the value at index 0 to be C instead of T

// Strings feel like they should mutable, but they are not!

let name = "brandon";
console.log(name); //brandon
name[0] = "k";
console.log(name); //brandon

// the value of the name string, was not mutated, it was not changed

//all we can do is reassign the variable to an entire new string
name = "krandon";
console.log(name); //krandon


// let bool = true;
// let num = 12;
// let string = "string";
