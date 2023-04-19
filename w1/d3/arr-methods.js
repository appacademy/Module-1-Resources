/*

  Array methods!
  - Arrays have built in function on them that we can access to achieve common behaviors
  - weve been exposed to .indexOf, property - .length
  - push, pop, unshift, shift

*/

//push
//anytime to you run into a new method -  go to straight to mdn
//The push() method adds the specified elements to the end of an array and returns the new length of the array.
//push value into new arr, adds to the end
//return value is the new length
let pushArr = [1,2,3];
// console.log('before:', pushArr, 'oldLength:', pushArr.length);

//we are saying store in the new length variable the return value of calling the push methods on the pushArr, passing the number 4 as argument to the push method
//we are not only storing a length in a variable
//but we also mutating the original array
let newLength = pushArr.push(4,5,6,7,8, true, 'hello');
// console.log('after:', pushArr, 'new length:', newLength);


//pop
//go to mdn
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//pop removes the last element of an arr
//pop returns the element removed
//does not take in args

let popArr = [1, true, 'hello'];
// console.log('before', popArr, 'oldlength', popArr.length);

let removedEl = popArr.pop();

// console.log('after', popArr, 'newLength', popArr.length, 'removedEl', removedEl);

//unshift
//go to mdn
//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
//unshift add elements to the beginning
//return the new length

let unshiftArr = [1,2,3];
// console.log(unshiftArr);
let newLength2 = unshiftArr.unshift(4,5,6);

// console.log(unshiftArr, newLength2);



//shift
//go to mdn
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//removed ele from start of arr
//returns the removed ele

let shiftArr = [1,2,3];
// console.log(shiftArr);

let removedEl2 = shiftArr.shift();

// console.log(shiftArr, removedEl2);
