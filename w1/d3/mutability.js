/*




  What is mutability?
    - Ability to be changed
    - change the original

  immutable - cannot be changed?
    - string
    - boolean
    - numbers

  mutable - can be changed
    - arrays
    - Object - everything in js object - but we learn about this next week!

    lets prove it!
*/

let nums = [1,2,3];
// console.log(nums);
// //is we are going to try and mutate this
// //we can change values in an array using this syntax
// // console.log(nums[0])
// //weve reassigned nums at index 0 to no longer be 1 but now 5
// nums[0] = 5;
// //weve mutated our array
// console.log(nums);//[ 5, 2, 3 ]


//strings may feel like they're mutable, but they are not!
let name = 'brandon';
console.log(name);
// console.log(name[0])
name[0] = 'k';
//we cannot mutate a string!
// console.log(name);
name = 'krandon';
// console.log(name)

let arr = ['hello'];
arr[0] = 'world';
console.log(arr[0][0])
