/*


  Mutability
  What is mutability?
    - can be changed or altered, changeable, mutated

    Mutable - can be changed
      - arrays
      - objects - learn that next week

    Immutable - cannot be changed
      - string
      - numbers
      - booleans

*/


//Arrays are mutable!
let nums = [1,2,3];
// console.log(nums);//[ 1, 2, 3 ]
//we can use the assignment operator - =, to reassign a value in a array- mutating it
nums[0] = 7;//were saying in the nums array at the first index reassign the value to 7
// console.log(nums);//[ 7, 2, 3 ]
//we have mutated our array


//strings are not mutable!
let name = 'brandon';
console.log(name);//brandon
name[0] = 'k';
console.log(name);//brandon
//nothing changed, strings are not mutable
//we cannot mutate a string if we wanted to change it, wed have to reassign an entire new string to the variable

name = 'krandon';
console.log(name);//krandon
