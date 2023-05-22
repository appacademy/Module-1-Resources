/*
  ? What is an Object?
    - Object - gives us a way of creating collections of values that can be accessed with a key!
    - Data structure, similar to an array, because an array is an object!
    - delineated by: {} object has key:value pairs { key:value }
    - unordered
    - can store other data types
      - other objects
      - arrays
      - numbers
      - strings
      - and more!
    - keys are always strings, value can be anything!
    - reference data type
    - mutable - can be changed!
*/

// Array!
// arrays are accessed by keying into an index
// each index corresponds to a value
// indexes - 0 1 2 4
// values  - c a t s
let arr = ["c", "a", "t"];

// we are keying into the array at index 0 to get the value c
// we are using the index like a key
// console.log(arr[0]);//c
// console.log(arr[1]);//a
// console.log(arr[2]);//t
// console.log(arr[3]);//undefined

// Object!
// structure of an obj - { key1: value1, key2: value2 } <- obj with two key:value pairs
// object literal - {};

// let exObj = { 'key':'value' };
let catObj = { 0: "c", 1: "a", 2: "t" };

// in order to gain access to a value in a object, we must key into it using the key
// so we need the key to get the value
// key will be a string, if use a number, it will typecast(change the type from number to string) the number into a string

//let access values using the key!
// console.log(catObj[0], catObj[1], catObj[2]);//c a t

// console.log(catObj);//{ '0': 'c', '1': 'a', '2': 't' } all they keys are strings now!
// console.log(catObj['0'], catObj['1'], catObj['2']);//c a t

// practical object
// values can be objects, arrays, strings, booleans, etc
// key almost always strings,if not type cast it into a string
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
// console.log(obj)
// call our say hello
// console.log('calling a method',obj.sayHello());//hello brandon

// if we want to access an objects value, we must key into using the key
// key unlocks the value

// two ways to access variables!
// dot notation vs bracket notation

// dot notation
// easier to read
// cannot use variables as keys
// if you know the key, use dot notation
// will key into whatever the string is after the dot, not the value the variable holds

// access name using dot notation
// console.log(obj.name);
// console.log(obj.age)
//there is no key of lastName
// if you key into something that doesn't exists you get undefined
// console.log(obj.lastName);//undefined
let myName = obj.name; // can store values in variables
// console.log(myName);//Brandon

// bracket notation
// can use variables as keys, expression in square brackets will evaluate before trying to key into obj
// console.log(obj['name']);//Brandon
// console.log(obj['age']);//27
// // lastName key does not exists within obj, so we get undefined
// console.log(obj['lastName']);//undefined

// here is where bracket notation differs
// the main reason you use it!
// allows us to access dynamically our objects as we iterate

//can use variable as a key, lets use name
let variable = "name";

// the variable must evaluate before we try and key into the object
// obj['name']
// variable is resolving to the value it holds -> 'name'
// console.log(obj[variable]);//Brandon

// use bracket notation to create a dynamic variable that will change what we use as our key to access a value as we iterate
// let testArr = [true, false, true];
// for(let i = 0; i < testArr.length; i++){
//   console.log(testArr[i],i);
// }

// we cant do this dot notation
// console.log(obj.variable);//undefined

//call function using bracket
// console.log(obj['sayHello']());//[Function: sayHello]

// access nested objects
// access city
// can mix and match bracket vs dot
// console.log('look here', obj.location.city);//Tampa
// console.log(obj['location'].city);//Tampa
// console.log(obj['location']['city']);//Tampa

// what will these print?
// console.log(obj.favoriteBands); //['Joyce Manor', 'Neck Deep', 'Idles']
// console.log(obj.lcation); //undefined
// console.log(obj['age']); // 27
// //why does like 137 throw an error?
// // undefined.state
// console.log(obj.city.state); // throws an error
// let ex = 'age';
// // key of .ex does not exist
// console.log(obj.ex); // undefined
// // because we use [], ex will resolve to age before keying into it
// console.log(obj[ex]); // 27

// console.log(obj.sayHello('anabel'))

// ! EDIT A key/value

// change key/value pairs
// change name

// were saying hey, in the obj named obj, key into using the key name, and use the assignment operator =, to reassign the value to brandon
// provide object, key, =, and new value
obj.name = "Krandon";
obj["name"] = "Brandon";

// change nested obj
// can use bracket or dot
obj['location'].city = 'Brooksville';

//can increment age
obj.age++;
console.log(obj.age);//28

// console.log(obj);

// similar to arrays
// let arr3 = [1,2,3];
// arr3[0] = 100;
// console.log(arr3)


// ! CREATE A KEY/VALUE PAIR
// if you rename or edit a key, it will take last the instance

// add new key/value pair
// if a key doesn't exists it will create it(add to the object), if it does it will overwrite it

//so if key doesnt exists, add the key value pair
obj.favColor = 'Red';
console.log(obj);// now have a key value pair added

obj['favGame'] = 'pokemon';
console.log(obj);

//if the key does exists, overwrite the key/value pair
obj.favColor = 'Blue';
console.log(obj);

// adding to nested object
// console.log(obj.location);
obj.location.country = 'USA';
// console.log(obj);

//check if VALUE exists in a obj
// check if name key has a value
if(obj.name !== undefined) console.log('value exists')

// check if KEY exists
// check if name key exists
if('name' in obj) console.log('key exists')

// change a key's name
// point the new key at the old value,delete the old key,
obj.newName = obj.name;
delete obj.name;
console.log(obj);

// ! DELETE A KEY/VALUE
// delete key/value pair in object
// delete keyword followed by object.key
delete obj.age;
console.log(obj);


