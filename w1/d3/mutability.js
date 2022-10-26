/*

Mutability
  What is mutable?
    - The ability for something to change, not permanent
  Examples:
    - Arrays
    - Object - more on this next week

  What is immutable?
    - Cant change
    Examples
      - strings
      - numbers
      - booleans

  Examples
*/

//arrays are mutable
let nums = [1,2,3];
//we want to change a value in this array
console.log(nums[0])//1
//we can mutate a value in an array
nums[0] = 300;
console.log(nums[0]);
console.log(nums);
//we can mutate an array
nums[1] = 'hello';
console.log(nums);

//lets proves strings, numbers, booleans are not mutable
let name = 'brandon';
console.log(name)
name[0] = 'k';
console.log(name);//didnt change the first letter to k
name[1] = 'l'
console.log(name)

//if we wanted to change a mutable data type - primitive date type
//wed have to reassign it

name = 'krandon';
console.log(name)
