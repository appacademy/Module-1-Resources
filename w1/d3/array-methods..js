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
// console.log('before',pushArr)

// newLength holds the return value of .push which is the new length
// but we also mutated the push array by pushing a value into it
// we dont need to store the return in a variable
let newLength = pushArr.push('array');

// console.log('new length:', newLength, pushArr)

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
  // console.log(array)
}

// console.log(array)


//.pop
// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// return value of pop is the element removed

let popArr = [true, 1, 'off'];
console.log('before', popArr);

let lastEle = popArr.pop();

console.log('after', popArr, lastEle);

popArr.pop();

console.log(popArr);

popArr.pop();// [ true, 1 ]

console.log(popArr);// []

console.log(popArr.pop());// undefined

console.log(popArr);
