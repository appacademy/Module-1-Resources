/*

*John's Solve
/*

Write a function twoSum(arr, target) that accepts an array and a target number as args.
The function should a return a boolean indicating if two distinct numbers of the array add up to the target value.
You can assume that input array contains only unique numbers.

In other words...
If you have a collection of unique numbers and a target sum,
can you figure out if adding up any of the two numbers gives you
that sum?

How would I approach this just as a human being?
Do I know how to tell my computer to do that?
- What can JavaScript do that replicates that behavior?
- Here, we might think, "for loops"
- If you ever need to "iterate" through a collection, we might use a for loop
Then, can the computer do something BETTER than my brain can?

But what if you're not allowed to add a number to itself?

*/


function twoSum(array, targetNum) {

  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    // console.log(firstNum)
    for (let j = 0; j < array.length; j++) {
      let secondNum = array[j];
      // console.log(secondNum)
      if (firstNum + secondNum === targetNum) {
        return true;
      }
    }
  }

  return false;

}

function twoSumExclusive(array, targetNum) {

  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    // console.log(firstNum)
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      // console.log(secondNum)
      if (firstNum + secondNum === targetNum) {
        return true;
      }
    }
  }

  return false;

}

// What if we couldn't add a number to itself?
// What does that pattern look like?
// 1 + 2, 1 + 3, 1 + 4
// 2 + 3, 2 + 4
// 3 + 4
// 4 we're good


let testArray = [1, 2, 3]

console.log(twoSum(testArray, 4)) // true
console.log(twoSum(testArray, 6)) // true
console.log(twoSum(testArray, 7)) // false
console.log(twoSum(testArray, 0)) // false
console.log(twoSum([1, 2], 5)) // false

console.log(twoSumExclusive(testArray, 4)) // true
console.log(twoSumExclusive(testArray, 6)) // false
console.log(twoSumExclusive(testArray, 7)) // false
console.log(twoSumExclusive(testArray, 0)) // false
console.log(twoSumExclusive([1, 2], 5)) // false
