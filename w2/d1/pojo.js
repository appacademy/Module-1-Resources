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
// * in order to access the value, we will need the key
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



/*

  Accessing a method
    * a method is just a function that belongs to an object
    * the sayHello function belongs the brandon object
    * the key is sayHello
    * the value is the function

    We can access the function just like any other key:value pair

*/

// * Can see the function object
console.log(brandon.sayHello); // [Function];

// * invoking the function
console.log(brandon.sayHello("Anthony")); // Hello Anthony
// * can do the same with bracket
console.log(brandon["sayHello"]("Anthony")); // Hello Anthony

// * we can use bracket notation on methods we've been using
let numbers = [1, 2, 3];
numbers.push(4);
numbers["push"](5);
console.log(numbers); // [1,2,3,4];

/*

  Whats the difference between bracket and dot notation?

  Dot Notation
    * Easier to read and write
    ! Cannot use variables as keys
    ! Limited on what we can key into
      * examples of what we cannot key into using dot notation:
        - object.first name
        - object.1key

  Bracket Notation
    * You can use variables
    * variables inside brackets are first evaluated then used to key into the object
      - let variable = 'name';
        let object = { name: 'brandon' };

        console.log(object[variable]);// brandon
        console.log(variable);// name
        console.log(object['name']);// brandon

    * can be used to key into objects that dot notation is not able to
      - object["first name"]
      - object["1key"]

*/
