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
// * anytime you run into a method - go to mdn
// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// * returns the new length of the array

let array1 = ['hip','hip'];
console.log('og array:', array1);

let newLength = array1.push('array!');
console.log('mutated array',array1, newLength)

array1.push(true);
console.log(array1);
array1.push(false);
console.log(array1);
array1.push('hello');
console.log(array1);

let newLength2 = array1.push(null);
console.log(newLength2, array1);

let newArr = [];
for(let i = 0; i < 3; i++){
  newArr.push([() => {}][0]);
  newArr.push(i);
}
console.log('==>',newArr);// ==> [ 0, 1, 2 ] [[0],[1],[2]]  [ [ 0 ], [ 1 ], [ 2 ] ]
