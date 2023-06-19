


/*

  Iterating with Objects

  Pojos continued

  Looping with arrays vs objects

  For in vs For of

  For In -
  * will grab indexes of an arrays and the keys of an objects
  * for in can be used to get the key of an object, then use that key to get the value

  For Of -
  * will grab the values of an array and will NOT work on object
  * because object is not an iterable, it will throw an error

*/

let obj = {
  name: "Brandon",
  age: 27,
  softwareEngineer: true,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "Tampa",
    state: "Florida",
  },
  sayHello: function (param) {
    return "hello " + param;
  },
};

// looping through an array
// console.log(obj.favoriteBands)
let favBandsArr = obj.favoriteBands;
// console.log(favBandsArr);

// for of loop!
// will not work on objects
// works on array
// for of will grab all the values
// let band = favBandsArr[i]; <- QOL so we dont have to write this out fully
for(let band of favBandsArr){
  // console.log(band);
};

//the same as this below
for(let i = 0; i < favBandsArr.length; i++) {
  let band = favBandsArr[i];
};

/*
Joyce Manor
Neck Deep
Idles
*/

//for in
// works on array and object
// used on array, will grab the indexes
// use index to get that value
// console.log(favBandsArr)
for(let i in favBandsArr) {
  // console.log('index',i);
  let value = favBandsArr[i];
  // console.log('value',value);
};


//looping through objects!

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
// if used on object, will grab the keys
// if used on array, will grab the indexes
// console.log(show.name)
for(let key in show) {
  console.log('key:', key);
  let value = show[key];
  console.log('value: ',value)
}

//for of
//cannot use a for of loop on an object
//you will get a type error
// you cant do this
// for(let ele of show) {
//   // console.log(ele);//TypeError: show is not iterable
// };


// other ways to get keys and values

//Object.keys
// Object.keys will return an array of all the keys

let keyArr = Object.keys(show);
console.log(keyArr);//[ 'name', 'series', 'captains' ];

//we have a an arrays of keys we can use this to get the values by iterating through the array
// for(let i = 0; i < Object.keys(show).length; i++){
for(let i = 0; i < keyArr.length; i++){
  let key = keyArr[i];
  // console.log('key',key);
  // console.log('value', show[key]);
}

let keys = Object.keys(show.captains);
for(let i = 0; i < keys.length; i++){
  // let key = keys[i];
  // console.log(key);
  // let value = show.captains[key];
  // console.log(value);
}

// somehow get the keys
//you can use for in or Object.keys
//if you use for in
//you can grab the key
//use the key to get the value

// if you use Object.keys
// you will get an array of keys
// you iterate through the array of keys
// use the key, to gain access to the value

//Object.values
// return an array of values
let valueArr = Object.values(show);
console.log(valueArr);
/*
[
  'Star Trek',
  [ 'TOS', 'TNG', 'DS9', 'VOY' ],
  { TOS: 'Kirk', TNG: 'Picard', DS9: 'Sisko', VOY: 'Janeway' }
]
*/


//Object.entries
// return a 2d array with key as subArr[0], value as subAarr[1]

let entries = Object.entries(show);
console.log(entries);
/*
[
  [ 'name', 'Star Trek' ],
  [ 'series', [ 'TOS', 'TNG', 'DS9', 'VOY' ] ],
  [
    'captains',
    { TOS: 'Kirk', TNG: 'Picard', DS9: 'Sisko', VOY: 'Janeway' }
  ]
]

*/
