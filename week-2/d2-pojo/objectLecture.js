// ? 
// The Object Type
// An unordered collection of key-value pairs
// POJO- Plain Old JavaScript Object

// Keys are strings and must be unique
// Keys point to values

// Values can be anything!
// Objects are unordered, order is not guaranteed!


// Initializing an empty object
// Adding key-value pairs.

// Iterating through an object 

// ?

let myObject = {};

//  1.BRACKET notation
myObject["Adrian Rampy"] = "PST";
myObject["adrian"] = "EST";
console.log(myObject.adrian) 
console.log(myObject["Adrian Rampy"]) 

// DYNAMICALLY add key-value pairs
let key = 'Justin N';
myObject[key] = 'PST';
myObject["Justin"] = 'PST';

// We can only use dot notation if we know EXACTLY what a key will be.
myObject.miah = 'EST';
myObject.emily = '?';

let banana = 'Miah';
myObject.banana = 'EST';
console.log(myObject)

// iteration through an object 
values = Object.values(myObject)
keys = Object.keys(myObject)

for (const key in myObject){
  debugger
  console.log(key)
}
