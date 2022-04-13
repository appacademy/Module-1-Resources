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