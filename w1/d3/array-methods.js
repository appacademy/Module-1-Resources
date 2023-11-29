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


// push
// anytime come across a method go to mdn
// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

let pushArr = ['hip','hip'];

// console.log('orignal array', pushArr, 'length', pushArr.length);

let newLength = pushArr.push('array!')

// console.log('mutated array', pushArr, 'lenght', newLength);

// pushArr.push(true);
// console.log(pushArr);
// pushArr.push(12);// [ 'hip', 'hip', 'array!', true ]
// console.log(pushArr);// [ 'hip', 'hip', 'array!', true, 12 ]
// pushArr.push('hello', 'world');
// console.log(pushArr);
/*
[
  'hip',    'hip',
  'array!', true,
  12,       'hello',
  'world'
]
*/

// let newLength2 = pushArr.push([]);
// console.log(pushArr, newLength2);




// .pop
// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.


let popArr = [true, 1 , 'off'];
console.log('og array', popArr, 'length', popArr.length);

let lastEle = popArr.pop();

console.log('mutated array', popArr, 'length:', lastEle);

let one = popArr.pop();

console.log(popArr, one);

let bool = popArr.pop();

console.log(popArr, bool);// [] true

console.log(popArr.pop());// undefined

console.log(popArr);// []
