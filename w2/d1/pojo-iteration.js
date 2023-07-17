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
console.log(bandsArr); //[ 'Joyce Manor', 'Neck Deep', 'Idles' ]

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
  console.log('key', key);
  console.log('value', show[key]);
}

// Dont use for in on arrays/strings
