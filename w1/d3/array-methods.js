/*

Array Methods

  Arrays have built in functions that we can access to achieve common behaviors.
  We were exposed to a property like .length
  similar .length, we learned about push, pop, unshift, shift


*/


//push
//go to mdn
//The push() method adds one or more elements to the end of an array and
//returns the new length of the array.
//pushes a value on to the end of an array mutating it
//return the length

let arr = [1,2,3];
// console.log(arr, 'old length', arr.length);

//only need to store the return pushing a value, if you need that new length
//we dont have to store in a variable
arr.push(4);
// console.log(arr, 'new length', newLength === arr.length);


//pop
//got to mdn
//The pop() method removes the last element from an array and returns that element.
//This method changes the length of the array.


//notices that pop returns the element removed, push return the new length!
//mutates the array
let arr2 = [1,2,3];
let lastEle = arr2.pop();
// console.log(lastEle, arr2);
// console.log(arr2[arr2.length - 1])


//unshift
//got to mdn
//The unshift() method adds one or more elements to the beginning of an array
//and returns the new length of the array.
//similar to push, it returns the new length of the array

// let arr3 = [true, 2, 'hello'];
// console.log(arr3, 'old length', arr3.length);

// let newlength2 = arr3.unshift([10],10,12);
// console.log(arr3, 'new length', newlength2);


// //shift
//go to mdn
//The shift() method removes the first element from an array and returns that removed element.
//This method changes the length of the array.

//similar to pop
//removes from the beginning of the array
//remove the frst element and returns it
let arr4 = ['hello', 2, true];
let firstEle = arr4.shift();
console.log(firstEle, arr4);
