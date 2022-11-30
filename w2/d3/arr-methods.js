/*



  Array methods!
  - forEach
  - map
  - filter
  - reduce
  - find
*/

//for each

// for(let i = 0; i < arr.length; i++) {
//   // console.log(i)
// }

//forEach
// forEach - touches every element to modify or access it
//The forEach() method executes a provided function once for each array element.
//for each does not return anything
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (num, i, arr) {
//   // console.log(num)
// });

// let includeTwo = (nums) => {
//   for(let i = 0; i < nums.length; i++) {
//     let el = nums[i];
//     if(el === 10) {
//       return true;
//     }
//   }
//   return false;
// }

let includeTwo = (nums) => {
  // let bool = false;
  let arr = [];
  //we cannot return
  //we cannot return i a foreach but we can reassign or modify variables
  nums.forEach((el, i) => {
    console.log(i);
    if (el === 10) {
      // bool = true
      arr.push(el);
    }
  });

  return arr;
};

// console.log(includeTwo(nums));

//.map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let doubledNum = (nums) => {
  // return nums.map(function(num) {
  //   return num * 2;
  // });
  // return doubled;
};

// console.log(doubledNum(nums))

//filter
//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

let onlyOdds = (nums) => {
  return nums.filter((num, i, arr) => {
    if (num % 2 !== 0) {
      return true;
    }
  });
};

// console.log(onlyOdds(nums));

//find
//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let words = ["cool", "words", "yeah"];
let found = words.find((word) => word.length > 4);
// console.log(found);


//reduce!
let sum = (nums) => {
  let result = nums.reduce((acc, num, i, arr) => {
    console.log(acc, num, i, arr);
    return (acc += num);
  }, 10);//0 is our initial value, if we do not provide one it defaults to the firstvalue in the arr

  return result;
};

// console.log(sum(nums));
let nums = [1, 23, 34, 10, 12];


let max = (nums) => {
  let res = nums.reduce((largest, num) => {
    console.log(largest, num);
    if(largest > num) {
      return largest;
    } else {
      return num;
    }
    // largest > num ? largest : num;
  });

  return res;
}

console.log(max(nums))
