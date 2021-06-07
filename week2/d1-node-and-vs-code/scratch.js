/* 
forEach
1. arr.forEach(function(el, i, arr){//code block}) // a function can intake ANOTHER FUNCTION
2. forEach element that is in an array, it will run the function
  a. the function can INTAKE the ele, i, array
3. Intakes a FUNCTION
4. undefined
  a. We use forEach for its SIDE EFFECT not its return value
*/

//console.log every element of the array it's given
function logger(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   let ele = arr[i];
  //   console.log(ele)
  // }
  arr.forEach(function (ele, i, origArr) {
    //we don't have to use i or origArr they can be deleted
    console.log(ele);
    return "yoooo"; // doesn't really do anything
    console.log("won't run"); // except keep following lines of code running
    // return won't 'short circuit' the loop
  });
}

// logger(["a", "b", "c"]);

/* 
map
1. arr.map(function(ele, i, arr){//code block})
2. Iterates through the array, runs a function for each element,
   Pushes the return of that function into a new array. It returns the new array.
3. It intakes a function
4. Returns a new array containing elements after being through the function.
*/

/* 
Write a function called timesTwo that intakes an
array of numbers and returns a new array where all 
of the numbers are multiplied by 2. You must use Array.map()

timesTwo([1, 2, 3]) // [2, 4, 6]
timesTwo([-1, 6, 0]) // [-2, 12, 0]
*/

function timesTwo(nums) {
  // let res = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let num = nums[i];
  //   res.push(num * 2);
  // }
  // return res;
  let res = nums.map(function (ele, i, origArr) {
    return ele * 2;
  });
  return res;
}

// console.log(timesTwo([1, 2, 3])); // [2, 4, 6]
// console.log(timesTwo([-1, 6, 0])); // [-2, 12, 0]

/* 
filter
1. arr.filter(function(ele, i, origArr){//code block});
2. It returns a new array that has what elements evaluate to true based on 
   the return of the inner function.
3. It intakes a function
4. It returns A new array containing only the elements that return true from the function
*/

/* 
Write a function called evens that intakes an
array of numbers and returns a new array of only the
even numbers from the original array. You must use
Array.filter()

console.log(evens([1, 2, 3])) // [2]
console.log(evens([42, 44, 45])) // [42, 44]
*/
function evens(nums) {
  // let res = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let num = nums[i];
  //   if (num % 2 === 0) {
  //     res.push(num);
  //   }
  // }
  // return res;
  let res = nums.filter(function (ele, i, origArr) {
    return ele % 2 === 0;
  });
  return res;
}
// console.log(evens([1, 2, 3])); // [2]
// console.log(evens([42, 44, 45])); // [42, 44]

/* 
reduce
1. arr.reduce(function(accum, ele, i, origArr){//code block}, defaultAccum) //defaultAccum is optional
2. It will iterate over every ele of an array, and make the accum whatever we what the next accum to be,
   then return the final accum.
3. It intakes a function and an optional defaultAccum
4. It returns the final accumulator value
*/

/* 
Write a function called reduceSum that intakes an
array of numbers and returns the sum.
MUST use Array.reduce()
*/

function reduceSum(nums) {
  // let sum = 0;
  // console.log('first sum', sum)
  // for (let i = 0; i < nums.length; i++) {
  //   let num = nums[i];
  //   console.log("inside the loop", num);
  //   sum += num;
  // }
  // return sum;
  return nums.reduce(function (accum, ele, i, origArr) {
    return accum + ele;
  }, 1000);
  // return res;
}

// console.log(reduceSum([1, 2, 3])); //6

/* 
Write a function called lister that intakes an
array of names and returns a string of "Names: " with
all of the names attached after. Must use Array.reduce()

reduce(['Mylo']) // Names: Mylo 
reduce(['Rick', 'Morty']) // Names: Rick Morty 
*/

function lister(names) {
  return names.reduce(function (accum, name) {
    console.log(accum);
    return accum + name + " ";
  }, "Names: ");
}

// console.log(lister(["Mylo"])); // Names: Mylo
// console.log(lister(["Rick", "Morty"])); // Names: Rick Morty

let arr = ["a", "b", "c"]; // create an array index:element
let obj = { first: "a", second: arr, third: "c" }; //key:values

console.log(arr[1]); // how to get something out of an array
console.log(obj["first"]); // how to get something out of an object

arr[2] = "d"; // how to change something in an arr
console.log(arr);
obj["first"] = "apple pie";
console.log(obj);

arr[3] = "e";
console.log(arr);
obj["pineapple is cool"] = "apple pie is the best!";
console.log(obj);
