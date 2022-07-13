// *** Additional notes from last cohort *** 


// forEach

// let nums = [1,2,3,4,5]

// function sumArray (numbers){
//     let sum = 0
//     // numbers.forEach((number, index, array) => {
//     //     console.log("Current Values")
//     //     console.log("Number     index     array     ")
//     //     console.log(number,"        ", index,"      ", array)
//     //     // return number 
//     //     sum += number
//     //     console.log("Sum is currently", sum)
//     // })
//     function adder(number, index, array, test1, test2, test3,){
//         console.log("Current Values")
//         console.log("Number     index     array     ")
//         console.log(number,"        ", index,"      ", array)
//         // return number 
//         sum += number
//         console.log("test1:",test1)
//         console.log("test2:",test2)
//         console.log("test3:",test3)
//         console.log("Sum is currently", sum)
//     }
//     numbers.forEach(adder)
//     console.log("Value of sum: ",sum)
//     return sum
// }

// function myForEach(anotherFunc, arr){
//     for (let i = 0; i < arr.length; i++){
//         anotherFunc(arr[i], i, arr)
//     }
// }

// console.log(sumArray(nums))

// let logger = ele => console.log(ele)
// function logger(ele) {
//     console.log(ele)
// }
// let logger = function(ele) {
//     console.log(ele)
// };

// let words = ["hello","world","goodbye","moon"]
// words.forEach(logger);
let logger = ele => console.log(ele);
["hello","world","goodbye","moon"].forEach(logger)

// map

// doubler 
// [1,2,3,4,5] >> [2,4,6,8,10]

// function doubler(numbers){
//     let doubled = []
//     numbers.forEach((num)=>{
//         doubled.push(num * 2)
//     })
//     return doubled
// }

// let doubler = (numbers) => numbers.map(num => num * 2)

// // function doubler(numbers) {
// //     let doubled = numbers.map(number => number * 2)
// //     return doubled
// // }

// console.log(doubler([1,2,3,4,5]))


// // strings to arrays
// //["hello","world","goodbye","moon"] >> [["h","e","l","l","o"]...]
// function stringsToArrays(arrayOfWords){
//     return arrayOfWords.map(word => {
//         return word.split("")
//     })
// }

// console.table(stringsToArrays(["hello","world","goodbye","moon"]))

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function onlyEvens(nums) {
//     let evens = nums.filter(num => num % 2 === 0)
//     return evens
// }


// let onlyOdds = nums => nums.filter(banana => banana % 2 !== 0)


// let newArr = ["I want this", "I don't want this", "I want this", "I don't want this", "I want this", "I don't want this", "I want this", "I don't want this", "I want this", "I don't want this", "I want this", "I don't want this", "I want this", "I don't want this",]

// let everyOther = arr => arr.filter((element, index) => index % 3 === 0)

// console.log(everyOther(newArr))

// function doubler(numbers) {
//     let doubled = numbers.map(number => number * 2)
//     return doubled.filter(num => num >= 5)
// }

// console.log(doubler([1,2,3,4,5]))


// reduce
// let numbers = [1, 42, 24, 55, 9, 58, 1320, 181]

// function sum(nums){
//     return nums.reduce(
//         (accum, number)=> {
//         // accum += number
//         // console.log(accum)
//         // return accum
//         console.log(accum)
//         return accum + number
//     }, 0
//     )
// }

// let collection = [[],[]]
// let evensAndOdds = nums => nums.reduce((accum, num)=>{
//     if (num % 2 === 0) accum[0].push(num)
//     // if (num % 2 === 1) accum[1].push(num)
//     else accum[1].push(num)
//     // num % 2 === 0 ? accum[0].push(num) : accum[1].push(num)
//     return accum
// }, collection)

// // console.log(sum(numbers))

// console.log(evensAndOdds(numbers))
// console.log(collection)