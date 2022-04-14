// 4. Improve and refactor



// Write a function rotateRight(arr, num) that takes
// in an array and a number as args. The function should
// return a new array where the elements of the array
// are rotated to the right num times. The function should
// not mutate the original array and instead return
// a new array

// 1. Understand the problem
//      a. function that accepts an array and integer
//      b. make a copy of the array
//      c. rotate elements of array right num times
//      d. return new array

// 2. Make a plan (pseudo code)
//      a. copy the array
//      b. create a loop for num times
//      c. move last ele to front each iteration
//      d. return new array

// 3. Carry out the plan (write code)

let rotateRight = function (arr, num) {
    let newArr = arr.slice();

    for (let i = 0; i < num; i++) {
        let el = newArr.pop();
        newArr.unshift(el);
    }

    return newArr;
}

let testArr = ['horse', 'chicken', 'pig', 'cow'];

console.log(rotateRight(testArr, 2)); // ['pig', 'cow', 'horse', 'chicken']


// 4. Improve and refactor