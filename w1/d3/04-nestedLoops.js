// Nested Loops
// Sometimes a single loop won't quite give you enough pointers to fully work
// your way through a given data set. In those cases, we can consider writing a 
// loop within a loop to accomplish our tasks. Let's take a look at a simple
// setup below:
for (let i = 0; i < 4; i++) { // outer loop controlled by i
    for (let j = 0; j < 3; j++) { // inner loop controlled by j
        console.log(i, j) // before running the code, what do we expect to happen?
    }
}
// As you can see, our outer loop is "paused" in execution until our inner loop
// can complete. Since our inner loop is defined within the bounds of our outer
// loop, the full cycle of our inner loop is part of each individual iteration
// of our outer loop. Let's explore how we can use this a bit more practically


let arr = [
    ["a", "b", "c"],
    ["d", "e"]
];
// Here we're given a two dimensional array, and we want to log each individual
// element of all the sub arrays.
console.log(arr.length) // Notice the length of our array is 2
                        // This is because it has 2 subarrays as elements
for (let i = 0; i < arr.length; i++) { // Outer loop iterates over the array
    let subArr = arr[i];  // initialize a variable holding the subarray
    console.log(subArr);
    for (let j = 0; j < subArr.length; j++) { // Inner loop iterates over 
                                              //subarray
        let letter = subArr[j]; // Initialize variable holding each letter
        console.log(letter);  // Print that letter to our console 
    }
}

// Breaking it down, we can see that our outer loop is going to let us take a 
// look at the individual subarrays, and the inner loop is letting us look at
// the elements inside of each subArray. Let's use this to solve a problem!

/* 
Write a function that intakes an array of numbers and a targetSum. 
The function should return true
if ANY combination of 2 numbers in the array equals the targetSum.
Can be the same number...
*/

/*
Plan:
Define a function called twoSum
  Iterate over the array
    Define num1
    Iterate over the array
      Defiine num2
      Check if num1 + num2 is equal to the targetSum
        return true
  return false
*/

let twoSum = function(nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = 0; j < nums.length; j++) {
      let num2 = nums[j]
      if (num1 + num2 === targetSum) return true;
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3], 4)) // true
console.log(twoSum([1, 2, 3], 6)) // true
console.log(twoSum([1, 2, 3], 7)) // false
console.log(twoSum([1, 2, 3], 0)) // false
console.log(twoSum([1, 2], 5)) // false




/* 
Write a function that intakes an array of numbers and a targetSum. 
The function should return true
if a combination of 2 numbers in the array equals the targetSum.
Do not include the same element added together.
*/

/*
Plan:
Define a function called twoSumExclusive
  Iterate over the array
    Define num1
    Iterate over the array to start where j = i + 1
      Defiine num2
      Check if num1 + num2 is equal to the targetSum
        return true
  return false
*/

let twoSumExclusive = function (nums, targetSum) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 + num2 === targetSum) return true;
        }
    }
    return false;
}

console.log(twoSumExclusive([1, 2, 3], 4)) // true
console.log(twoSumExclusive([1, 2, 3], 6)) // false
console.log(twoSumExclusive([1, 2, 3], 7)) // false
console.log(twoSumExclusive([1, 2, 3], 0)) // false
console.log(twoSumExclusive([1, 2], 5)) // false


// // your code here

// // let myFunc = function(arg1, arg2){
// //     //...                              
// // }

// // // let myFunc = (arg1, arg2) => {
// // // 	console.log("Here are your params: ", arg1, arg2)
// // // }

// // // myFunc("Hi", "there")

// // // let sumArray = (arr) => { // >= || <=
// // // 	let sum = 0;
// // //     for (let i = 0; i < arr.length; i++){
// // //         let currentNum = arr[i]
// // //         console.log("The current number is: ", currentNum)
// // //     	sum += currentNum
// // //       	console.log("The sum is now: ", sum)
// // //     }
// // //     return sum
// // // }


// // // console.log(sumArray([1,2,3,4,5]))


// // // let myAdder = (num1, num2) => num1 + num2

// // // let nums = [1,2,3]
// // // console.log(nums)
// // // nums[1] = "changed!"
// // // console.log(nums)



// // let stringChanger = (word) => {
// // 	let newWord = ""
// //     for (let i = 0; i < word.length; i++){
// //     	let currentChar = word[i]
// //         console.log("current character:", currentChar)
// //         if (currentChar === "e") {
// //         	newWord += "u"
// //         } else {
// //         	// newWord = newWord.concat(currentChar)
// //             newWord += currentChar
// //         }
// //         console.log("progress on new word:", newWord)
// //     }
// // 	return newWord
// // }

// // // console.log(stringChanger("hello"))


// // let word = "Hello"
// // console.log(word)
// // word = "Hullo"
// // // console.log(word)

// // // let num = 1
// // // num++

// // word = word.concat(" there!")
// // console.log(word)

// //          0,1,2
// // let arr1 = [1,2,3]
// // console.log(arr1.push("new item!"))
// // console.log(arr1.pop())
// // console.log(arr1)

// // let popAdder = (nums) => {
// //     nums = nums.slice()
// //     // let nums2 = nums
// // 	let sum = 0
// //     while (nums.length > 0){
// //         let lastElement = nums.pop()
// //         console.log("Last element: ", lastElement)
// //     	sum += lastElement
// //         console.log("Current value of sum:                 ", sum)
// //         console.log("---------------------------------------------")
// //         console.log("State of array:", nums)
// //         console.log("---------------------------------------------")
// //     }
// //     return sum
// // }

// // let numbers = [1,2,3,4,5,6]

// // console.log(popAdder(numbers))
// // console.log("Array that we called our function on:", numbers)

// function shiftMultiplier(nums, modify){
//     // nums = nums.slice()
  	
//     // let copy = nums.slice()
//     if (!modify){
//     	nums = nums.slice()
//     }
// 	let product = 1;
//     while(nums.length > 0){
//     	let firstElement = nums.shift()  
//         console.log("First element: ", firstElement)
//     	product *= firstElement
//         console.log("Current value of product:                 ", product)
//         console.log("---------------------------------------------")
//         console.log("State of array:", nums)
//         console.log("---------------------------------------------")
//     }
// 	return product
// }

// let numbers = [1,2,3,4,5,6]

// // console.log(shiftMultiplier(numbers))
// console.log(numbers)

// console.log(numbers.unshift(10))

// console.log(numbers)

// your code here
// let twoSum = (nums, target) => {
// 	let i = 0
//     let result = []
//     while(i < nums.length){
//     	let j = 0
//         let iElement = nums[i]
//         	console.log('iElement is: ' + iElement)
//         while (j < nums.length){
//         	let jElement = nums[j]
//             	console.log('			jElement is: ' + jElement)
//             if(iElement + jElement === target){
//                   	console.log(iElement + ' + ' + jElement + ' = ' + target)
//             	// return true
// 					result.push([iElement, jElement])
//             }
//           j++
//         }
//       i++
//     }
//   return result
// }
// console.log(twoSum([1,2,3,4,5,6], 12))
// console.log(twoSum([1,2,3,4,5,6], 13))

let twoSumExclusive = (nums, target) => {
	let i = 0
    let result = []
    while(i < nums.length){
    	let j = i + 1
        let iElement = nums[i]
        console.log('iElement is: ' + iElement)
        while (j < nums.length){
        	let jElement = nums[j]
          	console.log('			jElement is: ' + jElement)
            if(iElement + jElement === target){
               	console.log(iElement + ' + ' + jElement + ' = ' + target)
            	// return true
                let shouldBePushed = true;
				// for (let k = 0; k < result.length; k++){
				// let currentPair = result[k]
				//    if(currentPair[0] === iElement && currentPair[1] === jElement || currentPair[0] === jElement && currentPair[1] === iElement){
				// 	 shouldBePushed = false
				// 	}
				// }
		 		if (shouldBePushed === true) {
                	result.push([iElement, jElement])
                }
            }
          j++
        }
      i++
    }
  return result
}
console.log(twoSumExclusive([1,2,3,4,5,6], 6))
console.log(twoSumExclusive([1,2,3,4,5,6], 13))




