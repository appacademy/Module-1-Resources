/*


  Array methods!
   - Arrays have built in function on them that we can access to achieve common behavior
   - push, pop, unshift, shift

   we are exposed to .length, .indexOf

*/

//push
//go to mdn
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

let arr = [1,2,3];
// console.log('old arr:', arr, 'old length:', arr.length);

let newLength = arr.push(4,5);
// console.log('mutated arr:', arr, 'new length:', newLength);
// console.log('mutated arr:', arr,);
//mutates the og array, but returns the length if stored in a var


//pop
//go to mdn
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//remove the last element of an array and returns it

let popArr = [1,2,3];
// console.log('before:', popArr)
let lastEle = popArr.pop();
// console.log('after: last ele',lastEle, 'pop arr:', popArr)


//unshift
//go to mdn
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

let unshiftArr = [1,2,3];
// console.log('before', unshiftArr, 'old length', unshiftArr.length);

//order matters in which you pass the argument
let newLength2 = unshiftArr.unshift(-1, 0);
// console.log('after', unshiftArr, 'new length', newLength2);

//shift
//go to mdn
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//similar to pop
let shiftArr = [1,2,3];
console.log(shiftArr)
let firstEle = shiftArr.shift();
console.log(shiftArr, firstEle)
