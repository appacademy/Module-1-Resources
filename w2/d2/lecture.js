/*



  Reference vs Primitive data types

  What are reference data types?
    * objects
    * arrays
    ** mutable data types

  What are the primitive data types?
    * strings
    * numbers
    * booleans
    * null
    * undefined
    ** immutable data types

*/

// Primitive data type
// * point the age variable at the number 27 in memory
let age = 27;

let newAge = age;
// * Point the newAge variable at whatever the age variable is pointing at
// age -> 27
// newAge -> age -> 27
// newAge -> 27

age += 1;

console.log('age:', age, 'newAge:', newAge);
// * Notice that the age has changed and newAge remains the same?!
// * This is because primitive data types are immutable
// * primitive data types have assigned spots in memory
// * we just tell js what to point at
// * static memory allocation - memory already exists just need to allocate it
// newAge points 27 still
// while age has been reassigned to point to 28
// age -> 28
// newAge -> 27
