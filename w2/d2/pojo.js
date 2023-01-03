/*
    Objects! Pojo
    - A set of key - value pairs
    - unordered!
    - define by {}
    - a data structure that stores other data types
    - Everything is javascript in actually in object
*/

//lets talk arrays
//each index corresponds to a value at the index

let arr = ["c", "a", "t"];
//indexes - 0 1 2
//value - c a t

//in order to access a value at a index, we must key into the like so
console.log(arr[0]);//c
console.log(arr[1]);//a
console.log(arr[2]);//t

//lets talk about objects
//objects are very similar to arrays
// structure of an object - {}
//key - 0
//value - 'c'
//in order gain access to a value in a object, we must key into it using the key
//value can be any data type -  string, number, boolean, function, etc
//inside a object literal = {}, we have a key and value separated by :, and each key value pair will be separated by commas
let obj = { 0: "c", 1: "a", 2: "t" };
//lets access some values
console.log(obj[0], obj[1], obj[2])
console.log(obj['0'] + obj['1'] + obj['2'])

let brandonObj = {
  name: "brandon",
  age: 27,
  swe: true,
  favoriteBands: ["joyce manor", "neck deep", "idles"],
  location: { city: "tampa", state: "florida", array: [1,2,3,4] },
  sayHello: () => "hello",
};

//two ways to access variables in a object
//dot notation vs bracket notation

//dot notation
//easier to read
//cannot use a variable as a key when using dot notation
//when you key into an object, it will key into whatever the string is after the dot, not the variable it holds

console.log(brandonObj.name);//brandon
console.log(brandonObj.age);//27
console.log(brandonObj.sayHello());//
console.log(brandonObj.location.city);//you can key into nested objects, as long as you know your data type!
console.log(brandonObj.favoriteBands[0])

//bracket notation
//uses a [] to access an objects value instead of a .
// can use variables, value in the square brackets will resolve before trying to key into an object
console.log(brandonObj['name'])//brandon
console.log(brandonObj['age'])//27

// //can use variables with bracket notation
// let variable = 'name'
// //when ever you put a variable in square brackets when trying to access a value in a object, that variable must evaluate,then using the evaluation will it key into the object
console.log(brandonObj['name'])//brandon
console.log(brandonObj[variable])//brandon

//if you try and key into a key that does not exist, you will get undefined
console.log(brandonObj.variable2)

// //we can key into nested object
// //we can mix and match bracket and dot notation
console.log(brandonObj.location['city']);

//changing key/values pair in obj
//change name

// console.log(brandonObj.name);

brandonObj.name = "KRANDON";

brandonObj["age"] = 270;

//want to change location from tampa to brooksvile
brandonObj.location.city = "brooksville";
// console.log(brandonObj.location)

//use an increment operator
brandonObj.age++;
// console.log(brandonObj.age)

//add a new key value pair
//so if key already exists, the value will be overwritten
//if it doesnt, the key value pair will be added to the object
brandonObj["favColor"] = "red";
// console.log(brandonObj);
// //if key already exists, overwrite the value
// brandonObj["favColor"] = "blue";
// console.log(brandonObj);

// //add a new key value pair to nested object, zip code - 34601
// brandonObj["location"]["zip-code"] = 34601;
// console.log(brandonObj);


//check if value exists in a object
//check if name exists in our object
// if(brandonObj.name !== undefined) {
//   console.log(brandonObj.name)
//   console.log('value exists!')
// }


// //check if key exists
// //syntax
// // if(nameOfKey in objectToCheck)
// if('name' in brandonObj) {
//   console.log('key exists!')
// }


//delete a key value pair from in obj
//you would use the delete keyword
delete brandonObj.age
// console.log(brandonObj)

//delete array from nested location object
delete brandonObj['location'].array;
// console.log(brandonObj)


//how to iterate through nested array in object
// console.log(brandonObj.favoriteBands)
let favBands = brandonObj.favoriteBands;
// console.log(favBands)

//for of loop!
//will not work on objects
//for of loop will grab all the values from an array
for(let band of favBands) {
  // console.log(band)
}

//for in, grabs arrays indexes
for(let index in favBands) {
  // console.log(index)
}


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

//cannot of a for of loop on a object
//TypeError: show is not iterable
//this does not work!
// for(let ele of show) {
//   console.log(ele)
// }

//for in
//if used on object, will grab the keys
//if used on array, it will grab the indexes
//name
// series
// captains
//grab all the keys in this object
for(let key in show) {
  // console.log('key:', key);//because we have the key now, we can use it to get the value
  // console.log('value:', show[key])
  // console.log(show)
}

//object.keys!
//grab all the keys of an objects and returns in an array
let keys = Object.keys(show);
// console.log(keys);//[ 'name', 'series', 'captains' ]
//another way to get keys, to gain access to values
for(let key of keys) {
  // console.log(key);
  // console.log(show[key])
}


//object.values
//grab all the values of an object and returns in an array
let values = Object.values(show);
// console.log(values);

//Object.entries
//return a 2d array with the keys as the first element, and the value as the second ele
let entries = Object.entries(show.captains)
console.log(entries)
