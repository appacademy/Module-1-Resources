/*

   Array methods!
    - forEach
    - map
    - filter
    - reduce
    - find

*/

//what we know
let arr = [1, 2, 3];
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//forEach - touches every element of an array, modify or access it
//forEach does not return anything
//The forEach() method executes a provided function once for each array element.

let numsArr = [1, 2, 3, 4, 5];
//print out the numbers of the array
numsArr.forEach(function (el, i, arr) {
  // console.log(el, arr, i )
});

//cannot return in a for each
let includesTwo = (arr) => {
  // console.log(arr);
  let bool = false;

  arr.forEach((el, i, arr) => {
    // console.log(el)
    if (el === 2) {
      bool = true;
      // return true;cant do this in a for each but you could make a boolean that you change the value of
    }
  });

  return bool;
};

// console.log(includesTwo(numsArr));

//.map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//return is a new array
let doubledNum = (...nums) => {
  // console.log(nums);[ 1, 2, 3 ]
  // let res = [];
  // for(let num of nums) {
  //   res.push(num * 2)
  // }
  // return res;

  //same as above but with map
  //we can return res or nums.map directly, either will work
  let res = nums.map((num) => num * 2);//[2, 4, 6]
  //we are passing every element in the arr to the callback function individualy
  //we are taking the return of the callback and putting in a new array, in this case its res
  console.log(res);//
};
// console.log(doubledNum(1,2,3,4,5));

//.filter
//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

let onlyOdds = (...nums) => {
  // console.log(nums);
  // let res = [];
  // for(let num of nums) {
  //   if(num % 2 !== 0) {
  //     res.push(num);
  //   }
  // }
let res = nums.filter((num) => {
    if(num % 2 !== 0) {
      return true
    }
    return false;
  });
  return res;
};

// console.log(onlyOdds(1,2,3,4,5,6,7,8));

//.find
//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let found = ['hey', 'whats', 'up'].find((word) => word.length > 4);
// console.log(found);



//reduce
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//sum arr
let sumArr = (nums) => {

  let sum = nums.reduce((acc, el, i) => {
    console.log('acc',acc, 'el', el);
    return acc += el;
  }, 0);//second arg to reduce is a initial value, initial value is what acc will start as
        //if we do not provide a acc arg, then it will default to the first element of the arr
  return sum;
};

// console.log(sumArr([1,2,3]));//4
