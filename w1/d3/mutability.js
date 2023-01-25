/*


  What is Mutability?
  - ability to be mutated or changed

  Mutable - can be changed
    - arrays
    - objects - learn next week

  Immutability - cannot be changed
    - strings
    - numbers
    - booleans

  Example
*/

//arrays are mutable
let nums = [1,2,3];
console.log(nums);
//i want to mutate the first num of the arr
nums[0] = 6
//were indexing into an array and using the assignment operator to reassign the value at the first index to 6
console.log(nums)


//strings are not mutable
let name = 'brandon';
console.log(name);//brandon
name[0] = 'k';
console.log(name);//brandon

//we are not mutating the string, just reassigning the variable to a new string
name = 'krandon';
console.log(name);//krandon
