/*


  Array Methods
    - Arrays have built in functions on them that we can access to achieve common behavior
    - we been exposed to .length, .indexOf
    - push, pop, unshift, shift

*/


//push
//anytime to run into a new method - go to straight to mdn
//The push() method adds one or more elements to the end of an array and returns the new length of the array
//pushes a value into a new arr
//returns the length of the new array
let arr = [1,2,3];
// console.log('oldarr', arr, 'old length', arr.length);

let newLength = arr.push(4,5,6,7);
// console.log('mutated arr', arr, 'new length', newLength);

//pop
//go to mdn
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//pop removes the last element from the array
//return the element removed
let popArr = [true, 1, 'hello'];
// console.log('before', popArr)
// let lastEle = popArr.pop();
// console.log('mutated arr', popArr, 'removed element', lastEle);


//unshift
//go to mdn
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//unshift adds one or more elements to the beginning of the array and it returns the new length of the arr
let unshiftArr = [1,2,3];
// console.log('before mutated', unshiftArr, 'old length', unshiftArr.length);
let newLength2 = unshiftArr.unshift(0);
// console.log('after mutation', unshiftArr, newLength2);


//shift
//go to mdn
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//remove the first element from an array , it returns the element removed

let shiftArr = [1,2,3];
let firstEle = shiftArr.shift();
// console.log(firstEle, shiftArr);


//splice

