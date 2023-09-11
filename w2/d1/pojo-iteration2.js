// going back to the person object
let brandon = {
  name: "brandon",
  age: 27,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "Tampa",
    state: "Florida",
  },
  sayHello: function (name) {
    return "Hello " + name;
  },
};


// use for in loop
for(let key in brandon){
  // console.log('key:', key);

  // let value = brandon[key];
  // console.log('value: ', value);

  // // * cannot use dot notation with variables
  // console.log(brandon.key);//
  // ! there is no key of 'key' in the object

}


// object.keys
// return an array of keys
let keyArray = Object.keys(brandon);
// console.log(keyArray);//[ 'name', 'age', 'favoriteBands', 'location', 'sayHello' ];

// if we have an array of keys
// we just need to iterate through the array of keys
for(let i = 0; i < keyArray.length; i++){
  let key = keyArray[i];
  // console.log('key', key);
  // we can use this key to get the value
  // console.log(brandon);
  let value = brandon[key];
  // console.log('value:   ', value);
}


// Object.values
// * returns an array of values
let valueArray = Object.values(brandon);
// console.log(valueArray);


// Object.entries
// * return a 2d matrix with subArray with key as the first index and value as the second index


let entriesArray = Object.entries(brandon);
// console.log(entriesArray);
console.table(entriesArray);
