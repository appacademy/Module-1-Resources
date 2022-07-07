// your code here

// console.log("banana"["banana".toUpperCase().indexOf("A", 2)]) // Method Chaining

// console.log("baNANA".toLowerCase().indexOf("a", 2))
// "banana" === "banana" // true

// console.log("Hello\nWorld")
// console.log("World")
// console.log("aa4aa".indexOf("4"))


// let dog = ''; // truthy
// let cat; // undefined - falsey
// if (cat) { // false
//  console.log('cat is true')
// } else if (dog) {
//  console.log('dog is true and cat is false')
// } else {
//  console.log('neither cat nor dog is true') // implicit ;
//  console.log()
// }



// let someCondition = false;
// let someOtherCondition = true;
// if(someCondition) {
//  console.log("It was true");
// } else if (someOtherCondition){
// } else console.log("Gonna Run")



// for loops -> counters   (deterministic)
// while loops -> conditions (non-deterministic)


// Find the index of the third 'a' in a given string
// let myString = "banananana" // 5
// for(/*Variable Declaration*/; /*Condition*/; /*Counter*/){ /* Code to repeat */}
// let counter = 0;
// let thirdA = -1;
// for(let i = 0; i < myString.length; i++){
//  if(myString[i] === "a"){
//   counter++
//   if(counter === 3){
//    thirdA = i
//    break;
//   }
//  }
//  console.log("index:", i)
// }
// console.log(thirdA);



// Find the index of the third 'a' in a given string
// let myString = "bnbnbnbnb"//"banananana" // 5
// index: 8
// counter: 0

// let counter = 0;
// let index = -1;
// while(counter < 3){
//  index++ // index: 0
//  if(myString[index] === 'a'){
//  	counter++
//  }
//  if(index > myString.length){
//   index = -1
//   break;
//  }
// }
// console.log(index)
// let myArray = ["Hello", "Great", "World"]
// let myVar = myArray[0]
// for(let i = 0; i < myVar.length; i++){
// 	console.log(myVar[i])
// }


function averageOfFour(arrOfNums){
 let sum = 0;
 for(let i = 0; i < arrOfNums.length; i++){
 	sum += arrOfNums[i]
 }
 console.log("Sum:", sum)
 let average = sum / arrOfNums.length
 return average;
 console.log("I ran")
 // return undefined
}
console.log(averageOfFour([2,2,2,2])) // implicit return of undefined
console.log(averageOfFour([3, 5, 6, 7, 54, 7]))




// ******** Additional notes from last cohort ********

// your code here
// console.log("hello" === 'hello')

// console.log("What's up?")
// console.log('"Join a bootcamp,"  they said. "It\'ll be fun," they said.')
// console.log("Here's a backslash")
//              0123
// let myString = "CATS"

// console.log(myString.length)
// console.log(myString[0])
// console.log(myString[1])
// console.log(myString[2])
// console.log(myString[3])
// console.log(myString[4])
//              01234567 
// let playoffs = "playoffs                     f         "
// console.log(playoffs.length)
// // console.log(playoffs.indexOf("f", playoffs.indexOf("f") + 2))
// console.log(playoffs.indexOf(" f"))

// let firstName = "Bill"
// let title = "Module 1 Lead"

// let result = firstName + " " + title
// console.log(result)
// console.log(firstName, title)

// function myFunc(str1, str2){
// 	// let returnString = str1 + " " + str2
//     let returnString = str1.concat(" ", str2)
//     return returnString
// }

// let result2 = myFunc(firstName, title)
// let result3 = myFunc("This is", "a test")
// console.log(result2)
// console.log(result3)


// Functions
// A tool we make that can carry out a task
// -- ex - addTwoNumbers, can be used any number of times to add in two nums

// function blankFunc(){}
// console.log(blankFunc)

// function helloWorld(){
// 	console.log("Hello world!")
//     return "function ends here!"
//     console.log("Here's another log")
// }

// let returnValue = helloWorld()

// console.log(returnValue)

// function printName(name){
// 	console.log("Hello there")
//     console.log(name)
// 	return "this is my returned value"
// }


// printName("David")

// // let davidReturn = printName("David")
// // console.log(davidReturn)

// function sum(num1, num2){
//     console.log("Inside of sum function!")
// 	return num1 + num2
// }

// let sum1 = sum(3, 5)
// let sum2 = sum(4, 9)
// let sum3 = sum(6, 7)
// console.log(sum1 + sum2 + sum3)


// let number = 5 

// function isFive(num){
//   if (num > 5){
//       return num + " is greater than 5"
//   } else if (num < 5) {
//       return num + " is less than 5"
//   } else {
//       return num + " is 5!"
//   }
// }

// let ans4 = isFive(4)
// let ans6 = isFive(6)
// let ans5 = isFive(5)

// // console.log(ans4)
// // console.log(ans6)
// console.log(ans5)

// function petIdentifier(pet){
// 	if (pet === "cat") {
//     	return "This is a cat"
//     } else if (pet === "dog"){
//     	return "This is a dog"
//     } else if (pet == "tiger"){
//     	return "This is a tiger"
//     } else {
//     	return "I'm not sure what this is"
//     }
// }

// console.log(petIdentifier("tiger"))

// let num = 0
// let sum = 0
// while (num <= 10){
   
//     console.log("The current number is:",num)
// 	if (num % 2 === 0) {
//     	console.log(num + " is an even number")
//         sum += num
//     }
// 	num+=2
//     console.log(sum)
// }

// console.log("total sum of even nums: ", sum)

// function sumToN(n){
// 	let sum = 0;
//     for (let i = 1; i <= n; i++){
//         console.log("current i:", i);
//     	sum += i;
       
//     };
// 	return sum;
// }

// console.log(sumToN(15))

// function indexer(string){

// 	// for(let i = 0; i < string.length; i++){
// 	// console.log(string[i])
// 	// }
// 	let i = 0;
// 	while (i < string.length) {
//     	console.log(string[i]); i++
//     }

// }

// indexer("Journey before destination")
        //  1 0,  ,    2   ,   3  ,      4
// let arr1 = [1, "a", indexer, [1,2], "some string"]
// Array
// console.log(arr1[4])

// for (let i = 0; i < arr1.length; i++){
// 	let currentElement = arr1[i]
//     console.log(currentElement)
// }

// arr1[2](arr1[4])
// let subArr = arr1[3]
// console.log(arr1)
// console.log(subArr)
// let arr1 = [1, "a", indexer, [1,2], "some string"]
// let arr2 = arr1
// // let arr2 = [1, "a", indexer, [1,2], "some string"]
// // console.log(arr1.indexOf([1,2]))
// console.log(arr1)
// console.log(arr2)
// console.log(arr1 === arr2)

// let arr3 = [1,2]
// let arr1 = [1, "a", indexer, [1,2], "some string"]

// let concatArr = arr1.concat(arr3, "extra stuff!", "more things!", 5)
// console.log(concatArr)
// console.log(arr1)
// console.log(arr3)

//          0, 1   ,2, 3
// let collection = [1,[2,3],4,[5,6]]
// function summation(nums){ // define function to sum nested arrays
// 	let sum = 0 // initialize sum at 0
//     for(let i =0; i < nums.length; i++){ // define loop to iterate over input array
// 		let currentElement = nums[i] // initialize variable for currentElement
//         if (Array.isArray(currentElement) === true){ // check if currentElement is
//                  									 // an array
//         	for(let j = 0; j < currentElement.length; j++){ // define loop if array
//             	let subElement = currentElement[j]  // pull out subElement   
//                 sum += subElement
//             }
//         } else {
// 			sum += currentElement        
//         }
//     }
// 	return sum
// }

// console.log(summation(collection))