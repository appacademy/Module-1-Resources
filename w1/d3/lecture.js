// // Function Declaration Syntax
// function someFunctionName(/*Params*/){
// // Do stuff
// // return value (Implicit undefined)
// }


// // Function Expression Syntax
// let myFunctionVariable = function(var1, var2){
// // Do stuff
// // do some more
// // return value (Implicit undefined)
// }


// // Function Expression Syntax
// myFunctionVariable = function(var1, var2, var3){
// // Do different stuff
// // return value (Implicit undefined)
// }
// // Function Call		
// someFunctionName(myFunctionVariable);
// 							// ^
//               // |
           // Callback Function


// console.log(“Hello World”)
// console.log(myFunctionVariable)
// console.log(someFunctionName)



// let myString = “Hello World”;
// myString[0] = “h”
// let myArr = [] // array
// for(let i = 0; i < myString.length; i++){
//  myArr[i] = myString[i]
// }
// // toCharArray
// console.log(myString)
// console.log(myArr)
// myArr[0] = “h”
// myString = “”
// for(let i = 0; i < myArr.length; i++){
//  myString += myArr[i]
// }
// // toString
// myArr.toString()
// console.log(myString)



// let moviesAndTV = [‘Stardust’, ‘Spiderman’, ‘Westworld’]
// 					// shift 					// push
// 					// unshift					// pop
// let myPop = myArr.pop();
// 	// function
// myArr.newPropertyCalledPop = myPop
// 	// method				//function
// console.log(myArr.newPropertyCalledPop)
// 								// no () means not executing
// console.log(myArr)
								// () means invoke function/method
// myArr.length // number ++
// myArr.push // function
// myArr.newProp = true



// for(let i = 0; i < 5; i++){
//  console.log(i)
//  for(let j = 0; j < 5; j++){
//  	console.log(i, j)
//   for(let k = 0; k < 5; k++){
//    console.log(i, j, k)
//   }
//  }
// }




// for(let i = 0; i < 5; i++){
//  console.log(i)
//  while(){
//   // code block
//  }
// }
// if(true){
//  if(true){
//  console.log(“TRUE!“)
//  }
// }




// Goal is to get the sum of a 2d array
//  Make a total variable
//.  Itterate through the parent array
//.  for each child array, itterate through elements
//.    Add each element to a running total
//.  return total


let my2DArr = [
  [5, 10, 15],
 [20, 25, 30],
 [35, 40, 45]
]

let get2DSum = function(arr){
let sum = 50

for(let i = 1; i < arr.length; i++){
  let curArr = arr[i]

  for(let j = 0; j < curArr.length; j++){
    // sum += arr[i][j];
    let curArr = arr[i]
    let num = curArr[j]
    sum = sum + num
  }
}
  return sum
}


console.log(get2DSum(my2DArr))




// ******** Additional notes from last cohort ********


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

// let twoSumExclusive = (nums, target) => {
// 	let i = 0
//     let result = []
//     while(i < nums.length){
//     	let j = i + 1
//         let iElement = nums[i]
//         console.log('iElement is: ' + iElement)
//         while (j < nums.length){
//         	let jElement = nums[j]
//           	console.log('			jElement is: ' + jElement)
//             if(iElement + jElement === target){
//                	console.log(iElement + ' + ' + jElement + ' = ' + target)
//             	// return true
//                 let shouldBePushed = true;
// 				// for (let k = 0; k < result.length; k++){
// 				// let currentPair = result[k]
// 				//    if(currentPair[0] === iElement && currentPair[1] === jElement || currentPair[0] === jElement && currentPair[1] === iElement){
// 				// 	 shouldBePushed = false
// 				// 	}
// 				// }
// 		 		if (shouldBePushed === true) {
//                 	result.push([iElement, jElement])
//                 }
//             }
//           j++
//         }
//       i++
//     }
//   return result
// }
// console.log(twoSumExclusive([1,2,3,4,5,6], 6))
// console.log(twoSumExclusive([1,2,3,4,5,6], 13))




