/*

  Array Methods!
  - push, pop, shift, unshift

  Array methods
  - Arrays have built in function in js, that allows us to achieve common behavior
  - weve been exposed .length which is a property
  - weve been exposed to .indexOf


*/


// push!
// anytime to you run into a method; go to mdn
// The push() method adds the specified elements to the end of an array and returns the new length of the array.
// mutates the array by pushing values to the end
// the return is the new length of the arr
let pushArr = ['hip','hip'];
// console.log('before', pushArr, 'old length', pushArr.length);

let newLength = pushArr.push('array!');//we are storing the return value of calling the push method(function) on the push arr, in a variable called newLength
// console.log('after', pushArr, 'new length', newLength);



//pop
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// return the element removed
// removes the last ele from an array
let popArr = [true, 1, 'off'];
// console.log('before', popArr);

// let removedEle = popArr.pop();
// console.log('after', popArr, 'removed ele', removedEle);
popArr.pop();//will still mutate array regardless you store return value in a variable
// console.log('popArr', popArr);

// console.log([].pop());//undefined
// console.log([1,2,3].pop());//3


//shift
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// the return value is the element removed
// the removed the element from the start of any array

let shiftArr = ['gears', 1, false];
// console.log('before', shiftArr);

let firstElement = shiftArr.shift();
// console.log('after', shiftArr, 'first ele', firstElement);


// unshift
//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
// add elements to the start of an array
// returns the new length

let unshiftArr = ['wow', false, 3];
// console.log('before', unshiftArr);

let newLength2 = unshiftArr.unshift('key', true, 24);
// console.log('after', unshiftArr, 'new length', newLength2);
