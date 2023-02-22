/*



  Mutability
  What is mutability?

  Mutable
  - can be changed
    - arrays
    - objects - learn next week

  Immutable
  - cannot be changed
    - strings
    - numbers
    - booleans

*/

//ARRAYS ARE MUTABLE
let nums = [1,2,3];
// console.log(nums);//[ 1, 2, 3 ]
//we can use the assignment operator - = to reassign a value in a array
nums[0] = 7
// console.log(nums);//[ 7, 2, 3 ]
//so weve mutated the array and reassign the value at the first index to a new value
// we can do this because arrays are mutable- can be changed


//STRINGS ARE NOT MUTABLE
let name = 'brandon';
console.log(name);//brandon
name[0] = 'k';
console.log(name)//brandon
//we cannot mutate a strings if we wanted to change it, wed have to reassign to a entire new string

name = 'krandon';//reassign
console.log(name);//krandon


// firstName = 'brandon';//declare globally - dont do this
