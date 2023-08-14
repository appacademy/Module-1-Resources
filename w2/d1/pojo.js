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


// create your own person object
// * object literal - {}
let brandonObj = {
  name: 'brandon',
  eyeColor: 'hazel',
  age: 27,
  height: '5"11',
  isFunny: true,
  location: {state:'florida', city:'tampa'},
  favBands: ['joyce manor', 'neck deep', 'idles']
}
