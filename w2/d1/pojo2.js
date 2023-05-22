

/*
      POJOS Continued

      Looping with arrays vs objects

      For in - will grab the indexes of an array and the keys of an objects
        * for in can be used to get the index of arrays then index into the array
        * for in can be used to get the key of an object, to then get the value at that key

      For of - will grab the values of an array and will not work on an object
        * cannot be used on an object, will throw error
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
let bandsArray = obj.favoriteBands
// console.log(bandsArray);

//for of loop!
// will not work on objects
// work on array, grabs the value
// let band = bandsArray[i];
// cannot get indexes
for(let band of bandsArray) {
  // console.log(band);
}
/*
Joyce Manor
Neck Deep
Idles
*/

// for in
// works on array and object
// used on array wil grab indexes
// use index to get the value
// console.log(bandsArray);//[ 'Joyce Manor', 'Neck Deep', 'Idles' ]
for(let index in bandsArray) {
    // console.log('i',index);
    // console.log('value', bandsArray[index]);
};

// iterating with objects
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

// standard looping does not work on objects
// but we have other ways, we can use for in, entries, values, keys
// cant loop through in objects, because its unordered
// console.log(show.length);//undefined
// for(let i = 0; i < show.length; i++){
//   console.log(show[i]);
// }

// if we wanted to gain access the keys, to get the values
// we could use a for in
for(let keyTwo in show) {
  // console.log('keyTwo', keyTwo);
  //because we have the keyTwo as we iterate, we can dynamically keyTwo into the object using bracket notation
  // console.log(show.keyTwo); //dont want to use this it will look for keyTwo of keyTwo
  console.log('value', show[keyTwo]);//this works!
};


// cannot use a for of on a object
// TypeError: show is not iterable
// for(let value of show){
//   console.log(value);
// }

// other ways to get keys/values
// return an array of keys
let keyArray = Object.keys(show);
// console.log(keyArray);//[ 'name', 'series', 'captains' ]

//because we have the keys, we could use this to get the value
for(let key of keyArray) {//iterating of array of keys
  // console.log('key',key);
  // console.log('value',show[key]);//key into object
};

// getting all values
// return array of values!
let valuesArray = Object.values(show);
// console.log(valuesArray);

// get both keys and values
// store them in a 2d array
// key at index 1, value at index 2, each key:value pair in own sub arr
let entriesArray = Object.entries(show);
// console.log(entriesArray);
