// Array Methods
// Arrays have built in functions on them that we can access to achieve common
// behaviors. Today, we're going to learn about Push, Pop, Shift and Unshift
// We'll access these methods like we do other properties, such as length

// Let's take a look at push first. Calling the .push method allows us to "push"
// new values on to the end of our array, and return the new length of the array
// Let's look at an example:
let arr = [4, 3, 2];

console.log(arr, "length:", arr.length);
let newLength = arr.push(1, 0); // Push will accept any number of arguments

console.log(arr, "length:", newLength);
// We can see that our arguments have been pushed on to our array, modifying its
// contents and length.

// We can think of pop as the opposite of push. Calling the .pop method on an
// array will remove the last element of the array and return it. 
console.log(arr);
let lastEle = arr.pop();
console.log(lastEle, arr);
// We can see our array from earlier, then we pop off and store the last element
// and finally print both the last element and the mutated array

// Much like .push, the .unshift method adds things to our array. The difference
// being that .unshift places our arguments at the beginning of the array. Like
// .push, this method returns the new length of the array

console.log("Old length: ", arr.length) // remember we popped something off

newLength = arr.unshift(0, 1);
console.log("New length: :", newLength, arr);
// We can see that our array now has a length of 6 and has our new elements in
// the beginning

// Just as .push has .pop, .unshift has .shift. This method will remove the 
// first element of the array and return it
let firstEle = arr.shift();
console.log(firstEle, arr);
