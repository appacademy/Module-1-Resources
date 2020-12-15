// // The Object Type
// // An unordered collection of key-value pairs
// // POJO- Plain Old JavaScript Object

// // Keys are strings and must be unique
// // Keys point to values

// // Values can be anything!
// // Objects are unordered, order is not guaranteed!




// // -------------------------------------------------------

// // Initializing an empty object
// // Adding key-value pairs.

let myObject = {};

// // 1.BRACKET notation
myObject["Adrian Rampy"] = "PST";
myObject["adrian"] = "EST"; // cannot have dup keys
console.log(myObject.adrian) 
console.log(myObject["Adrian Rampy"]) 

// myObject["Tom"] = "PST";

// // DYNAMICALLY add key-value pairs
let key = 'Justin N';
// myObject[key] = 'PST';
// myObject["Justin"] = 'PST';

// // We can only use dot notation if we know EXACTLY what a key will be.
// myObject.miah = 'EST';
// myObject.emily = '?';

// // Cannot do this:
let banana = 'Miah';
// myObject.banana = 'EST'; // => 'banana': 'EST


console.log(myObject)
// // console.log(myObject);
// // console.log('\n------------ \n');

// // Keys point to a value
// // bracket into an obj w a ket to get a value

// myObject["Tom"] // ? 
// myObject.miah // ? 

// myObject.angela // ?
// myObject["angela"] // ?

// 1. bracket notation
// 2. dot notation *
// 3. dynamically (with a variable + bracket notation)