/*

  Array Methods

  * Arrays have built in functions on them that we can access to achieve common behaviors.
  * Today, we're going to learn about Push, Pop, Shift and Unshift.
  * We'll access these methods like we do other properties, such as length
  * These methods can be used to MUTATE an array

  Array Methods
    * Arrays have built in functions on them that we can access to achieve common behavior
    * we been exposed to .length, .indexOf
    *  push, pop, unshift, shift

*/


// .push
//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// adding an element to end of array
// return the new length of an array
let pushArr = ['hip', 'hip'];
// console.log('og array:', pushArr, 'og length:', pushArr.length)

let newLength = pushArr.push('array');

// console.log('mutated array:', pushArr, 'new length', newLength);

pushArr.push('🍅');
// console.log(pushArr);// [ 'hip', 'hip', 'array', '🍅' ]

pushArr.push('🍅');
// console.log(pushArr);// [ 'hip', 'hip', 'array', '🍅' ]

pushArr.push('🍅')
// console.log(pushArr)

let returnOfPush = pushArr.push(true)
// console.log(returnOfPush, pushArr);



// pop
// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// return the element removed
// removed the last element from an array

let popArr = [true, 1, 'off'];
console.log('og array:', popArr);

let lastEle = popArr.pop();

console.log('mutated arr:', popArr, 'last ele', lastEle);
