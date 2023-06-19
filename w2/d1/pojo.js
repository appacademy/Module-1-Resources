/*



  What is an pojo? Plain old javascript object
  - data type that can hold collections of values that can accessed with a key
  - contains key:value pairs { key: values }
  - keys are strings
  - values can be any data type
  - You can nest objects within other objects/arrays
  - can store many data types
    - other objects
    - arrays
    - numbers
    - strings
    - and more!
    - Objects do not have order
    - have there own methods
    - can be accessed with [] or .
  -

*/

// Array!
// arrays are accessed by keying into an index
// each index corresponds to a value
// indexes - 0 1 2 3
// values  - c a t s
let arr = ["c", "a", "t", "s"];
console.log(arr[0]); //use 0 to get me the value at 0 which is c
console.log(arr[1]);
console.log(arr[2]);
//we are keying into the array at index to get the value

// Object
//  object literal - {};
// { key1: value1, key2: value2 } - key values pairs
// in order to gain access to a value in a object, we must key into using a the key
// we need the key to get the value
// key - is usually a string, if a string is not used, it will typecast into a string
// value - can be any data type
let catObj = { 0: "c", 1: "a", 2: "t", 3: "s" };
// console.log(catObj); //{ '0': 'c', '1': 'a', '2': 't', '3': 's' } - number keys typecasts into strings
// console.log(catObj['0']); //c
// console.log(catObj['1']); //a
// console.log(catObj[2]); //t
// console.log(catObj[0] + catObj[1] + catObj[2] + catObj[3]); //cats

// don't have to put parentheses around the keys as they will type casted into a string


//More practical object
// values can be objects, arrays, strings, booleans, etc
// key - strings or they will be typecasted into string
let obj = {
  name: 'brandon',
  age: 27,
  softwareEngineer: true,
  favoriteBands: ['Joyce Manor', 'Neck Deep', 'Idles'],
  location: {
    city: 'Tampa',
    state: 'Florida'
  },
  sayHello: (param) => 'Hello ' + param,

};

// console.log(obj)
// console.log(obj.sayHello);//[Function: sayHello]
// console.log(obj.sayHello('brandon'));//Hello brandon

// If we want to access an objects value, we must key into it using the key
// key unlocks the value


// Two ways to access variables
// dot notation vs bracket notation

//bracket notation
//so to use bracket notation you use just use square brackets on the objects of your choice providing a key
//ex: obj['key'];

//we can use bracket notion to key into our obj
//we just provide a key
// console.log(obj['name']);//brandon
// console.log(obj['age']);//27
// console.log(obj['location']);//{ city: 'Tampa', state: 'Florida' }
// console.log(obj['string']);///undefined

//note that we provide the string we want to use a key

// we can also, provide a variable
// That is the advantage of bracket notation
let variable = 'name';

// console.log(obj['name']);//brandon - works

// console.log('variable:', variable);//name
// console.log(obj[variable]);//brandon
//when we pass a variable using bracket notation, the variable will evaluates, then we will use what it evaluates too, to key into the object

let favBandsKey = 'favoriteBands'
// console.log(obj[favBandsKey]);//[ 'Joyce Manor', 'Neck Deep', 'Idles' ]

// use the string or a variable that holds the string to key into an object

let res2 = 'location';

// console.log(obj[res2]);//{ city: 'Tampa', state: 'Florida' }
let first = 'na'
let sec = 'me';
// console.log(obj[first + sec]);//brandon
//obj['name']


// bracket notation is good, when you want to be dyanmic and use a variable as your key

// if you know exactly what the key will be, and its not going to change, then use . dont notation.
// dot notation is just quicker to write
// easier to write

//provide an object, use the key to get the value
// console.log(obj.name);//brandon
// console.log(obj.age);//27
// console.log(obj.location);//{ city: 'Tampa', state: 'Florida' }

// ! we cannot use variables with dot notation
// were not going to evaluate the variable after dot notation like we do with bracket

let test = 'name';
// console.log(obj.test);//undefined
//when you use dot notation, you cannot use a variable as the key,
//because it will be used literally,
// this is the same as
// console.log(obj['test']);
// there is no test key in our object

//access nested object/data
// we can mix and match
// console.log(obj.location.city);//Tampa
// console.log(obj.location['city']);//Tampa
// console.log(obj['location']['city']);//Tampa
// console.log(obj['location'].city);//Tampa

// console.log(obj.favoriteBands[0][0]);

// ! Edit a object
//change key/value pair
//change name
//provide the object, use bracket or dot notation,
//then the assignment operator, then value youd like to assign
obj.name = 'krandon';
obj['name'] = 'BRANDON'
console.log(obj.name);//'BRANDON',

//change nested values
obj.location.city = 'Brooksville';
obj['location'].city = 'TAMPA'
console.log(obj.location.city);//'TAMPA',

//can increment age
obj.age++;
obj.age += 1
console.log(obj.age);//29

// obj.name = brandon;//ReferenceError: brandon is not defined
// ! Adding a key/value pair
// The syntax for adding and editing a key:value pair is the same
// if key doesnt exists then it will create it for you, if it does, then it will overwrite/edit the value

//js said hey is there a favColor key? Nope so lets make one and assign the value to be red
obj.favColor = 'red';
// console.log(obj)

//add to nested obj
obj['location'].country = 'USA';
// console.log(obj.location.country);//USA

//check if value exists in a obj
//check if name key has a value
console.log(obj.name);//BRANDON
// if(obj.name !== undefined) console.log('value exists')

//check if key exists
//check if name key exists
// if('name' in obj) console.log('key exists');//true

//! delete a key value pair
// delete an key/value pair in an obj
console.log(obj);
delete obj.age;// delete the key:value pair
console.log(obj.age);//undefined
//no object.age because we deleted it
