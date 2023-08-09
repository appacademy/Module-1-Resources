/*

  Array Methods

  * Array have built in function on them that we can access to achieve common behavior
  * Push, pop, shift, unshift
  * Access just like other methods or properties

*/


// .push
// * anytime you run into a method! Go to mdn
// * The push() method adds the specified elements to the end of an array and returns the new length of the array.
// * return the new length of the array

let pushArr = ['hip','hip'];
// console.log('original array:', pushArr, 'length: ', pushArr.length)

// newlength holds the return value of push
let newLength = pushArr.push('array!');

// console.log('mutated array: ', pushArr, 'new length: ', newLength);

// you dont have to use the return value for the value to pushed into the array
// doesnt matter if you use the return of the function, the logic is ran and a new value is pushed into the array and the array is mutated
// console.log(pushArr.push('test'));// 4

// console.log(pushArr);// [ 'hip', 'hip', 'array!', 'test' ]


// .pop
// * The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// * return is the element removed
let popArr = [true, 1, 'off'];
console.log('original array: ', popArr, 'length: ', popArr.length);

let lastEle = popArr.pop();

console.log('mutated array: ', popArr, 'new length: ', popArr.length)
console.log('last ele: ', lastEle);// Off

popArr.pop();

console.log(popArr);// [ true ]

let array = [1,2,3];
array.pop()
console.log(array)
// this is saying: show the array after we performed a method that mutates it

// is different from

console.log(array.pop())
// this is saying: show me the return value of calling pop on the array
