/*


  Objects! - POJO's plain old javascript objects
  - delineated by {} - object literal
  - key - value pairs obj = { key: value }
  - objects mutable because they are reference data types
  - they're unordered
  - keys are usually strings
  - values - can be any data type: function, obj, array, number, boolean, string
  - in order to access the value, we need the key

*/

//lets take a look at array
//indexes -  0 1 2
//value   -  c a t
let arr = ["c", "a", "t"];
// console.log(arr)
//we know we can access to the element by using the index like so
// console.log(arr[0]);// c
// console.log(arr[1]);// a
// console.log(arr[2]);// t

//objects are very similar to array, but how we index them is a little different, we have more flexibility
//instead of being limited to just indexes(numbers), we can uses strings, numbers, symbols

//lets make an object
//due note - numbers as keys will be type casted into a string
//key:value pairs separated by commas
let catObj = { 0: `c`, 1: "a", 2: "t"};
// console.log(catObj);
// //we can access the values by using the key
// console.log(catObj[0]);// c
// console.log(catObj[1]);// a
// console.log(catObj[2]);// t

//let obj = { key: value }
//brandon object
let obj = {
  name: 'brandon',
  age: 27,
  softwareEngineer: true,
  favBands: ['joyce manor', 'neck deep', 'idles'],
  location: {
    city: 'tampa',
    state: 'florida'
  },
  sayHello: () => {
    return 'hello';
  },
}
// console.log(obj.sayHello())
//IF WE WANT TO ACCESS THE VALUE WE NEED THE KEYS!
//KEY UNLOCKS THE VALUE

//two ways to access variables in a object
//dot notation vs bracket notation


//dot notation
//easier to read
//cannot use variable a as a key
//will key into whatever the string is after the dot, not the variable

// //access name
// console.log(obj.name);//brandon
// console.log(obj.age);//27

// //bracket notation
// //can use variables, values in square brackets will resolve before it tries to key into the object
// console.log(obj['name']);//brandon
// console.log(obj['age']);//27

//you can passs the key as a string directly
//or a variable that will resolve to a string

//can use a variable with bracket notation
let variable = 'age';
//hey whatever is inside of the square brackets, first resolve then use that as they key
//so variable resolves to the string 'name'
//so were just saying obj['name']

// console.log(obj[variable]);//brandon

//if we tried the same thing with dot notation
//we get undefined, because we are trying to key into our object, using the key variable
//but the key variable does not exists
// console.log(obj.variable);//undefined
//we look fot the key of whatever is after the dot, in this care the literal string variable

//evaluate the code inside the square brackets which is just the name string
//console.log(obj[variable])//brandon
//same as obj['name'] because the variable holds the string name


//does not work with dot notation
//i want to key into the obj, using variable as a key
//the variable key does not exists in our object, therefore we get undefined
// console.log(obj.variable);//undefined


//access nested data
// console.log(obj.location['city']);// tampa
// console.log(obj['location'].city);// tampa
// console.log(obj.location.city);// tampa
// console.log(obj['location']['city']); //tampa

//access fav bands index 0
// console.log(obj.favBands[0]);


///EDIT A OBJECT
//Change a key/value pair
//change the name
//use the assignment operator - =

obj.name = 'krandon';
// console.log(obj.name);
obj['name'] = 'brandon';
// console.log(obj)

// console.log(obj.age) 27
obj.age++;
// console.log(obj.age);//28

//ADD NEW KEY/VALUE PAIR
//very similar to editing a key/value pair in a obj
//syntax is identical
//if the when trying to access a key-value pair, if that key does not exists, a key - value pair will be made

obj.name = 'new value';//key already exists so it overwrite the current value

//syntax to add a key-value pair to object
obj.favColor = 'red';//key does not exists therefore create an entry
// console.log(obj)
obj['favColor'] = 'blue'
// console.log(obj)

//change the location.city to brooksville
obj.location.city = 'brooksville';

obj['location']['city'] = 'orlando'
// console.log(obj)

// check if value exists in a obj
// were checking if after keying into obj.name does not result in undefined, console.log
// if(obj.car !== undefined) console.log('value exists');

// check if key exists
// if('name' in obj) console.log('key exists');



// console.log(obj.favBands);//[ 'joyce manor', 'neck deep', 'idles' ]
let arr2 = obj.favBands;

//for of
//will not work on objects!!!
//it will iterate one by one starting from the first element up to the length of the array under the hood
//when use a for of loop on an array - it grabs all the values

//for(let i = 0; i < arr2.length; i++) {
//   let band = arr2[i];
// }

// for(let band of arr2) {
//   // console.log(band);
//   /*
// joyce manor
// neck deep
// idles
//   */
// }

//cannot use for of on an object
//TypeError: obj is not iterable
// for(let key of obj) {
//   console.log(key);
// }


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


//for in
//iterate through objects
//if used on object, will grab the keys
//if used on array, will grab the indexes
//this for in loop will iterate through every key in the object
//let variable will be the key in the object, key can be anything
for(let key in show) {
  // console.log('key - ', key);
  // //because we have access to all the keys, we can get the value using the key
  // console.log('value - ',show[key]);//key into the show object, using the current key variable and print for the value

  // console.log(show.key);//not dynamic, keying into key string each time, always undefined
}


//another way to access values
//either this or the approach above is fine
//getting all keys!
//Object.keys() returns an array of keys
// console.log(show)

let keysArray = Object.keys(show);
// console.log(keysArray); //[ 'name', 'series', 'captains' ]

for(let i = 0; i < keysArray.length; i++) {
  let key = keysArray[i];
  // console.log('key - ', key)//if we have the key we can gain access the value
  // console.log('value - ', show[key]);
}

//get all values
//returns an array of values
let valuesArr = Object.values(show);
// console.log(valuesArr)

//get all entries
//returns a 2d array of key value pairs, where the first index in the sub arr is the key, and the 2nd index is the value

let entriesArr = Object.entries(show);
// console.log(entriesArr);
