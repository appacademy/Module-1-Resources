/*
ARROW SYNTAX

let numbers = function() {
    return 5
}

let numbers = () => {
    return 5
}


**ONLY HAVE ONE PARAMETER
let numbers = (num) => {
    return num + 5
}

let numbers = num => {
    return num + 5
}

let numbers = (num1, num2) => {
    num1 = num1 + 10
    return num1 + num2
}


IMPLICIT RETURN
-Must be a single-line return
-Omit the curly braces

let addFive = (num) => {
    return num + 5
}

let addFive = num => num + 5

*/

/*
1. Higher Order Functions
    A higher order function is a function that takes a function
    as an argument, or returns a function.

2. Callback Function
    Any function that is passed as an argument to another
    function so that it can be executed in that other function
    is called as a callback function

3. Anonymous Functions
    It's a funciton without a name. When a funciton is being used as a callback, they can be declared anonymously
    by writing them directly in the invocation of the outer function

*/


/* FOR EACH
simplify a standard for loop
*/


// for (let i = 0; i < words.length; i++) {
    //     let word = words[i]
    //     console.log(word)
    // }

    // words.forEach(
        //     (el, i, arr) => {
            //         console.log(arr)
            //     }
            // )

// let includesTwo = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i]
//         if (el === 2) {
//             return true
//         }
//     }
//     return false
// }


// let nums = [1, 49, 24, 55, 2, 9, 58, 132, 181]


// let includesTwoAgain = (arr) => {

//     let haveWeFoundATwoYet = false

//     arr.forEach((num, i, arr) => {

//         if (num === 2) {
//                haveWeFoundATwoYet = true
//             }
//         }
//         )

//         return haveWeFoundATwoYet

//     }

//     console.log(includesTwoAgain(nums))


// let words = ['rectangle', 'America', 'megaphone', 'Monday']

// let onlyEightLettersOrLonger = (arr) => {
//     let longerWords = []

//     arr.forEach((word) => {
//         if (word.length >= 8) {
//             longerWords.push(word)
//         }
//     })

//     return longerWords
// }

// console.log(onlyEightLettersOrLonger(words))




// let keepEvenNumbers = (arr) => {

    //     let evenNumbers = []

    //     for (let i = 0; i < arr.length; i++) {
        //         let num = arr[i]
        //         if (num % 2 === 0) {
            //             evenNumbers.push(num)
            //         }
            //     }

            //     return evenNumbers

            // }

// console.log(keepEvenNumbers(nums))




// let isEven = (num) => {
//         return num % 2 === 0
//     }

//     let evenNumbersOnly = nums.filter(isEven)

    // console.log(evenNumbersOnly)

// let biggerThanPrevious = nums.filter(
//     (num, index, array) => {

//         if (index === 0 ) return true

//         let prevNum = array[index - 1]
//         if (prevNum < num) {
//             return true
//         } else {
//             return false
//         }

//     }
// )

// console.log(biggerThanPrevious)




// console.log(words.filter(word => word[0] === word[0].toUpperCase()))

// let keepCapitals = (arr) => {

//     // let isCapitalized = (word) => {
//     //     let firstLetter = word[0]
//     //     return firstLetter.toUpperCase() === firstLetter
//     // }

//     let capitalizedWords = arr.filter((word)=>{
//         let firstLetter = word[0]
//         return firstLetter.toUpperCase() === firstLetter
//     })

//     return capitalizedWords
// }

// console.log(keepCapitals(words))
// console.log(words)


// let words = ['rectangle', 'America', 'megaphone', 'Monday']


// let double = (num) => {
    //     return num *2
    // }

    // let doubledNums =[2,132].map(double)

    // console.log(doubledNums)
// let stringifiedNums = nums.map((num) => {
//     return num.toString()
// })


// // console.log(stringifiedNums)

// let mutatedWord = word => {
    //     let uppercased = word.toUpperCase()
    //     let reversed = uppercased.split('').reverse().join('')
    //     return reversed

    // }

    // console.log(words.map(mutatedWord))



    // let sum = nums.reduce(
        //     (acc, el, i, arr) => {

            //         return acc + el
            //     }
            // )

            // let maximum = nums.reduce(
                //     (acc, el) => {
                    //         if (acc > el) {
                        //             return acc
                        //         } else {
                            //             return el
                            //         }
                            //     }
// )

let nums = [1, 49, 24, 55, 9, 58, 1320, 181]

let sortIntoArrays =  (acc, el, i, arr) => {
    if (el % 2 === 0) {
        acc[0].push(el)
    } else {
        acc[1].push(el)
    }

    return acc

}

let evenAndOdds = nums.reduce(sortIntoArrays, [[], []])

console.log(evenAndOdds)
