/*


 Array methods!
 - push, pop, shift, unshift

  Array methods
  - Arrays have built in function on them that we can access to achieve common behavior
  - we've been exposed to .length which is a property
  - weve been exposed to .indexOf

*/


//push
//anytime you run into a method, go to mdn
//The push() method adds the specified elements to the end of an array and returns the new length of the array.
// mutates the array by pushing new value to the end
// returns the new length
let pushArr = ['hip','hip'];
// console.log("pushArr:", pushArr, 'old length:', pushArr.length);

let newLength = pushArr.push('array!', 'array!', 'array!')
// console.log("pushArr:", pushArr, "newLength:", newLength);

//pop
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// removes the last ele from an array
// returns the element removed
let popArr = [true, 1, 'off'];
// console.log("popArr:", popArr,);
popArr.pop();
let lastEle = popArr.pop();
// console.log("popArr:", popArr, "lastEle:", lastEle);


//shift
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// shift removes the first element
// returns the element removed

let shiftArr = ['gears', 1, false];
// console.log("shiftArr:", shiftArr);
let shifted = shiftArr.shift();
// console.log("mutated shiftArr:", shiftArr, 'removed value', shifted);

//unshift
//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
// add elements to start of array
// return is new length of the array
let array1 = ['wow',false,3];
// console.log("array1:", array1);

let newLength2 = array1.unshift('key', true, 33);
// console.log("array1:", array1,"newLength2:", newLength2);
