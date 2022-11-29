/*

  Objects! POJO
    - Everything in javascript is in object!
    - Data structure allows us to hold a collections of values
    - a set of key - value pairs
    - uses curly braces = {}
    - Objects do not have a guaranteed order

*/

//lets talk about arrays!
//each index corresponds to a value at that index
let arr = ["c", "a", "t"];
// indexes - 0 1 2
// value -   c a t

//in order to access a value at a index, we must key into it like so
// console.log(arr[0]);//c
// console.log(arr[1]);//a
// console.log(arr[2])//t

//lets talk objects!
//objects are very similar to arrays
//structure of an object
//objects consist of key value pairs
//key - 0
//value - 'c'
//gain access to value by using the key
//values can be any data type - strings. numbers, booleans, functions, etc
let obj = { 0: "c", 1: "a", 2: "t" };
// console.log(obj[0]);//c
// console.log(obj[1]);//a
// console.log(obj[2]);//t

//differences
//objects uses curly braces {};
//key can be a string/number
//lets make a more practical object
let brandonObj = {
  name: "brandon",
  age: 27,
  softwareEngineer: true,
  favoriteBands: ["Joyce manor", "neck deep", "idles"],
  location: { city: "tampa", state: "florida" },
  sayHello: () => "hello",
};

//Two ways to access variables in a object
//dot notation vs bracket notation

//dot notation
//easier to read
//cannot use variable as a key
//will key into whatever the string is after the dot, not the string the variable holds
//access name var
// console.log(brandonObj.name)//brandon
// console.log(brandonObj.age);//27
// console.log(brandonObj.location);//florida
// console.log(brandonObj.lastName);//undefined

//bracket notation
//uses a [] to access an object instead if a .
//can use variables, values in the square bracket will resolve before trying to key into the object
// console.log(brandonObj['name']);//brandon
// console.log(brandonObj['age']);//27

//can use variables with bracket notation
let variable = "name";
// console.log(brandonObj['name']);//brandon
// console.log(brandonObj[variable])//brandon

//we are looking for a key of variable in our object, not the string name
//variable string does not exists in our object
// console.log(brandonObj.variable)//undefined

//we can key into nested objects
// console.log(brandonObj.location.city);//tampa
// //can use both bracket and dot notation
// let city = 'city'
// console.log(brandonObj.location[city]);//tampa
// console.log(brandonObj['location']['city'], brandonObj.name)//Tampa

//changing key/value pairs
//change name
// console.log(brandonObj.name)
// brandonObj.name = 'krandon';
// console.log(brandonObj.name)

//change nested objects
// brandonObj.location.city = 'brooksville';
brandonObj["location"].city = "brooksville";
// console.log(brandonObj)

//we can use increment operator
brandonObj.age++;
// console.log(brandonObj.age)//28

//add new key value pair
// brandonObj.favColor = 'red';
brandonObj["favColor"] = "red";
// console.log(brandonObj)

//check if value exists in a object
//check if name exits in our object
//key without a value, is going to return undefined
if (brandonObj.name !== undefined) {
  // console.log("value exists!");
}

//check if key exists
//preferred method to check if key exists in obj
//if(nameOfKey in objectToCheck)
// if('name' in brandonObj) console.log('key exists!')


//delete a key value pair from in obj
// console.log(brandonObj);
// //we use the delete key word, followed my the key/value pair
// delete brandonObj['location'].city
// console.log(brandonObj)//no age!

let favbands = brandonObj.favoriteBands;
// console.log(favbands) ["Joyce manor", "neck deep", "idles"],
//for of loop will not work on an object!
//for of loop will grab all the values from an array
for(let favBand of favbands) {
  // console.log(favBand)
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


//for in loop!
//if used on object, will grab the keys
//if used on array, will grab the indexes
for(let key in show) {
  // console.log(show)
  // console.log('keys', key);
  // console.log('values', show[key]);
}


//Object.keys()
//grab all the keys of an object
//and it returns in array
// let keyArr = Object.keys(show);
// // console.log(keyArr);//[ 'name', 'series', 'captains' ]
// for(let key of keyArr) {
//   console.log('key',key)
//   console.log('value',show[key])
// }


//Object.values();
//grab all the values in object
//return them in a array
let valueArr = Object.values(show);
console.log(valueArr)

//Object.entries
//is going to return an array of nested arrays with the key as the first element, and the value as the second
let entryEntry = Object.entries(show);
console.log(entryEntry)
