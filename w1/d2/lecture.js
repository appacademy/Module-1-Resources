// // // Strings!
// // // let string1 = "Hello!"
// // // let string2 = 'Hello!'
// // // let string3 = `Hello!`

// // // // console.log(string1 === string2)

// // // let string4 = "What's Up?"
// // // let string5 = '"Join a bootcamp," they said.'
// // // let string6 = '"That\'s not fair" screamed my toddler'

// // // // let string7 = "Start with double'

// // // // .length?
// // //             012345
// // // let string1 = "Hello!"
// // // console.log(string1.length)
// // // console.log(string1[0])
// // // console.log(string1[1])
// // // console.log(string1[2])
// // // console.log(string1[3])
// // // console.log(string1[4])
// // // console.log(string1[5])
// // // thing.length-1
// // // console.log(string1[6])

// // // let playoffs = "playoffs"
// // // console.log(playoffs)
// // // playoffs = playoffs + playoffs
// // // console.log(playoffs)
// // // let firstIndexOfP = playoffs.indexOf("p")
// // // console.log("Index of the second p: ", playoffs.indexOf("p", firstIndexOfP+1))



// // // console.log("Index of the letter l: ", playoffs.indexOf("l"))
// // // console.log("Index of the letter y: ", playoffs.indexOf("y"))
// // // console.log("Index of the letter f: ", playoffs.indexOf("f"))

// // //functions!

// // // function secondIndex(string, letter){
// // //     console.log("The value of string is:", string)
// // //     console.log("The value of letter is:", letter)
// // //     let firstIndex = string.indexOf(letter)
// // //     console.log("The index of the first " + letter + " in " + string + " is:", firstIndex)
// // //     let secondIndex = string.indexOf(letter, firstIndex+1)
// // //     console.log("The index of the second " + letter + " in " + string + " is:", secondIndex)
// // //     return secondIndex
// // // }

// // // console.log(secondIndex("squeeze", "e"))

// // // Create a function that accepts three numbers as paramters and returns the
// // // sum of all of those numbers.
// // // sumOfThree

// // function sumOfThree(num1, num2, num3) {
// //     console.log("Input nums:", num1, num2, num3)
// //     let sum = num1 + num2 + num3
// //     console.log("Sum of input nums:", sum)
// //     return sum
// // }

// // // console.log(sumOfThree(2, 4, 6))
// // let twelve = sumOfThree(2, 4, 6)
// // // console.log(typeof sumOfThree)
// // // console.log(typeof twelve)
// // console.log(12 === twelve)

// // Conditionals!

// // function isGreaterThan100(num) {
// //     if (num > 100) {
// //         console.log("Number is greater than 100!")
// //     }
// //     else if (num > 50) {
// //         console.log("Number is greater than 50!")
// //     }
// //     else if (num > 20) {
// //         console.log("Number is greater than 20!")
// //     }
// //     else if (num > 10) {
// //         console.log("Number is greater than 10!")
// //     } else {
// //         console.log("Number is less than 10!")
// //     }

// //     return num
// // }

// // console.log(isGreaterThan100(75))

// // Loop
// // Prompt: write a function that accepts some number and logs all even numbers 
// // from 0 up to and including that number (if its even)
// // evenLogger

// function evenLogger(number) {
//     // for(let i = 0; i <= number; i+=1){
//     //     if (i % 2 === 0) console.log(i)
//     //     // console.log(i)
//     // }
//     let i = 0;
//     while (i <= number) {
//         if (i % 2 === 0) console.log(i)
//         i++
//     }
//     // return goes here!
// }

// // evenLogger(7)
// // console.log(evenLogger(7))

// // Prompt: Character Logger
// // Write a function that accepts a string as an input and logs every character
// // in that string.

// // for loop
// // 

// function characterLogger(string) {
//     for(let banana = 0; banana < string.length; banana++){
//         // return "END"
//         //                0, 1, 2, 3, ...
//         let char = string[banana]
//         console.log(char)
//     }
//     // {
//     //     let i = 0;
//     //     while (i < string.length) {
//     //         let char = string[i]
//     //         console.log(char)
//     //         i++
//     //     }
//     // }
//     return "Loop completed!"
// }

// (characterLogger("Journey before destination"))

// // function  logBetween(low, hi){
// //     // while (low <= hi){
// //     //     console.log(low)
// //     //     low++
// //     // }
// //     for (let i = low; i <= hi; i++){
// //         console.log(i)
// //     }
// // }

// // logBetween(1,10)


// // function nameReverse(firstName){
// //     let invertName = ""
// //     let flip = firstName.length-1
// //     while (flip >=0){
// //         invertName += firstName[flip]
// //         flip--
// //     }
// //     return "Reversed name = " + invertName
// // }

// // console.log(nameReverse("bill"))


// Arrays!!

// let arr = [1, 2, 3, 4]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// let arr2 = [
//     42,                 //0
//     false,              //1
//     "Let's go Pens!",   //2
//     undefined,          //3
//     [[1], 2, [3]]       //4
// ]

// console.log(arr2[3].indexOf("e"))

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = arr1.concat(arr2)
console.log(arr3)
console.log("-----------")
console.log(arr1)
console.log(arr2)

//prompt: SumArray

function sumArray(array) {
    // your code here...
    console.log("The input array is:", array)
  	let sum = 0;
  	for(let i = 0; i<array.length; i++ ){
      console.log("Sum at start of loop:", sum)
      let currentNum = array[i]
      console.log("The current index is",i)
      console.log("The current number is", currentNum)
      sum = sum + currentNum
      console.log("Sum at end of loop:", sum)
      
      // sum+=array[i]
    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30