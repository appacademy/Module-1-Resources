/*

  Arrays!
    - Arrays are ordered collections of data seperated by commas, represented by square brackets []
    - Arrays have indices atached to each position within the array, we can access the value stored at each index by keying into it
    - Zero indexed

*/

let arr = [1, 2, 3, 4, 5];

//we cans tore differetn data types
let stringArr = ["wow", "pretty", "cool"];

//arrays can have many differnt types within it, even other arrays!
let arr2 = [1, "two", true, ["no way another array!", ["what?"]]];
// console.log(arr2);

let animal = "cats";
// console.log(animal[0]);//c

//so indexing in an array is simliar to indexing in a string
//we can index into nested arrays
// console.log(arr2[3][1][0]);

let animalArr = ["dog", "cats", "mouses"];
// console.log(animalArr[0][0])// d
// console.log(animalArr[animalArr.length - 1]);//mouses

//KNOW WHAT YOURE INDEXING INTO!

let cakesAndFillings = [
  ["strawberry cake", "strawberry filling"],
  ["ice cream cake", "chocolate filling"],
  ["carrot cake", "pineapple filling"],
  ["chocolate cake", "banana filling"],
];

// console.log(cakesAndFillings[2][1][0])// pineapple filling => p
// console.table(cakesAndFillings)

//strings had a length property, so does array!
// console.log(animalArr.length);//3

//indexOf();
// console.log(animalArr.indexOf('cats'))//1

//concatenation
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = [7, 8, 9];

// console.log(nums1 + nums2)//1,2,34,5,6

//we have concat so we dont turn arr into a string
//order does matter!
// console.log(nums1.concat(nums3, nums2)); //[ 1, 2, 3, 4, 5, 6 ]

//prompt: SumArray
// function sumArray(nums) {
//   //declare accumulator to hold our sum
//   console.log("nums array", nums);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log("sum at start of loop", sum);
//     let num = nums[i];
//     console.log("The current index", i);
//     console.log("The current number is", num);
//     sum += num;
//   }
//   return sum;
// }

// console.log(sumArray([5, 6, 4])); // => 15

/*




  Function expression!
    - Another way that we can write our functions weve used before function declaration/definition
    - Store an anonymous function in a variable, essentially giving the function a name
    - anonymous function, is a funciton without a name

*/

//function declaration
function sayHello() {
  console.log("hello");
}
// console.log(sayHello())

//function expression
//storing an anonymous function in a variable
let sayHello2 = function () {
  console.log("hello");
};

//function expression + declaration invoked same way
// console.log(sayHello2())//[Function: sayHello2]

let sumArray = (nums) => {
  //declare accumulator to hold our sum
  console.log("nums array", nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("sum at start of loop", sum);
    let num = nums[i];
    console.log("The current index", i);
    console.log("The current number is", num);
    sum += num;
  }
  return sum;
};

// console.log(sumArray([5, 6, 4])); // => 15

//either syntax is correct, later down the line we will learn the differences
// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// 1. It can be stored in a variable
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)

/*

  Mutability vs Immutability
  - Mutability is the concept of certeian pieces of data being able to be changed, of the datatypes weve seens so far, only arrays are mutable

  Mutable - can be changed
    - arrays
    - objects - next week
  Immutable - cannot be changed
    - strings
    - numbers
    - booleans
  Examples:
// */

// //because arrays are mutable we are able to change the values at spefic indexes
// let nums = [1,2,3];
// // console.log(nums);//[ 1, 2, 3 ]
// nums[0] = 6;
// // console.log(nums)//[ 6, 2, 3 ]
// nums[1] = 'anything'
// // console.log(nums);//[ 6, 5, 3 ]

// //strings do not obey the same rules as arrays because they are immutable
// let name = 'brandon';
// console.log(name); //brandon
// name[1] = 'k';
// console.log(name)// brandon
// name = 'krandon';
// console.log(name)//krandon
// //the final console.log is jhust showing are variable got reassgined to krandon but it did not get mutatated!

/*

  Array methods!
    - Array Push, Pop, Shift, Unshift
    - Arrays have built in function on them that we can access to achience behaviors.
    - We can access these methods like we do other properties, for example .length
*/

//Push!
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
//push adds to the end of an array
//return the length of the arr

let arr4 = [1, 2, 3];
// console.log('old arr', arr4, arr4.length);

//push takes additional args
let newLength = arr4.push(4, 5);
// console.log('new arr', arr4, arr4.length);

//Pop!
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//opposite of push
//does return a length
// removes the last element of an arr and returns it

let popArr = [1, 2, 3];
let lastEle = popArr.pop();
// console.log(lastEle, popArr); //3 [ 1, 2 ]
//notice that pop returns the elemtn that was removed!

//unshift!
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let unshiftArr = [1, 2, 3];
console.log(unshiftArr, unshiftArr.length);

let newLength2 = unshiftArr.unshift(-2, -1, 0);
// console.log(unshiftArr, newLength2);

//shift!
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//removes from the beginning of an array
// return the length

let shiftArr = [1,2,3];
let firstEle = shiftArr.shift();
console.log(firstEle, shiftArr)
