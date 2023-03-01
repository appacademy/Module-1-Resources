/*
Array Methods w/ Braxton
  - forEach
  - map
  - filter
  - reduce
  - find
*/

/* Setting up a standard for loop and the differences coming up. */
// for(let i = 0; i < arr.length; i++){

// }

/* What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

// Array.forEach ***Do NOT return in your forEach***
// Definition - Method executes a provided function once for each array element.

// const isEvens = (arr) => {
//   const obj = {
//     isEvens: {},
//   };
//   arr.forEach((ele) => {
//     if (ele % 2 === 0) obj.isEvens[ele] = true;
//     else obj.isEvens[ele] = false;
//   });
//   return obj;
// };

// const isEvens = (arr) => {
//   const obj = {
//         isEvens: {},
//       };
//       for(let i = 0; i < arr.length; i++){
//         let ele = arr[i];
//         if (ele % 2 === 0) obj.isEvens[ele] = true;
//         else obj.isEvens[ele] = false;
//       };
//     return obj;
// };


// Array.map
// Definition - Method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const multiplyNums = (arr, multiplier) => {
//   return arr.map(ele => ele * multiplier)
// }

// const multiplyNums = (arr, multiplier) => {
//     let newArr = [];
//     arr.forEach(ele => {
//       newArr.push(ele * multiplier);
//     })
//   return newArr;
// };

    // const multiplyNums = (arr, multiplier) => {
//   let res = [];
//   for(let i = 0; i < arr.length; i++){
//     let ele = arr[i];
//     res.push(ele * multiplier)
//   };
//   return res;
// };

// Array.filter
/* Definition - Method creates a shallow copy of a portion of a given array,
                filtered down to just the elements from the given array that pass the test implemented by
                the provided function.
*/

// const filterByType = (arr, type) => {
//   return arr.filter(animalObj => {
//     return animalObj.type !== type;
//   });
// };


// Array.reduce
/* Definition - Method executes a user-supplied "reducer" callback function on each element of the array,
                in order, passing in the return value from the calculation on the preceding element.
                The final result of running the reducer across all elements of the array is a single value.
*/

// const reduceSum = (arr) => {
//   return arr.reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);
// };

// const reduceSumArray = (arr) => {
//   return arr.reduce((prev, curr) => {
//     if (curr > 5) prev.push(curr);
//     return prev;
//   }, []);
// };

// const reduceSumInObj = (arr) => {
//   console.log(arr);
//   return arr.reduce((obj, curr) => {
//     console.log(obj);
//     obj[curr] ? obj[curr]++ : obj[curr] = 1
//     return obj;
//     // if (obj[curr]) obj[curr]++
//     // else obj[curr] = 1;
//     // return obj;
//   }, {});
// };


// Array.find
/* Definition - Method returns the first element in the provided array that satisfies the provided testing function.
                If no values satisfy the testing function, undefined is returned.
*/

// const findUsersName = (users, usersName, age) => {
//   return users.find(user => {
//     return user.name.toLowerCase() === usersName.toLowerCase() && user.age === age;
//   });
// };













let colors = ['red', 'blue', 'blue', 'green', 'pink', 'yellow']
let nums = [4, 2, 1, 5, 10, 3, 2, 34, 19];
let animals = [
  {animal: 'monkey', type: 'mammal'},
  {animal: 'parrot', type: 'bird'},
  {animal: 'zebra', type: 'mammal'},
  {animal: 'shark', type: 'fish'},
  {animal: 'bass', type: 'fish'},
  {animal: 'chicken', type: 'bird'},
]
let users = [
  {name: 'Jill', age: 39},
  {name: 'Alex', age: 26},
  {name: 'Braxton', age: 22},
  {name: 'Braxton', age: 30},
  {name: 'Brad', age: 50},
]

console.log(isEvens(nums));
// console.log(multiplyNums(nums, 3));
// console.log(filterByType(animals, 'mammal'));
// console.log(reduceSum(nums));
// console.log(reduceSumArray(nums));
// console.log(reduceSumInObj(colors));
// console.log(findUsersName(users, 'bRaXtOn', 30));
