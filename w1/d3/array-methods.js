/*

  Array methods
  * Arrays have built in function on them that we can access to achieve common behaviors
  * Push, pop, shift, and unshift
  * .includes, .indexOf

  Property
  * .length

*/

// .push
// * anytime you run into a new method go to mdn
// * The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// * add an element to the end of an array
// * return value is the new length

let pushArr = ["hip", "hip"];
// console.log("original array: ", pushArr, "old length: ", pushArr.length);

let newLength = pushArr.push("array!");
// console.log("mutated array:", pushArr, "newLength:", newLength);
// we mutated the array
// also stored the return value in a variable
// that being the return the new length

// .pop
// * The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// * pop removed the last element of an array
// * pop returns the The removed element

let popArr = [true, 1, "off"];
console.log("orignal array:", popArr, "popArr length", popArr.length);

let lastEle = popArr.pop();
console.log("mutated array: ", popArr, "lastElement: ", lastEle);
