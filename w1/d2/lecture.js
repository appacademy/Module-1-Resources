// // your code here
// // console.log('hello' === "hello");

// // console.log("What's up?")
// // console.log('"Join a bootcamp", they said, "It will be fun"')

// // console.log('What\'s up?')
// 012345
// // let greeting = "hello there";

// // console.log(greeting)
// // console.log(greeting[0])
// // console.log(greeting[1])
// // console.log(greeting[2])
// // console.log(greeting[3])
// // console.log(greeting[4])
// // console.log(greeting[5])

// // let playoffs = "playoffs"
// // console.log(playoffs.indexOf("a"))
// // console.log(playoffs.indexOf("off"))
// // console.log(playoffs[playoffs.length - 1])

// let firstName = "Bill"
// let lastName = "Adams" 
// let fullName = firstName.concat(" ", lastName)
// // console.log("Hello! My name is " + fullName)
// console.log("Hello! My name is", firstName, lastName)

// your code here

function blankFunction(param1, param2) {
	// body of function
}



// let result = sumNumbers(1, 2, 3)
// let result2 = sumNumbers(3,4,5)
// console.log(result, result2)

// console.log("Here is my result", result)

// function greet(person, person2) {
// 	console.log("Hi", person)
// 	console.log("Also hi", person2)
// }

// greet("Jeremy", "Bill")

// function sumNumbers(num1, num2, num3){
// 	// let sum = num1 + num2 + num3
// 	// return sum
//   	// console.log("The sum is", sum)
//     return num1 + num2 + num3
// }

// console.log(6 === sumNumbers(1,2,3))

// your code here
// let someCondition = false;

// if (!someCondition) {
// 	console.log("This condition is true");
// } else {
// 	console.log("This condition is false");
// }
// function numberChecker(num){
//     if (typeof num === "number"){
//      	 if(num > 5){
//     		return "This number is greater than 5"
//          } else if (num < 5) {
//     		return "This number is less than 5"
//     	 } else {
//     		return "This number is 5"
//       	 }	
//        }
// 	else {
//       return num + " is not a number"
//     }
// }

// console.log(numberChecker(Infinity))
// // console.log(typeof 5)
// Initial expression
// Condition for when we should continue looping
// Step towards completing the loop

// let i = 0

// while (i < 5){     //0 - 1 - 2 - 3 - 4 - 5
// 	console.log(i)
//     i = i + 1
// }

// console.log('the final value of i:', i)


// for (let i = 0; i < 5; i++){
//   console.log(i)
// }

// console.log('the final value of i:', i)
0123456
// let words = "Journey before destination"

// for (let i = 0; i < words.length; i++){
//     console.log("the current index is " + i) 
// 	console.log(words[i])
// }

function letterPrinter(string) {
	for (let i = 0; i <= string.length-1; i++){
    	// console.log("the current index is " + i) 
		console.log(string[i])
    }
}

letterPrinter("test")






// let element = arr[0]

// console.log(element)

// console.log(arr)
// console.log(arr2)

// let arr3 = [42, false, "Let's go Pens", undefined, [[1],2,[3]]]
// console.log(arr3[4][1])

// let arr3 = arr.concat(arr2)
// console.log(arr3)

// let result = []

// let arr3 = arr + arr2
// console.log(arr3)

// // console.log(arr3.indexOf('false'
// // console.log(arr3.length)

// function arrayElementPrinter(arr){
// 	for (let i = 0; i < arr.length; i++){
//       let element = arr[i]
//       console.log("The element at index", i, "is", element)
//     }
// }

// arrayElementPrinter(arr3)

let arr = [1, 2, 3, 4]
let arr2 = ["This", "array", "holds", "strings"]
function sumArray (arr) {
	let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
    	sum += element
    }
    return sum;
}

console.log(sumArray([]))

// console.log(typeof arr)
// console.log(Array.isArray(arr))









