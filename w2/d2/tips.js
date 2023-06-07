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

// tips for obj!
// iterating with objects
// first thing to keep in mind, you cant loop through an object, they are not iterable, they have no order
// console.log the data type before you try to loop
// if its in object, you cant use a loop
// if you want all the keys and values what do you, first make sure the variable is an object
// you have two options, you can use
// !for in or Object.keys() and loop through the keys
// the goal is to get the keys, so you can get the values
// if using object just use for in
for(let key in obj) {
  // console.log('key - ', key);
  let value = obj[key];// using key as a variable to dynamically key into object to get value
  // let wontWork = obj.key;// we will be keying to the object , looking for a key of 'key',
  // console.log(wontWork)
  // console.log('value - ', value);
};

// another way
let keysArr = Object.keys(obj);
//[
//   'name',
//   'age',
//   'softwareEngineer',
//   'favoriteBands',
//   'location',
//   'sayHello'
// ]
// console.log(keysArr);
for(let i = 0; i < keysArr.length;i++) {
  let key = keysArr[i];
  console.log('key', key);// each time we iterate thoguh the ARRAY we get one of the keys
  //we can use that key to key into the object to get the value
  let value = obj[key];// we dont have to loop through object to key into the object
  console.log('value - ', value);
};

// use object.values when you dont need the keys but want to skip the logic of getting all the keys




// dot vs bracket notation
// square brackets with variables
// dot notation when you know the key wont change between objects



// for in vs for of
