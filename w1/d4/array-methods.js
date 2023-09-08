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

// .unshift
// * The unshift() method adds one or more elements to the beginning of an array
// * returns the new length of the array.
let unshiftArr = ['wow', false, 3];
console.log('original array', unshiftArr, 'old length', unshiftArr.length);
let newLength2 = unshiftArr.unshift("key");
console.log('mutated array', unshiftArr, 'new length',newLength2);

// .shift
// * The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// * remove the first element from an array , it returns the element removed
let shiftArr = ["gears", 1, false];
let firstEle = shiftArr.shift();
console.log('mutated array', shiftArr, 'shifting', firstEle);

