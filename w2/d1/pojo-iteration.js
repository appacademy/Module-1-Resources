/*


  Looping with objects vs arrays

*/


let brandon = {
  name: "brandon",
  age: 27,
  softwareEngineer: true,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "tampa",
    state: "Florida",
  },
  sayHello: function (param) {
    return "Hello " + param;
  },
};


// Looping through arrays

let bandsArr = brandon.favoriteBands;
// console.log(bandsArr); //[ 'Joyce Manor', 'Neck Deep', 'Idles' ]

for(let i = 0; i < bandsArr.length; i++) {
  // console.log(bandsArr[i]);
}


// For of
// Simpler and shorter way to write a loop
// Wont have access to index
// use for of when you need quick way to create loop where you dont need the index

for(let band of bandsArr) {
  // console.log(band);

}


// ! Dont use for of on an object
// TypeError: brandon is not iterable
// objects are not ordered, they are not iterable
// for(let ele of brandon) {
//   // console.log(ele); wont work
// }


// Looping through objects
let show = {
  name: "Star Trek",
  series: ["TOS", "TNG", "DS9", "VOY"],
  captains: {
    TOS: "Kirk",
    TNG: "Picard",
    DS9: "Sisko",
    VOY: "Janeway",
  },
};


// for in
// when used on an object, will grab the keys
// when used on an array, will grab the indexes
// ! not common practice to use for in with arrays/strings

// were gonna use the for in loop on the show object
// well get all the keys, and be able to use tho keys to get the values

for(let key in show) {
  // console.log('key', key);
  // console.log('value', show[key]);
}

// can name variable after let anything, its bananable
// for(let banana in show) {
//   console.log('banana ', banana);
//   console.log('value', show[banana]);
// }


// ! Dont use for in on arrays/strings

// Other ways to get keys and values
// built in methods

// get all the keys
// returns an array of keys
let keysArr = Object.keys(show);
// console.log(keysArr); //[ 'name', 'series', 'captains' ]

// now that we have an array of keys
// we can iterate through this array to get the values
for(let i = 0; i < keysArr.length; i++){
  let key = keysArr[i];
  // console.log('key', key);
  // console.log('value', show[key]);
}


// get all the values
let valuesArr = Object.values(show);
// console.log(valuesArr);

// get all entries
// returns a matrix with nested arrays, with the key as the first index
// the value as the second index
let entryArr = Object.entries(show);
console.log(entryArr);
