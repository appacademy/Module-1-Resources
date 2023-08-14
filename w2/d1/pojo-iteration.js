/*



  Iterating through objects
    * Objects store unordered key:value pairs
      ! Objects do not have order
    * Cannot rely on indices to access values
    * We will have to use different ways to access keys and values in an object

    Well be covering
      * for in
      * Object.values
      * Object.keys
      * Object.entries

*/


// A people object with nested person objects
let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "anthony",
  },
  person3: {
    name: "anabel",
  },
  person4: {
    name: "charles",
  },
  person5: {
    name: "trevor",
  },
};


// * access a person
console.log(people.person1);//{ name: 'brandon' }
console.log(people.person2);// { name: 'anthony' }
console.log(people.person3);// { name: 'anabel' }
console.log(people.person4);// { name: 'charles' }
// can use bracket
console.log(people['person2']);// { name: 'anthony' }


/*

  For in loop
  * Can be used to get all the keys
  * the variable after the let is bananable
    * meaning that you can name it anything
    * it will be the variable used to represent the key
  * We can use this key variable to 'key' into the object to get the value

  ! Dont use for in loop with arrays/strings
  ! Use only on objects

*/
console.log(people);
// * for in loop
// * key is bananable variable
for(let key in people) {
  console.log('key: ', key);// person1 | person2 | person3
  // console.log('value: ', people[key]);// <- this will work!
  // console.log('value: ', people.key);// <- cannot use dot notation to key into a variable

  // store in for variable for readability
  let value = people[key];
  console.log('value: ', value);
  console.log('name: ', value.name)
  let name = value.name;
  // console.log(name)
}

// * as we loop, the key changes; we can use the changing keys to get the values in the object

// console.log(people.person1.name);//
// console.log(people.person2.name);//
// console.log(people.person3.name);//
// console.log(people.person4.name);//

console.log('-==========-')

let brandonObj = {
  name: "brandon",
  eyeColor: "hazel",
  age: 27,
  height: '5"11',
  isFunny: true,
  location: { state: "florida", city: "tampa" },
  favBands: ["joyce manor", "neck deep", "idles"],
  sayHello: function (name) {
    return "Hello " + name;
  },
};


// * Example - for in
for(let key in brandonObj) {
  console.log('key: ',key);
  let value = brandonObj[key];
  console.log('value: ', value);
}


// Object.keys
// Returns an array of keys
let keysArray = Object.keys(brandonObj);
console.log('keyArray', keysArray);
/*
keyArray [
  'name',     'eyeColor',
  'age',      'height',
  'isFunny',  'location',
  'favBands', 'sayHello'
]
*/

// Now that we have all they keys; we can use this to get the values
// ? how could we use this array of keys to get the value
// console.log(keysArray[2])

for(let i = 0; i < keysArray.length; i++){
  let key = keysArray[i];
  // console.log('i:', i, 'key: ', key);
  // let value = brandonObj[key];
  // console.log('value: ', value);
}

// for of
// ! only use on arrays
// ! do not use on objects
// Know your data types!
for(let element of keysArray) {
  console.log('key: ',element);
  console.log('value: ',brandonObj[element]);
}


// * Object.values
// return an array of values
let valueArray = Object.values(brandonObj);
console.log(valueArray);


// * Object.entries
// * Return a 2d matrix of sub arrays with keys as the first index and values as the second index
let entriesObj = Object.entries(brandonObj);
console.log(entriesObj);
/*
[
  [ 'name', 'brandon' ],
  [ 'eyeColor', 'hazel' ],
  [ 'age', 27 ],
  [ 'height', '5"11' ],
  [ 'isFunny', true ],
  [ 'location', { state: 'florida', city: 'tampa' } ],
  [ 'favBands', [ 'joyce manor', 'neck deep', 'idles' ] ],
  [ 'sayHello', [Function: sayHello] ]
]


*/
