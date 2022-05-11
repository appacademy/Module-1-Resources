// your code here

// function declarationSyntax(param1, param2){
// 	return param1 + param2;
// };

// let expressionSyntax = function(param1, param2){
// 	return param1 + param2;
// }

// console.log(declarationSyntax(2,4))
// console.log(expressionSyntax(2,4))

// Write a function that will accept an array of numbers
// and return the sum of those numbers.
//  --use a for loop to look at each number, and add them all together
//  --will need some variable to hold the result
// let sumArray = function(numsArray){
// 	let sum = 0
//     for(let i = 0; i < numsArray.length; i++){
//       	console.log("current index: ", i)
//     	console.log("sum at start of loop: ", sum)
//       	let currentNumber = numsArray[i]
//         console.log("current number is: ", currentNumber)
//         sum += currentNumber
//         console.log("sum at end of loop: ", sum)
        
//     }
//      return sum
// }

// let sumArray = (numsArray) => {
// 	let sum = 0
//     for(let i = 0; i < numsArray.length; i++){
//       	console.log("current index: ", i)
//     	console.log("sum at start of loop: ", sum)
//       	let currentNumber = numsArray[i]
//         console.log("current number is: ", currentNumber)
//         sum += currentNumber
//         console.log("sum at end of loop: ", sum)
        
//     }
//      return sum
// }

// let nums = [1,2,3,4,5]
// // console.log(sumArray(nums))
// let sum1 = sumArray(nums)
// let sum2 = sumArray([4,5,6,7,8])
// console.log(sum1 + sum2) 

// mutability -- how a thing can or can't be changed
// strings -- immutability
// arrays -- mutable

let string1 = "bill"
let array1 = ["b","i","l","l"]
// console.log(array1)
string1 = string1.toUpperCase()
// console.log(string1 * 2)
console.log

// your code here


// console.log(arr.push(1, 0))

// console.log(arr)

// let findThree = (arr) =>{ // define function that tries to find 3
//   	arr = arr.slice()
// 	while(arr.length > 0){ // set up loop that runs while length > 0
//         let lastElement = arr.pop() // pop off lastElement of array, store in var
//         console.log("Last element: ", lastElement) // log for clarity
//     	if (lastElement === 3) { // check if last element is 3
//         	console.log("3 has been found!") // notify if found
//             return true; // return true when found
//         }
//     }
//     console.log("3 has not been found.") // notify if loop completes, 3 not found
//     return false // return false if no 3s found
// }
// let arr1 = [3,2,1,0]
// let arr2 = [0,1,2,3]
// let falseArray = [1,2]

// let result1 = findThree(arr1)
// let result2 = findThree(arr2)
// let falseResult = findThree(falseArray)

// console.log(arr1) 

// console.log(result1, result2, falseResult)
// let arr = [4,3,2]
// while (arr.length > 0) {
//      console.log("array length before pop:", arr.length)
// 	    console.log(arr.pop())
//   	console.log("Array is now length", arr.length)
// }
// console.log(arr)
// console.log(arr, "length:", arr.length)

let newArr = []

let i = 0
while (newArr.length <= 100) {
	newArr.unshift(i)
    i++
}

console.log(newArr)



// for (let i = 0; i <= 4; i++){
// 	console.log("i:", i)
// 	for (let j = 0; j<=6; j++){
//     	console.log("i is still:",i,"           j:",j)
//     }
//     console.log("i can finally increment")
// }

// let arr = [
//   ["a","b"],
//   ["c"],
//   ["d","e","f"]
// ]
// console.log(arr.length)
// let allLeters = ""
// for (let i = 0; i< arr.length; i++){
// 	let currentSubArray = arr[i]
//     console.log(currentSubArray)
// 	for(let j = 0; j < currentSubArray.length; j++){
//     	let currentElement = currentSubArray[j]
//         console.log("      current element:", currentElement)
//         allLeters += currentElement
//     }
// }
// console.log(allLeters)

// Given an array of numbers, find out if any two numbers in that array
// will add up to the target sum
// return true if we can, false if we can't

// [1,2,5]   targetSum = 4 

let twoSum = function(nums, targetSum){
    for(let i = 0; i < nums.length; i++){
        let firstNum = nums[i]
        for (let j = 0; j < nums.length; j++){
          let secondNum = nums[j]
          if (firstNum + secondNum === targetSum) return true
      }
    } 
    return false;
  }
  console.log(twoSum([1,2,3], 6))
  function funcName(){
  
  }
  




