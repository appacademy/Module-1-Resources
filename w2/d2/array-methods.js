/*

   Array Methods

   What are array methods?
    * Array methods are functions built-in to JavaScript
    * Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.
    * Allow us to perform commonly used calculations/functions
    * quality of life
    * array methods iterate under the hood to pass each element of an array to a callback function

   What is a callback function?
    * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

    ! We will learn more about callback function tomorrow
    * For now we are going to treat some of the implementation of array methods like a black box
      ** a black box is a device, system, or object which produces useful information without revealing any information about its internal working
    * Implementation of array methods are abstracted under the hood
      ** We do not need to explicitly provide a start, condition, and step
      ** It is implied you want to reach every element when using these array looping methods

   Array methods!
    * .forEach
    * .map
    * .filter
    * .reduce
    * .find
    * and many more!

/*
  Different ways to pass function as callbacks

  1. Anonymous Implicit Callback
    * Implicit
    * Preferred way
    (name) => name.includes('o')

  2. Anonymous Explicit Callback
    * Explicit
    * Uses return keyword + {}
      (name) => {
        return name.includes('o');
      }
  3. Anonymous Callback Function Keyword
    * Uses function keyword
    function(name) {
      return name.includes('o');
    }

*/



let animals = ["tiger", "lion", "hippo", "monkey"];

// forEach
function logsUpperCased(animals) {
  console.log(animals.toUpperCase());
}

// without using for each
for(let i = 0; i < animals.length; i++){
  let animal = animals[i];
  // console.log(animal);
  // logsUpperCased(animal);
};

// its passing every element in the array to the callback
// animals.forEach(logsUpperCased);

// animals.forEach((animal) => console.log(animal.toUpperCase()));

animals.forEach(function(animal){
  // console.log(animal.toUpperCase())
});


// ! cant return in forEach
