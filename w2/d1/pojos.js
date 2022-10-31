/*

// Objects!
//   What is an object?
//     - Objects or POJO give us a way of creating collections of values that can be accesed witha given key
//     - A set of keys and values
//     - A data structure delinated by {}
//     - keys are almost always strings
//     - can set any data type as a value, even functions!
//     - They do not have a guarantee order

// */

// //arrays are accessed by keying into an index
// //each index corresponds to a value at that index
// let arr = ["c", "a", "t"];
// // console.log(arr[0])//c

// //objects are similar
// //delinated by curley braces
// //can hold all sortss of data types
// //values can be any data type - object, number, array, string
// //key almost always a string

// let obj = {
//   name: "brandon",
//   age: 27,
//   softwareEnginner: true,
//   favoriteBands: ["Joyce Manor", "idles", "Neck deep"],
//   location: {
//     city: "Tampa",
//     state: "Florida",
//   },
//   sayHello: function () {
//     return "Hello";
//   },
//   bio: undefined,
// };

// //lets talk about assessing data in our objects
// //bracket notation vs dot notation

// //dot notation .
// //we cannot use variables as a key
// // console.log(obj.name)//brandon
// // console.log(obj.age)//27
// // console.log(obj.location.city)//Tampa

// //bracket notation []
// //can use variables
// // console.log(obj['name'])//brandon
// // console.log(obj['location']['city'])//Tampa

// let variable = "name";
// // console.log(obj[variable]); //brandon
// // // obj['name']

// // //key in to the literal string of variable, not what it evalues to
// // console.log(obj.variable); //undefined
// // console.log(obj.name); //brandon

// //changing key values pairs

// //change name brandon => krandon
// // let arr2 = [1,2,3];
// // arr2[0] = 6;
// // console.log(arr2)
// obj.name = "krandon";
// console.log(obj.name); //krandon

// //change a nested objects value
// //overwriting the value with a new value
// obj.location.city = "Brooksville";
// // console.log(obj.location.city)//Brooksville

// //increment numbers
// // obj.age++;
// console.log(obj.age); //27
// let num = 10;
// obj.age += num;
// //27 + 10 = 37
// console.log(obj.age);
// //add a new key value pair
// obj.favColor = "red";
// console.log(obj);

// obj.location.country = "USA";
// // console.log(obj)

// // //we wanted to call out method
// // console.log(obj.sayHello())//Hello

// // console.log(obj.favoriteBands[0]); //Joyce Manor

// //check if key exists in a obj
// console.log(obj.name);
// if (obj.name !== undefined) {
//   // console.log("its there");
// }
// // } else {
// //   obj.name = 'brandon'
// // }

// // console.log(obj.name)

// //for in
// if('name'in obj){
//   // console.log('key exists')
// }

// //delete a key/value pair from an object
// //use the delete key word
// let res = 'bio'
// delete obj[res];
// // console.log(obj);


// // ///iterate through nested arrays in obj
// // let array = obj.favoriteBands;
// // let listBands = (arr) => {
// //   //for of, grab the values at the index, not the index
// //   for(let band of arr) {
// //     console.log(band)
// //   }
// // }

// // listBands(array);


//Iterate through objects
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

//for in loop, which grabs keys
// console.log(show)
// for(let key in show) {
//   console.log('key',key)//name, series, captain
//   console.log('value',show[key]);
// }

//get all the keys of an obj
//Object.keys();
//returns an array of all the keys of an object
let keysArr = Object.keys(show);//
// console.log(keysArr)


//Object.values
//same as object.keys but it returns an array of values
let valsArr = Object.values(show);
console.log(valsArr);//

//Object.entries
//very similar to vals/keys, but it grabs both and store them an array as a pair
let entries = Object.entries(show);
// console.log('entries', entries)
