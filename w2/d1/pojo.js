/*

  What is an Object?
   * Object is a value in memory which is referenced by an identifier
   * Objects can be seen as a collection of properties
    ** Property: An attribute, quality, characteristic
   * Object properties are equivalent to key-value pairs
    ** keys are either strings or symbols
    ** values can be any type
   * Most diverse and widely used data type

  Why are objects so useful?
    * Great for grouping and storing information
    * mutable
    * o(1) access time
      ** Thats fast! - Well learn why in mod 2
    * Used to create other data types
      ** linked list
      ** graphs
      ** arrays
      ** sets
      ** function


  Objects are great for grouping related data together

  * Lets create some person objects

  What are some properties/keys would a person have?
    * name
    * age
    * occupation
    * hair-color
    * sense of humor
    * blood type
    * location
    * favorite bands

  * { key: value }
    key: value
    name: 'brandon'
    age: 27
    occupation: 'swe'
    hair-color: 'brown'
    location: { city: 'Tampa', state: 'florida'}
    favBands: ['neck deep', 'idles', 'joyce manor']
*/

// create your own person object
// * object literal - {};
// * { key:value }
// * array literal  - [];

let brandon = {
  name: "brandon",
  age: 27,
  occupation: "SWE Instructor",
  senseOfHumour: true,
  location: { city: "Tampa", state: "Florida" },
  favBands: ["neck deep", "idles", "joyce manor"],
  sayHello: (name) => {
    return "Hello " + name;
  },
};

// lets access some properties on the brandon object
// * in order to access they value, we will need the key
// * can use either bracket or dot notation

// accessing name key
console.log(brandon);
console.log(brandon.name);// brandon
console.log(brandon['name'])// brandon


// access age key
console.log(brandon.age);// 27
console.log(brandon['age']);// 27


// access favorite bands key
console.log(brandon.favBands);// [ 'neck deep', 'idles', 'joyce manor' ]
console.log(brandon['favBands']);// [ 'neck deep', 'idles', 'joyce manor' ]
// * can index into array gain access to it
console.log(brandon['favBands'][0]);// neck deep


// access location key
console.log(brandon.location);//{ city: 'Tampa', state: 'Florida' }
console.log(brandon.location.city);//Tampa
console.log(brandon['location']['city']);//Tampa

// mix and match the way index
console.log(brandon.location['city']);// Tampa
console.log(brandon['location'].city);// Tampa

/*

  Accessing a method
    * A method is just a function that belongs to an object
    * the sayHello function belongs to the brandon object
    * the key is sayHello
    * the value is the function

  We can access the function just like any other key:value pair

*/

console.log(brandon.sayHello);// [Function: sayHello]

console.log(brandon.sayHello());// Hello undefined

console.log(brandon.sayHello('maica'));// Hello maica

console.log(brandon['sayHello']('charles'))// Hello charles


// * we can use bracket notation on methods weve been using
let numbers = [1,2,3];
numbers.push(4);
numbers['push'](5);
// console.log(numbers);// [ 1, 2, 3, 4, 5 ]
// console['log'](numbers);//[ 1, 2, 3, 4, 5 ]
