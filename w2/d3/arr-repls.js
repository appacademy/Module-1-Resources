
// 1. myForEach - .forEach
// * The forEach() method executes a provided function once for each array element.
// * We use forEach when we want a connivent/quick way to write a for loop

let names = ["brandon", "maica", "charles", "trevor"];

names.forEach((name, i, names) => console.log(name, i, names));

function myForEach(names, cb) {
  // * As we iterate; we are passing the name, i, and names array to the callback function
  // * that callback function then takes in those variables as arguments to then print them to the terminal
  // * that is what an array method is doing; passing elements as we iterate to callback functions
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    cb(name, i, names);
  }
}

myForEach(names, (name, i, names) => console.log(name, i, names));

// 2. myMap - .map
// * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// * we use map whenever we want to return a new array of elements modified in some way

let upperCasedNames = names.map((name) => name.toUpperCase());
console.log(upperCasedNames); //

function myMap(names, cb) {
  let upperCasedNames = [];

  // pass the upper cased names into a new array
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let upperCasedName = cb(name);
    upperCasedNames.push(upperCasedName);
  }
  return upperCasedNames;
}

console.log(myMap(names, (name) => name.toUpperCase()));

// ! end of homework review


// 3. myFilter - .filter
// * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// * we use filter whenever we want to return a new array of elements that meet a condition

let filtered = names.filter(name => name.includes('x'));
console.log(filtered);//

function myFilter(names, cb) {
  let filtered = [];

  // push only names that result in true when passed to the callback function into the filtered array
  for(let i = 0; i < names.length; i++) {
    let name = names[i];
    console.log(cb(name));// returns a boolean
    if(cb(name) === true) {
      filtered.push(name);
    }
  }
}

console.log(myFilter(names, (name) => names.includes('x')));//


// 4. myEvery - .every
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let boolean = names.every(name => names.includes('o'));
console.log(boolean);//


function myEvery(names, cb){
  for(let i = 0 ; i < names.length; i++) {
    let name = names[i];

    // stop loop as soon as result of passing name to callback is false
    // * aka name does not include the letter o
    if(cb(name) === false) {
      return false;
    }
  };
  // if we complete the iteration without meeting the condition;
  // then its implied that every name includes the letter o
  return true;
}

console.log(myEvery(names, (name) => name.includes("o")));//
