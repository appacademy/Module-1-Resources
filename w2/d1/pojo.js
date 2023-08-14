/*



  POJO's - Plain old javascript objects!

  What is an object?
    * Object is a value in memory which is reference by an identifier
    * Objects can be seen as a collection of properties/methods
      * Property: An attribute, quality, or characteristic of something
      * Method: An Action to perform, a function
    * Object properties/methods are equivalent to key-value pairs
      * keys are either string or symbols
      * values can by any type
    * Most diverse and widely used data type

  Why are objects so useful!
    * O(1) access time
      * Thats fast!
    * Used to create other data types
      * linked list
      * graphs
      * arrays
      * sets

  Object are great at grouping related data together

  * Lets create some people objects

  What are some properties/keys a person would have?
    * name
    * eyeColor
    * age
    * height
    * isFunny
    * location
    * favorite bands

    key - value
    name: brandon
    eyeColor: hazel
    age: 27
    height: 5'11
    isFunny: true
    location: {city: 'tampa', state: 'Florida }
    favoriteBands: ['joyce manor', 'neck deep', 'idles']

*/

// array literal - []
// template literal - ``
// object literal - {}

// create your own person object
// * object literal - {}
// key:value,
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

// lets access some properties of the brandon object
// * in order to access the value, we will need the key
// * use either bracket or dot notation

// * access name key
console.log(brandonObj.name); // brandon
console.log(brandonObj["name"]); // brandon

// * access age key
console.log(brandonObj.age); // 27
console.log(brandonObj["age"]); // 27

// * access favBands
console.log(brandonObj.favBands); // [ 'joyce manor', 'neck deep', 'idles' ]
console.log(brandonObj["favBands"]); // [ 'joyce manor', 'neck deep', 'idles' ]

// * access location
console.log(brandonObj.location); // { state: 'florida', city: 'tampa' }
console.log(brandonObj["location"]); // { state: 'florida', city: 'tampa' }

// * access state - access nested objects
// * you just need to know the key
console.log(brandonObj.location.state); // florida
console.log(brandonObj["location"]["state"]); // florida

// * can you mix and match
// * this works no problem
console.log(brandonObj.location["state"]); // florida
console.log(brandonObj["location"].state); // florida

/*

  Accessing a method
    * A method is just a function that belongs to an object
    * the sayHello function belongs to the brandon object
    * the key is sayHello
    * the value is the function itself

  We can access the function just like any other key:value pair

*/

// * Can see the function object
console.log(brandonObj.sayHello); // [Function: sayHello]

// * invoke the function
console.log(brandonObj.sayHello("anthony")); // Hello anthony

// * also works
console.log(brandonObj["sayHello"]("anthony")); // Hello anthony

// * we can use bracket notation on methods weve been using
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [ 1, 2, 3, 4 ]
numbers["push"](5);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

console.log("=============");
/*

  Dot notation
    * Easier to read and write
    ! Cannot use variable as keys
      * Dot notation will use the string after the dot as the key
    ! Limited on what we can key into
      * example we cannot key into these using dot notation
        - object.first key - note the space
        - object.1key - note the number

  Bracket notation
    * You can use variables
    * variables inside brackets are first evaluated then used to key into the object
      - let variable = 'name'
        let object = { name:'brandon' };

        console.log(object[variable]);// brandon
        console.log(variable);// 'name'
        console.log(object['name']);// brandon
    * can be used to key into objects that dot notation cannot
        - object['first key']
        - object['1key']

*/


let cat1 = {
  name: 'pumpkin',
  age: 3,
  color: 'orange',
  '1key': null,
  'is cute': true,
};


console.log(cat1);

// dot notation
// * cannot use variable as a key
let variable = 'age';
console.log(cat1.variable);// undefined
// *  JS trying to find a key of variable in the cat1 object, it does not exists

// Bracket
console.log(cat1[variable]);// pumpkin
console.log(variable);// name
console.log(cat1['name'])// pumpkin
// * evaluates expression first then uses the result to key into the object

// Dot notation cannot access certain keys
// ! wont work! Will throw error
// console.log(cat1.1key);
// console.log(cat1.is cute);

// will work!
console.log(cat1['1key']);
console.log(cat1['is cute']);
// *  JS gets confused with the spaces and numbers

/*

  Takeaways

  When to use which

  Dot notation
    * When you know what youre going to key into
    * quicker to write

  Bracket notation
    * Dealing with variables
    * Dealing with weird key names

  * Both can be used to access and assign key value pairs

*/
