/*



  Reference vs Primitive data types!

  Reference data types! - Mutable! - can be changed!
    1. Objects
    2. arrays

  Primitive data types! -  Immutable - cannot be changed!
    1. Null
    2. undefined
    3. number
    4. boolean
    5. string
    6. everything isn't object

*/


//Primitive example
//static data types, memory is not allocated for them
//primitive data types have assigned spots in memory
// whenever we declare a variable that holds a primitive data type
// we are pointing the variable at the data type in memory
let age = 27;// we are saying point the age variable at the number data type 27 in memory
let newAge = age;// we are saying hey, point the new age variable at whatever age was pointing at, which is 27
//age => 27
//newAge => 27
age++; // i want to point the age variable at whatever is was(27) but add one, (28)
//now are age variable points at 28 in memory, weve reassigned the pointer to point at a different number
//age => 28    age has been reassigned and now points at 28
//newAge => 27 newAge is still pointing at 27
// console.log(age);
// console.log(newAge);


//primitive example
//when we create a reference data type, memory is allocated for these types - dynamic memory allocation
//it allocate as needed, when we are done with the object, it will be garbage collected! - stored in the heap!

//lets create a reference in memory!
//variable that points at a reference to a object in memory
//when you point a variable at a reference type, you are pointing the variable the a reference in memory
let cat = {
  name: 'mochi',
  age: 1
}
// hey point this cat variable at the reference to this object in memory
// cat => <referenceInMemory>

let cat2 = cat;// we are saying hey, point the cat2 variable at the reference in memory that cat is pointing too
// cat => <referenceInMemory>
// cat2 => <referenceInMemory>

// cat.name = 'Celebi';// we are changing the name value in the cat object, but because we are changing the reference, it changes both

//both cat variables are pointing at the same reference in memory
console.log(cat, cat2); //{ name: 'Celebi', age: 1 } { name: 'Celebi', age: 1 }
console.log(cat2 === cat) //true

let cat4 = {
  name: 'mochi',
  age: 1
};
//tho it looks the same, it not the same reference in memory
//cat4 => <referenceInMemory2>
//cat => <referenceInMemory>
console.log(cat4 === cat); //false - because they are different reference in memory
