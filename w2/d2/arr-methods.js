/*

  Array methods!
  What are array methods?
  - built in functions in javascript
  - quality of life
  - built in logic that we can use and not have to write ourselves over and over

  Array methods!
   - forEach
   - map
   - filter
   - reduce
   - find

*/

// what we know!
let arr = [1, 2, 3];
// for(let i = 0; i < arr.length; i++){
//   console.log(i, arr[i])
// }

// arr.forEach((el, i, arr)=> console.log(i, el, arr));

// forEach - touches every element of an array, modify or access it
// forEach does not return anything
// the for each methods executes a provided function once for every element in the array

// arr.forEach(function(el, i, arr) {
//   console.log(el, i, arr);
// });


let includesTwo = (arr) => {
  // console.log(arr);
  // for(let i = 0; i < arr.length; i++){
  //   let ele = arr[i];
  //   if(ele === 2) return true;
  // }
  let bool = false;
  arr.forEach((el, i, arr) => {
    // if(el === 2) return true;//  cant return in a forEach
    if(el === 2) bool = true;
  })

  return bool;
};

// console.log(includesTwo([1,2,3,4,5]))


// .map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// return is the new array
let doubledNum = (...nums) => {
  // let doubled = [];
  // for(let i = 0; i < nums.length; i++){
  //   let num = nums[i];
  //   doubled.push(num * 2);
  // }
  let doubled = nums.map((num) => num * 2);//result of passing the current element in the arr to the callback function
  // is stored in the return of .map, in this case doubled

  return doubled;//[ 2, 4, 6, 8, 10 ]
};

let doubledNum2 = (...nums) => nums.map(num => num * 2);

// console.log(doubledNum(1,2,3,4,5))

//filter
//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

let onlyOdds = (...nums) => {
  // let res = [];
  // for(let num of nums){
  //   if(num % 2 !== 0) res.push(num);
  // };

  let res = nums.filter(function(num) {
    if(num % 2 !== 0) return true;
    return false;
  })

  return res;

};

// console.log(onlyOdds(1,2,3,4,5));//


//. find
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let found = ['hey', 'whats', 'up'].find(word => word.length > 7);
// console.log(found);//hey
// console.log(['hey', 'whats', 'up'].find(word => word.length > 2))



// reduce
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// sumArr
let sumArr = (nums) => {
  let sum = nums.reverse().reduce(function(acc, el, i, arr){
    console.log('acc: - ',acc, 'el: - ',el);
    return acc + el;// 6
  }, 0);// initial value, if one is not provided, it defaults to first value in arr

  return sum;
};

console.log(sumArr([1,2,3]));

let sumArr2 = (nums) => nums.reduce((acc, num) => acc + num,0);//9
console.log(sumArr2([2,3,4]))
