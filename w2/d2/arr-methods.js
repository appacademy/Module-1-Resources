/*
 Array Methods!!
  - forEach
  - map
  - filter
  - reduce
  - find

*/

//for each
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  // console.log(arr[i], num);
}

//forEach
//forEach - touch every element to access or modify it
//allows us to call a function for each element in the arr
arr.forEach(function (num, i, arr) {
  // console.log(num);
});

let nums = [1, 12, 49, 10, 55, 132];
//goal => return true or false if a number in this arr, is 10
//cannot return in a forEach
//for loop
let includesTwo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el === 10) {
      return true;
    }
  }
  return false;
};

// console.log(includesTwo(nums))

let includesTwoForEach = (arr) => {
  // let bool = false;
  let arr2 = [];
  //cannot return in aforEach
  arr.forEach((el, i) => {
    if (el === 10) {
      //touching and modifying in element
      // bool = true
      arr2.push(el);
    }
  });
  return arr2;
};

// console.log(includesTwoForEach(nums));

//.map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//similar to forEach
//takes in element index and arr
//return an arr

//return a new arr where numbers are doubled
let nums2 = [1, 2, 3, 4, 5]; //[2,4,6]

let doubledNums = (nums) => {
  //the return value of the each anon function call, is pushed into a new arr
  let doubled = nums.map(function (num) {
    return num * 2;
  });

  return doubled;
};

// console.log(doubledNums(nums2));

//filter
//to create a new arr of elements that meet a specific condition
//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

//function that wants only numbers that are odd
//let nums2 = [1, 2, 3, 4, 5]; //[2,4,6]
//need to return true or false
let onlyOdds = (nums) => {
  let odds = nums.filter((num) => {
    if (num % 2 === 0) {
      return false;
    } else {
      return true;
    }
  });
  return odds;
};

// console.log(onlyOdds(nums2));//[ 1, 3, 5 ]

//find
//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
//return the first match, that meets a specific condition
//return a value as opposed to an array

let nums3 = ["cool", "words", "yes"];
const found = nums3.find((word) => word.length > 4);
// console.log(found)//words

//reduce
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//reduce takes in a accumaltor and a value,
//that accumulators value will persist through function calls
// let nums5 = [3, 4, 5]; //12
let sum = (nums) => {
  //first ele in reduce is the accumulator
  let result = nums.reduce((acc, num, i, arr) => {
    // console.log(acc, num, i, arr);
    return (acc += num);
  }, 0); //starting acc, if you dont provide, it defaults to the first element of the arr

  return result;
};

// console.log(sum(nums5));

//lets build a function that returns the largest number
let nums5 = [3, 4, 5, 12, 331, 2, 11]; //12
let maximum = (nums) => {
  let result = nums.reduce((largest, num) => {
    // console.log(largest, num)
    if (largest > num) {
      return largest;
    } else {
      return num;
    }
  }); //first element default to be the largest at the start
  return result;
};

console.log(maximum(nums5));
