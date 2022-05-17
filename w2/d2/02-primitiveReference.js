// Primitives
// Javascript has two ways of treating information : Primitive and Reference 
// values. A primitive value is something that exists independently within JS.
// We can never mutate primitive values, but we can reassign the variables that
// point to them. 
// Some primitive data types we've seen so far are:
//   - Boolean
//   - Null
//   - Undefined
//   - Number
//   - String  (this one might feel weird, but the way JS sees strings is 
//     to how it sees numbers. A collection of smaller constituent characters
//     that all have assigned spots in memory, building something larger.)

// Primitive examples: 
let age = 56;
let newAge = age;
age += 1;

console.log(age, newAge);


// Reference values are a bit tricky. JS creates reference values by assigning
// some bit of computer memory to track its value. Java Script has one reference
// data type: the Object (arrays are a special kind of object!)


// Reference -- create a variable biff that points to some object
let biff = {
  type: 'cat',
  age: 16,
};


// here's where it gets tricky -- when we write the below code, we're actually 
// just creating another variable that points to the same object
let buster = biff;

// reassign biff's age
biff.age = 3;

// note that both biff and buster's ages have been changed. When we change the
// value stored at the age key, we're changing that key in the reference object
// that both biff and buster point to. When we assigned buster's value to biff,
// we told javascript that what we wanted was another pointer ton the same
// reference object. This will be one of the more difficult things we have to
// be aware of as the course goes on
console.log(biff, buster);