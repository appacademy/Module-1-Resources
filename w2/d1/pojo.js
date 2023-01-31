/*

  Objects!
    - holds a key - value pair
    - unordered
    - a data structure to store other data types
    - keys are typically strings
    - values can be anything
    - defined by {} - object literal
*/

//arrays!
//each index in a array corresponds to a value
//indexes - 0 1 2
//value -   c a t;
let arr = ["c", "a", "t"];
// console.log(arr[0])//c

//lets talk about objects
//structure of object obj = {};
//key - 0;
//value - c;
//wrapped in curlys
//separated by commas
//seperate the key and values by colons :
let obj = { 0: "c", 1: "a", 2: "t" };
//specifying the key, so we can gain access to the value
// console.log(obj[0], obj[1], obj[2]);
// console.log(typeof obj[0] === 'string')//true

//values can be any data type
let brandonObj = {
  name: "krandon",
  1: "type cast to a string",
  age: 27,
  softwareEngineer: true,
  favoriteBands: ["joyce manor", "neck deep", "idles"],
  location: { city: "tampa", state: "florida" },
  sayHello: function () {
    return "hello";
  },
};

console.log(brandonObj.sayHello())//hello

//if we want to access an objects value, we must key into it using the key
//key unlocks the value

//two ways to access variables in objects
//dot notation vs bracket notation

//dot notation
//easier read
//cannot use variables as keys - because it will take the literal string after the dot and use that as the key, not the variable
//will key into whatever the string is after the dot, not the variable
//access name
// console.log(brandonObj.name);//krandon
// console.log(brandonObj.age);//27

// // //bracket notation
// // //can use variables, values in square brackets will resolve before it tries to key into the object
// console.log(brandonObj['name']);
// console.log(brandonObj['age']);

let obvious = "na" + "me";
// console.log(brandonObj.name);//this works
// console.log(brandonObj['name'])//this works
// console.log(brandonObj.obvious)//because a key(string) of obvious does not exists

// //whatever the dot, will be the literal string used the as the key
// console.log(brandonObj[obvious])//this work! - krandon
// //inside the square brackets the obvious variable resolves to the string - 'name' so we key into the obj using the string name - brandonObj['name'] === brandonObj[obvious]

//access nested object
//can mix and match
let myVar = "location";
// console.log(brandonObj.location.city);
// console.log(brandonObj['location']['city'])
// console.log(brandonObj[myVar].city);

//change key/value pair
//change name
// brandonObj.name = 'KRANDON';
//hey access the brandonObj, key into the name, use the assignment operator to reassign the value to krandon
// console.log(brandonObj)
//if you try and key into a key that does not exist and assign it a value, it will create that key value pair

//can increment age
brandonObj.age++;
// console.log(brandonObj.age)

////if you try and key into a key that does not exist and assign it a value, it will create that key value pair
brandonObj.favoriteColor = "red";
// console.log(brandonObj)

//if it already exists, it will over write the value
brandonObj.favoriteColor = "jet black";
// console.log(brandonObj)

//add/change to the nested obj
brandonObj.location.country = "usa";
//change nested object value
brandonObj.location.country = "USA";
// console.log(brandonObj)

//check if value exists in obj
//check if name key has a value

// console.log(brandonObj)
if (brandonObj.name !== undefined) {
  // console.log("value exists");
}

//check if key exists
// if('age' in brandonObj) console.log('key exists')



//delete a key/value pair in an obj
// console.log(brandonObj);
delete brandonObj;
// console.log(brandonObj);


//iterate through an array
// console.log(brandonObj.favoriteBands)

let favBands = brandonObj.favoriteBands;
// console.log(favBands)


//for of loop!
// will not objects
// works on array
// grab the values
for(let band of favBands) {
  // console.log('band:', band)
}

//for in,
//will work on objects - grabs keys
//work on array
//grabs the indexes
for(let index in favBands) {
  // console.log('index', index)
  // console.log('value', favBands[index])
}

//another example
// Iterating through objects:
let show = {
  name: "Star Trek",
  series: ["TOS", "TNG", "DS9", "VOY"],
  captains: {
    TOS: "Kirk",
    TNG: "Picard",
    DS9: "Sisko",
    VOY: "Janeway"
  },
}

//for in loop used on obj - grab the keys
//use for in loop to grab all keys
//then you can index to get all the values
for(let key in show) {
  // console.log('key:', key);
  // console.log('value:', show[key])
}

/*
for(let ele of show) {
TypeError: show is not iterable
*/
//this does not work on objects
// for(let ele of show) {
//   // console.log('hello')
// }


//get all of the keys
//return an array of all the keys from the show obj
let keyArray = Object.keys(show);
// console.log(keyArray)
//we create a array of keys, then iterate so we can key into the value
for(let key of keyArray) {
  // console.log('key', key);
  // console.log('value', show[key])
}

//get all values
//return an array of values
let valuesArray = Object.values(show);
// console.log(valuesArray)

//get all keys and values
//a matrix with subArr that have the key as index 0 and value at index 1
let entries = Object.entries(show);
console.log(entries)
