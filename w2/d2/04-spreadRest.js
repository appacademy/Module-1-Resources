// Spread and Rest operator
// JavaScript gives us the ability to allow our functions to take any number of
// arguments, and collect them into a single array. To do that, we'll make use
// of the rest operator. Let's look at an example:

// ...param is a way for us to take any number of comma separated arguments, and
// store them in an array that our function will have access to. 
let yeller = function (...words) { // create array called words
  let result = words.map(function (word) { // map through array of words
    return word.toUpperCase(); // return upperCase'd word to new array
  });
  return result.join(" ") + "!"; // join those words into a string and return it
};

console.log(yeller("i", "am", "the", "senate"));

// We've seen some methods already that make use of this, but maybe didn't quite
// know how JS had it coded under the hood. Think of .push and .unshift


// Spread Operator
// We can kind of think of the spread operator as the inverse of spread. Rather
// than allowing our function to take any number or arguments and collect them
// in an array, we can spread out the values of an array into comma separated
// argum ents. 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
console.log(arr3)
// Notice how we have nested arrays at positions 1 and 2. What if we wanted to
// simply have their values added to the array instead?

// By using the spread operator before our array, we're instead telling JS to
// spread the values in our array into the new array
let arr4 = [0, ...arr1, ...arr2];
console.log(arr4);
// Rather than having sub arrays, we've gotten the values we wanted into our
// new array all in a single level.

// The spread operator works with objects as well. We can spread one object into
// another, creating a shallow copy that holds the same key-value pairs.
let obj1 = { name: "Bill" };
let obj2 = { animal: "dog", game: "Destiny 2" };
let obj3 = { obj1, obj2, book: "Wheel of Time" };
console.log(obj3);

// Here our object has keys of obj1 and obj2 with their associated objects on
// them. If we use the spread operator, we can instead get their key-value pairs
// in our new object at the base level. 
let obj4 = { ...obj1, ...obj2, book: "Wheel of Time" };
console.log(obj4);