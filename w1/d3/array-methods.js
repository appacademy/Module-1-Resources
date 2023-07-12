

/*


  Array methods!

  - Arrays have built in functions on them that can we access to achieve common behavior
  - Pop, push, shift, unshift

*/


// push
// anytime you run into a new method, go to mdn
// The push() method adds the specified elements to the end of an array and returns the new length of the array.
// pushes new elements into a new array
// returns a new length

let pushArr = ['hip','hip'];

// if you dont want to mutate the original array
// make a copy
// let pushArr2 = pushArr.slice();// create a copy of the array

// console.log('before', pushArr, 'old length', pushArr.length);

// we can store the return value of push an a variable
let newLength = pushArr.push('array');

// console.log('after', pushArr, 'new length', newLength); //[ 'hip', 'hip', 'array' ]


// pop
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// removed from the last element from an array
// returns the element removed

let popArr = [true, 1, 'off'];
// console.log('before', popArr, popArr.length);

// were gonna call the pop method but also store the return value
let removedEle = popArr.pop();
// console.log('after', popArr, popArr.length, removedEle);

// function myFunc(){

// };

// myFunc();

// popArr.
// pop()


// unshift
// The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
// add elements to the start of an array
// returns a new length
// elements are added to the arr in the order in which they are passed

let unshiftArr = ['wow', false, 3];
// console.log('before', unshiftArr, unshiftArr.length); //[ 'wow', false, 3 ]

// perform the method on the unshiftArr
unshiftArr.unshift('key');
// mutates the unshiftArr
// even tho we didnt store the return a variable
// the function was called and it mutated the array
// tho we could store the return value like so
let newLength2 = unshiftArr.unshift('key');
// console.log('====', newLength2); // 5

//you dont have to store the return value in a variable
// if you just want to see, wrap the function call in a console.log
// console.log(unshiftArr.unshift('test'));// 6

// console.log('after', unshiftArr); //[ 'test', 'key', 'key', 'wow', false, 3 ]


// shift
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// removed the first element from an array
// returns the removed Element

let shiftArr = ['gears', 1, false];
console.log(shiftArr); //[ 'gears', 1, false ]

let firstEle = shiftArr.shift();

console.log('after', shiftArr, firstEle); //[ 1, false ] gears
