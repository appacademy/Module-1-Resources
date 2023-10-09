/*


  What is an Object?
  * Object is a value in memory which is referenced by an identifier
  * Objects can be seen as a collection of properties.
    ** Property: An attribute, quality, or characteristic of something
  * Object properties are equivalent to key-value pairs.
    ** Keys are either strings or symbols
    ** Values can be any type
  * Most Diverse and Widely used Data type

  Why are objects so useful?
  * O(1) access time
    ** Thats fast! - Well learn why in Module 2
  * Used to create other data types
    ** Linked List
    ** Graphs
    ** Arrays
    ** Sets

*/



/*

  Objects are great for grouping related data together

  * Lets creates some people objects!

  What are some properties/keys a person would have?
    * name
    * age
    * location
    * favorite bands

  * Key : Value
    name : 'brandon'
    age : 27
    favoriteBands : ["Joyce Manor", "Neck Deep", "Idles"]
    location : { city: "Tampa", state: "Florida" }

*/


// create our own object
// object literal - {}
// key: value,
let brandon = {
  name: 'brandon',
  age: 27,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: { city: "Tampa", state: "Florida" },
  sayHello: function(name) {
    return 'Hello ' + name;
  }
}


// lets access some properties of the brandon object
// * in order to access the key, we will need the value
// * can use either bracket or dot notation

// * accessing name key
console.log(brandon.name); // 'brandon'
console.log(brandon["name"]); // 'brandon'

// * accessing age key
console.log(brandon.age); // 27
console.log(brandon["age"]); // 27

// * accessing favorite bands key
console.log(brandon.favoriteBands); // ["Joyce Manor", "Neck Deep", "Idles"]
console.log(brandon["favoriteBands"]); // ["Joyce Manor", "Neck Deep", "Idles"]

// * accessing location key
console.log(brandon.location); // { city: "Tampa", state: "Florida" }
console.log(brandon["location"]); // { city: "Tampa", state: "Florida" }

// * accessing nested locations key
console.log(brandon.location); // { city: "Tampa", state: "Florida" }

// * can mix and match notations
console.log(brandon.location.city); // Tampa
console.log(brandon["location"]["city"]); // Tampa
console.log(brandon.location["state"]); // Florida
console.log(brandon["location"].state); // Florida
