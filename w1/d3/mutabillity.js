/*

  Mutability
  * Mutability is the concept of certain pieces of data being able to changed or mutated. Of the datatypes that we've seen so far, only arrays are mutable.

  Mutable - can be changed
    * arrays
    * objects - learn next week

  Immutable - cannot be changed
    * strings
    * numbers
    * booleans
    * everything thats not an object/arr/function

*/

let sequence = ["T", "A", "C", "G"];
console.log(sequence); // [ 'T', 'A', 'C', 'G' ]
sequence[0] = "C";
console.log(sequence); //[ 'C', 'A', 'C', 'G' ]
//* mutated the sequence
//* alters whats there

// strings however dont have the same behavior
let name = "brandon";
console.log(name); // brandon
name[0] = "k";
console.log(name); //brandon
// * this doesnt work
// all we can is reassign the string
name = "krandon";
console.log(name); // krandon

let newName = [];
for (let i = 0; i < name.length; i++) {
  let letter = name[i];
  newName.push(letter);
  // newName += letter.toUpperCase();
  console.log(newName);
}
console.log(newName)
