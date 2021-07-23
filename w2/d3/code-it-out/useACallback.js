/* 
Instructions:

Write a callback called 'upper' that:
  1. Intakes an array
  2. Returns an array with all the elements, but uppercase

  Write a callback called 'lower' that:
  1. Intakes an array
  2. Returns an array with all the elements, but lowercase

Write a higher order function called printVals that: 
  1. Intakes two parameters 
    1. An object
    3. An optional callback
  3. If a callback is passed in
    1. Return the result of passing in an array of values from the obj to the cb
  4. Otherwise return an array of values from the obj
*/

let upper = function () {};
let lower = function () {};

let printVals = function (obj, cb) {};

let user = {
  name: "MylO",
  location: "ChIcaGo",
  favLibrary: "ReAct",
  favAnimal: "ElePhAnt",
};

console.log(upper(["YeS", "i", "DiD", "It", "!!!"])); // ['YES', 'I', 'DID', 'IT', '!!!']
console.log(lower(["YeS", "i", "DiD", "It", "!!!"])); // ['yes', 'i', 'did', 'it', '!!!']
console.log(printVals(user)); // ['MylO','ChIcaGo', 'ReAct', 'ElePhAnt']
console.log(printVals(user, upper)); // ['MYLO', 'CHICAGO', 'REACT', 'ELEPHANT']
console.log(printVals(user, lower)); // ['mylo', 'chicago', 'react', 'elephant']
