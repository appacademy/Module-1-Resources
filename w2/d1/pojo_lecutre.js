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

    Objects are great for grouping related data together!

    Lets create some people objects!

    What are some properties or KEYS a person would have?
    - name
    - age
    - location
    - favorite bands

    * Key : Value
    name : "Brandon"
    age : 100
    location: { city : "Tampa", state : "Florida" }

*/

// obj literal = {};
//array liter = [];

let brandon = {
    name : "Brandon",
    age : 100,
    location: { city : "Tampa", state : "Florida" },
    favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
    // object can also store functions!
    sayHello : function(name){
        return "Hello " + name
    }
}

// let arr = ['star', 'bell', 'fish']
// console.log(arr[1])

// lets access some properties of the brandon object
// * in order to access the value, we will need the key
// * can use either bracket or dot notation

console.log(brandon.name)
// //when using bracket notation, must a string
console.log(brandon["name"])

// access brandon's age
console.log(brandon.age) // 100
console.log(brandon["age"]) // 100

// access Brandon's fav bands
console.log(brandon.favoriteBands)
console.log(brandon[`favoriteBands`])

// access Brandon's location
console.log(brandon.location.city)

// mix and match notation
console.log(brandon.location.city)
console.log(brandon["location"]["city"])
console.log(brandon.location["state"])
console.log(brandon["location"].state)

/*

  Accessing a method
    * a method is just a function that belongs to an object
    * the sayHello function belongs the brandon object
    * the key is sayHello
    * the value is the function

    We can access the function just like any other key:value pair

*/

// can we see the function in the object?
console.log(brandon.sayHello)


//let run the function~!
console.log(brandon.sayHello("Riley"))


// we've been using object methods all along!
let numbers = [1,2,3];
numbers.push(4)
numbers["push"](5)
// console.log(numbers)

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
    *
      - let variable = 'name';
        let object = { name: 'brandon' };

        console.log(object[variable]);// brandon
        console.log(variable);// name
        console.log(object['name']);// brandon

    * can be used to key into objects that dot notation is not able to
      - object["first name"]
      - object["1key"]

*/

let variable = 'name';

let object = { name: 'brandon' };

        // console.log(object[variable]);// brandon
        // console.log(object.name)

        // using . notation on an object with a variable will not work
        // console.log(object.variable)
        // console.log(variable);// name
        // console.log(object['name']);// brandon


/*

  Assigning values in a object
  * You can assign the values using either notation
    ** object['key'] = value;
    ** object.key = value;

    let obj = {};

    obj["color"] = "blue";
    obj.shape = "circle"

    console.log(obj)
*/


// Assinging key:value pairs!

let car = {};

// assigning using dot notation
car.model = "challenger";
// console.log(car)

// assigning with bracket notation
car["year"] = "2016"
// console.log(car)


// assign using bracket notation with a variable
let variable1 = "make";
car[variable1] = "dodge"
// console.log(car) // { model: 'challenger', year: '2016', make: 'dodge' }


/*
  Reassigning
  * When assigning/reassigning;
    If the key:value pair exists in the object
     * the key:value pair will be over written
    If the key:value pair does not exists in the object
     * the key:value pair will be created
*/


// { model: 'challenger', year: '2016', make: 'dodge' }

// change the model to mustang
car.model = "mustang"
console.log(car) // { model: 'mustang', year: '2016', make: 'dodge' }

// reassign the year to 2024 using bracket notation
car["year"] = "2024"
console.log(car) 

// reassign the make
car.make = "ford"
// console.log(car)


/*

  Deleting a value
  * Use the delete operator
  * Just provide object and key
    ** key:value pair will be deleted

*/

// this is our car { model: 'mustang', year: '2024', make: 'ford' }
console.log("before delete :", car)


// delete operator followed by a object.key
delete car.make;

console.log("After delete :", car)
