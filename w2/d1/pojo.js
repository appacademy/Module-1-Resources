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


