// your code here
// function addFive (num) {
// 	return num + 5
// }

// let addFive = function(num) {
// 	return num + 5;
// };

// // console.log(addFive(3))
// console.log(addFive);

// let addArray = function(array){
// 	let sum = 0
//     for (let i = 0; i < array.length; i++){
//     	sum += array[i]
//     }
//   	return sum
// }

// let nums = [7, 42, 654, 36, 20]

// console.log(addArray(nums))

// first class object
// 1. Stored in a variable
// 2. Pass as an argument to another function
// 3. Returned as a value from another function

// your code here
// Mutability

// let arr = [0, 1, 2, 3]

// let string = '0123'

// arr[0] = 100

// string[0] = '9'

// console.log(arr)
// console.log(string)

// string = "new string"

// console.log(string)

// let arr = [0, 1, 2, 3]

// // push 
// let someVar = arr.push(4)
// // console.log(someVar)

// arr.push(5, 6, 7)
// console.log(arr)

// arr.push(true)
// console.log(arr)

// // pop
// let lastEle = arr.pop("test")

// console.log('mutated arr:', arr)
// console.log('popped element:', lastEle)

// let arr = [0, 1, 2, 3]
// // .unshift
// arr.unshift(-2, -1)

// console.log(arr)

// let shiftedEle = arr.shift()
// console.log(shiftedEle)
// console.log(arr)

let names = ["bill", "cameron", "jojo", "peter", "cody"]
// console.log(names.shift())
// console.log(names)

let arrayMutator = function(arr){
	// for (let i = 0; i < arr.length; i++){
	// console.log('current i value: ' + i)
	// 	console.log(arr.pop())
	// 	console.log('new array length: ' + arr.length)
	// }
    while (arr.length > 0) {
      console.log("length at beginning of loop:", arr.length)
    	console.log(arr.pop())
      console.log("length at end of loop:", arr.length)
    }
}

arrayMutator(names)
console.log(names)

// let nestedLoopFunction = function(){
// 	for (let i = 0; i < 4; i++){
//     	for (let j = 0; j < 3; j++){
//         	console.log(i, j)
//         }
//     }
// }

// nestedLoopFunction()

// let twoDimensional = [
//   [1,2,3], // 0
//   [4,5,6, 10], // 1
//   [7,8,9, 45, 62], // 2
//   undefined,
// ]

// let twoDimensionSum = function(arr) {
// 	let sum = 0;  // sum variable to track total
// 	for (let i = 0; i < arr.length; i++){ // outer loop to pull out inner arrays
//       let subArray = arr[i] // store inner array at variable subArray
//       console.log('subArray: ', subArray) // log for assurance
//       if (Array.isArray(subArray) === false) continue;
//       // for (let j = 0; j < subArray.length; j++){ // defining inner loop to look at subArray elements
//       // 	let num = subArray[j] // key into subArray and store element as num
//       //   // let num = arr[i][j]
//       //   console.log('innerloop num: ', num) // check that we have num
//       //   sum += num; // add our num to our sum and reassign sum to that value
//       // }
//       let j = 0;
//       while (j < subArray.length){
//       	let num = subArray[j] // key into subArray and store element as num
//         // let num = arr[i][j]
//         console.log('innerloop num: ', num) // check that we have num
//         sum += num; // add our num to our sum and reassign sum to that value
//         j++
//       }
//       console.log('current sum: ', sum) // after inner loop completes, check current sum
//     }
//   return sum // return sum so that our function resolves into desired value
// }

// console.log(twoDimensionSum(twoDimensional))
					// [1,2,3]  4
                    let twoSum = function(arr, target) {
  
                        let pairs = []
                      for(let i = 0; i < arr.length; i++){
                          let outerElement = arr[i]
                          for (let j = i + 1; j < arr.length; j++){
                                 let innerElement = arr[j]
                              if (outerElement + innerElement === target) {
                                pairs.push([outerElement, innerElement])
                                console.log(pairs)
                              } 
                          }
                      }
                    return pairs
                  }
                  
                  console.log(twoSum([1,2,3], 4))
                  console.log(twoSum([1, 2, 3], 6))
                  console.log(twoSum([1, 2, 3, 4], 5))
                  
                  
                  