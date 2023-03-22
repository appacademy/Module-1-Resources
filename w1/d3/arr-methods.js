/*


  Array Methods!
  - Arrays have built in functions on them that we can access to common behavior
  - weve been exposed to .indexOf, property - .length
  - push, pop, unshift, shift


*/


//push
//anytime to run into a new method - go to straight to mdn
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
//pushed value into new arr
//return the length of the new arr
let pushArr = [1,2,3];
// console.log('before:', pushArr, 'length:', pushArr.length);

//dont have to store return value in a variable, it will still mutate the arr
let newLength = pushArr.push(4);//we are saying, use the push method on the pushArr passing the argument of 4, store the return value in the variable newLength, that variable being the new length of the arr
// console.log('after:', pushArr, 'length:', newLength);


//pop
//go to mdn
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//pop removes the last element of an arr
//pop returns the element removed

let popArr = [1, true, 'hello'];
// console.log('before:', popArr);

let removedEle = popArr.pop();

// console.log('after:', popArr, 'removed ele:', removedEle);

//unshift
//go to mdn
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//unshift adds element to the beginning of an array
//return is the new length

let unshiftArr = [1,2,3];

// console.log('before:', unshiftArr, 'old length:', unshiftArr.length);

let newLength2 = unshiftArr.unshift(-1, 0);//from to end to beginning

// console.log('after:', unshiftArr, 'new length:', newLength2);

//shift
//go to mdn
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//removed element from beginning of arr
//returns the removedEle

let shiftArr = [1,2,3];
// console.log('before:', shiftArr)
let removedEle2 = shiftArr.shift();
// console.log('after:', removedEle2, shiftArr);

// console.log(shiftArr.shift())//undefined
