/*


  Array methods!
  - Arrays have built in function on them that we can access to achieve behaviors
  Push, pop, unshift, shift

  we are exposed .length, .indexOf

*/

//push!
//go to mdn!!
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
// let pushArr = [1,2,3];
// console.log('old arr:', pushArr, 'old length', pushArr.length)

// // pushArr.push(4,5,6,7);
// console.log('mutated arr:', pushArr, 'new length:', pushArrNewLength)
// // console.log(pushArr)

// //pop!
//got mdn
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let popArr = [1,2,3];
// console.log('before we pop', popArr)
let lastEleOfPopArr = popArr.pop();//storing the element that is going to be removed in a variable
//at the same time mutating the og array
// console.log('element removed:', lastEleOfPopArr, 'popArr:', popArr)


//unshift
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let unshiftArr = [1,2,3];
// console.log('unshift arr:', unshiftArr, 'length before', unshiftArr.length);

let newLengthUnshiftArr = unshiftArr.unshift(-1, 0);
// console.log('mutated arr', unshiftArr, 'new length', newLengthUnshiftArr)

//shift
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let shiftArr = [1,2,3];
let firstEle = shiftArr.shift();
console.log(firstEle, shiftArr)
