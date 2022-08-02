// // // // // strings!!

// // // // // console.log("string1"); 

// // // // // What's up?
// // // // // console.log('What\'s up?') 
// // // // // console.log(`Using backticks!` === "Using backticks!")
// // // // // console.log("\"Join a bootcamp\", they said, \"It'll be fun\"")
// // // // //            01234
// // // // // let string = "hello"
// // // // // console.log(string.length);
// // // // // console.log(string[string.length - 1]);

// // // // //              0123456789

// // // // let playoffs = "playoffs playoffs"
// // // // // console.log(playoffs[2000])
// // // // // console.log(playoffs.indexOf("Flyers"))
// // // // let firstP = playoffs.indexOf("p")
// // // // // console.log("The character at index", firstP, "is:", playoffs[firstP])
// // // // // console.log("The index of the first p is at:  ", firstP)
// // // // let secondP = playoffs.indexOf("p", firstP + 1 )
// // // // console.log("The character at index", secondP, "is:", playoffs[secondP])
// // // // // console.log("The index of the second p is at: ", secondP)
// // // // // console.log("The index of the second p is at:", playoffs.indexOf("p", playoffs.indexOf("p") + 1))
// // // // // console.log()

// // // // // console.log(playoffs.indexOf("a"))

// // // // // let firstF = playoffs.indexOf("f")
// // // // // console.log("The second f is at index: ", playoffs.indexOf("f", firstF + 1))

// // // let firstName = "Bill"

// // // let title = "Module 1 Lead"

// // // // let result = firstName + " is the " + title
// // // firstName += " is the " + title + " " * 35 * 5
// // // // let result = firstName.concat(" is the ", title, "another string")

// // // // console.log("Here's a test".concat("for the class"))
// // // // console.log(result)

// // // Functions
// // // What is a function?
// // // function blankFunc () {
// // //     console.log("Hi")
// // //     return
// // // }

// // // console.log(blankFunc())

// // // function helloWorld(){
// // //     console.log("Hello world!")
// // // }

// // // let returnValue = helloWorld()
// // // console.log(returnValue)

// // //Goal: write a function that says hello to some given name
// // function greetPerson(name){ // Defining our function greetPerson that accepts 
// //                             // parameter Name
// //     let sentence = "Hello " + name; // constructing our greeing supplied param

// //     // return console.log(greetPerson("Charles"))
// //     return sentence // returning our greeting
// // }

// // console.log(greetPerson("Elif")) //invoking our greetPerson function, passing in
// //                                  //string "Elif" as our argument, console.logging
// //                                  //the return value

// // Write a function that will accept 2 numbers and return the sum of those numbers

// function sum(num1, num2){
//     debugger
//     return num1 + num2
// }

// // let three = sum(1, 2)
// // 3 === three
// console.log(sum(1,2))

//conditionals

// We want to build a function that tell us if the argument is the number 5,
// or, if its greater or less than 5

// Report if number _is_ 5
// report if number _is less than_ 5
// report if number _is greater than_ 5

// function papaya(banana) {
//     if (typeof banana !== "number") {
//         return "That's not a number!"
//     }

//     if (banana === 5) {
//         return "This number is 5"
//     } else if (banana < 5) {
//         return "This number is less than 5"
//     } else if (banana > 5) {
//         return "This number is greater than 5"
//     } else {
//         return "I'm not sure what this is"
//     }
// }
// console.log(papaya("number"))

// Loops!

// While loops
// while(some condition is true){
// repeat this block of code
//}

// function looper(numberOfLoops) {
//     // let i = 0;
//     // while(i < numberOfLoops){
//     //     console.log("Loop running!")
//     //     i++
//     // } 
//     for (let i = 0; i < numberOfLoops; i++) {
//         console.log("current value of i:", i)
//         console.log("Loop running!")    
//     }
//     return "function completed"
// }
// console.log(looper(5))

// function banana(papaya){
//     let answer = ""
//     for(let i = 0; i < papaya.length; i++){
//         let letter = papaya[i]
//         // console.log(letter)
//         answer += letter + "\n"
//     }
//     // return "function is complete!"
//     return answer
// }
// console.log(banana("Journey Before Destination"))

// function whileBanana(papaya){
//     let i = 0;
//     while(i<papaya.length){
//         let letter = papaya[i]
//         console.log(letter)
//         i++
//     }
//     return "function is complete!"
// }

// console.log(whileBanana("Journey Before Destination"))


// arrays
// index:  0, 1, 2, 3, 4
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.indexOf(5))\

// let banana = ["this", "array", "holds", "strings", 42]
// console.log(banana.indexOf("array"))

// let papaya = [
//     42,                 //0
//     false,              //1
//     "Let's go Pens!",   //2
//     undefined,          //3
//     null,               //4
//     [1,2,3]             //5
// ]

// console.table(papaya[5][2])

// return a new array, where the elements of papaya are concatenated onto the 
// elements of banana
// function arrayJoiner(banana, papaya) {
//     // let orange = banana.concat(papaya)
//     let orange = banana + papaya
//     console.log(banana)
//     console.log(papaya)
//     return orange
// }
// console.log(arrayJoiner([1, 2, 3], [4, 5, 6]))

function elementFinder(arr, target){ //defined function with params arr and target
    for(let i = 0; i < arr.length; i+=1){ //define for loop to iterate through arr
        let element = arr[i] // create reference to current element in arr
        if (element === target){ // check if element is our target
            return i // if so, return index of that element
        }
    }
    return -1 //if we finish our loop and don't find our target, return -1
}

let banana = [1,2,3]
console.log(banana === [1,2,3])
let papaya = [
    42,                 //0
    false,              //1
    "Let's go Pens!",   //2
    undefined,          //3
    null,               //4
    banana             //5
]
console.log(elementFinder(papaya, banana))

//  0,1,2,3,4 
// [1,2,3,4,5] => 5? 
// 4