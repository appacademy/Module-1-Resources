/*



  Objects!
  - has a key value pair -> { key: value }
  - unordered
  - a data structure that stores other data types
  - mutable!
  - Objects gives us a way of creating collection of values that can be accessed with a given key
  - you'll need the key to get the value
  - {} - object literal
  - for the most part, keys are strings

*/

//arrays are accessed by keeping into indexes
// each index corresponds to a value at that index
//index - 0 1 2
//value - c a t
let arr = ["c", "a", "t"];
// console.log(arr[0]);//c
// console.log(arr[1]);//a
// console.log(arr[2]);//t
//in arrays you can think of the index like the key

//our objects key will not be limited to a position and a index
//lets talk about objects!

//objects are similar to arrays
//structure -> let obj = { key1: value1, key2: value2 }; that each key-value pair is separated by commas
let catObj = { 0: "c", 1: "a", 2: "t" };
//we can access out catObj in a similar way to arrays
// console.log(catObj);//{ '0': 'c', '1': 'a', '2': 't' }
//that the keys defined as number were typecasts/type coercion into strings
//we want to access values of a object, we need the key
// console.log(catObj[0]);//c
// console.log(catObj[1]);//a
// console.log(catObj[2]);//t



//let obj = { key: value };
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
    return 'hello'
  },
}

//if we want to access the value, we need the key!!!!


//Two ways to access variables in objects


//dot notation
//easier to read, quicker to write
//cannot use variables as a key when trying to key into an object using dot notation
//whatever string is after the . will be the key used to key into the object
//for example obj.hello
//hello is the key used to key into the object

//access name
//provide the key
// console.log(obj.name);//brandon
// console.log(obj.age);//27
// console.log(obj.sayHello());//hello


//bracket notation
//we are able to dynamically gain access to our objects
//can use variables, values in square brackets will resolve before trying to key into the object
// console.log(obj['name']);//brandon
// console.log(obj['age']);//27

//can use variable with bracket
let key = 'name';
//know quotes, were passing a variable
//that variable has to resolve/evaluate before we try to key into the object
//the name variable has to resolve, what is name hold?
//the string of name
//obj[name] ? key= 'name' obj['name'];
// console.log(obj[key]);//brandon

//code below will break because there is no name variable
// console.log(obj[name]);

let number = 'age';
// console.log(obj[number]);//27

//this does not work with dot notation
// console.log(obj.number);//undefined
// console.log(obj.age);//
//because were telling js not to key into age, but to key into number
//dot notation will not evaluate the variable and take whatever string is after the dot
//there is not a key of number in  our object, so we get undefined

//access nested object
//access city
//can mix and match?
// console.log(obj.location);//{ city: 'tampa', state: 'florida' }
// console.log(obj.location.city);//tampa
// console.log(obj['location'].city);//tampa
// console.log(obj.location['city']);//tampa

// console.log(obj.favBands);//[ 'joyce manor', 'neck deep', 'idles' ]
// console.log(obj.favBands.length)//3


//edit a object

//change key/value pair
//change name
//in order to change a key value pair
//a value
// you just provide the key, and use the assignment operator - =
// obj.name = 'krandon!!!';
// obj['name'] = 'krandon!!!';
// console.log(obj);

//can increment age
// console.log(obj.age)
obj.age++;
// console.log(obj.age);//28

//only way to change the key, to make a new key and point the new key at the old value, delete the old key


//create a new entry in the object
//same syntax as changing a key/value pair
// if you try to add a key value pair that already exists, it will overwrite that key/value pair and take the second, but, BUT if it does not exists, it will create a entry in the object

//a key value pair of favColor
obj.favColor = 'red';
// console.log(obj);//so if the key/value pair doesnt exists add it, which it doesnt, so we did, create a pair in our object

obj.favColor = 'blue';
// console.log(obj);//so if the key/value pair doesnt exists add it, if it does, overwrite the current value

// console.log(obj.favBands);//[ 'joyce manor', 'neck deep', 'idles' ]
// let bands = obj.favBands
// console.log(bands)

//add to a nested object
// console.log(obj.location);
obj.location.city = 'brooksville';
obj.location.country = 'USA';
// console.log(obj);


//check if value exists in a object
//check name key has a value
// if(obj.location.city !== undefined) //console.log('value is there');


//check if key exists
//check if name key exists
// if('name' in obj) //console.log('key exists');//console.log('key is there');


//iterating through arr in obj
let newArr = obj.favBands;
// console.log(newArr)

for(let i = 0; i < newArr.length; i++) {
  let band = newArr[i];
  // console.log(newArr[i]);
}

//for of loop!
//will not on object
//works on array
//think of let band as let band = newArr[i]
//band can be any name
//i++  happens under the hood
for(let band of newArr) {
  // console.log(band)
}

//cant use for of objects
//TypeError: obj is not iterable
// for(let ele of obj) {
//   // console.log(ele)
// }

//For in loop!
//work on objects and arrays
//when a for in loop is used on in array, it grabs the indexes
for(let index in obj.favBands) {
  // console.log(index);
  // console.log(obj.favBands[index])
}
//0
//1
//2


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
//if used obj, will grab the keys
//name
// series
// captains
//this grabs all the keys, we can use the key to get the value
for(let key in show) {
  // console.log('key', key);
  // console.log('value', show[key]);//bracket notation! - reason why its useful, can use variables, dynamically change
  // console.log(show.key);//undefined
}

// for(let ele of show) {
//   //this wont work//TypeError: show is not iterable
// }


//getting all the keys
//object.keys - returns an array of keys
let keyArr = Object.keys(show);
// console.log(keyArr);
//now that we have an array of keys, we can use this, to get the values

for(let key of keyArr) {
  // console.log(key);
  // console.log('value',show[key]);
}

// console.log(show['captains']);
// console.log(Object.keys(show.captains));

for(let key of Object.keys(show.captains)) {
  // console.log(show.captains[key]);
}

//Object.values
//return an array of all the values
let valuesArr = Object.values(show);
// console.log(valuesArr);

//Object.entries
// return 2d array [ [key, value],[key, value],[key, value] ]
let entryArr = Object.entries(show)
console.log(entryArr);


//show delete!
//deletes key value pair from an object
//lets delete my age
//if you wanted to delete key/rename it
console.log(obj);
obj.age1 = obj.age;
delete obj.age;
console.log(obj);
