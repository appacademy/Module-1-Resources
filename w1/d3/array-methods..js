/*

  Array methods
    * Array have built in function that we can access to achieve common behaviors
    * Today we will be looking at pop, push, shift and unshift

*/

// ! Anytime you run into a method go to mdn!

// .push
// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// return the new length

let pushArr = ['hip','hip'];
console.log('before',pushArr)

// newLength holds the return value of .push which is the new length
// but we also mutated the push array by pushing a value into it
// we dont need to store the return in a variable
let newLength = pushArr.push('array');

console.log('new length:', newLength, pushArr)

// console.log('return value of push', pushArr.push('😎'))
let res = pushArr.push('😎');

// console.log(pushArr);

pushArr.push('🔥')

// console.log(pushArr);

let anythingIwant = pushArr.push('😈')
// console.log(anythingIwant)

let array = [];
for(let i = 0; i < 4; i++) {
  array.push(i)
  console.log(array)
}

// console.log(array)
