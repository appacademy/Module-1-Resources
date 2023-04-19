/*


  Mutability
  What is mutability?
  - can be changed or altered, changeable, mutated

  Mutable - can be changed
    - arrays
    - objects - learn next week!

  Immutable - cannot be changed
    - string
    - numbers
    - booleans

*/

//arrays are mutable
let nums = [1,2,3];
console.log(nums);
//use the assignment operator - =, reassign the value in a array, therefore mutating it
nums[0] = 7;// saying hey, in the nums array at index 0, reassign 1 to now be 7
console.log(nums);//[ 7, 2, 3 ]
//we have mutated our array

//strings are not mutable!
let name = 'brandon';
console.log(name);//brandon
name[0] = 'k';
console.log(name);//brandon
//why? because strings are not mutable! you cant mutate
//the only thing we can do, is reassign the entire string
name = 'krandon';

console.log(name);//krandon

