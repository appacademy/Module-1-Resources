// // // Function expression syntax!!
// // // Functions can live in variables!

// // // function myFunc() { }

// // // let myFunc2 = function () { }

// // // console.log(myFunc)
// // // console.log(myFunc2)

// // // let sumArray = function (arr) {
// // //     let sum = 0
// // //     for (let i = 0; i < arr.length; i++) {
// // //         sum += arr[i]
// // //     }
// // //     return sum
// // // }

// // // function sumArray(arr) {
// // //     let sum = 0
// // //     for (let i = 0; i < arr.length; i++) {
// // //         sum += arr[i]
// // //     }
// // //     return sum
// // // }

// // // sumArray = undefined;

// // // let sumArray = (arr) => {
// // //     let sum = 0
// // //     for (let i = 0; i < arr.length; i++) {
// // //         sum += arr[i]
// // //     }
// // //     return sum
// // // }

// // // console.log(sumArray([1, 2, 3, 4]))


// // // Mutability
// // // Primitive vs Reference
// // // Strings, Numbers, Booleans, Undefined, Null, NaN
// // // Arrays
// // // let string = "a collection of characters"
// // // let number = 1
// // // let arr = []
// // // //          0123
// // // let name = "Biff"
// // // name[2] = "l"
// // // name[3] = "l"
// // // console.log(name)
// // // // let nameArr = ["B","i","f","f", function(){console.log("hello world!")}]
// // // let nameArr = ["B","i","f","f"]
// // // nameArr[3] = "l"
// // // console.log(nameArr)
// // // console.log(nameArr[4]())

// // let badName = "Biff"
// // function stringToArray(string) {
// //     // let arr = []
// //     // for (let i = 0; i < string.length; i++){
// //     //     arr[i] = string[i]
// //     // }
// //     // return arr
// //     return string.split("")
// // }
// // let nameArr = stringToArray(badName)
// // console.log(nameArr)
// // nameArr[2] = "l"
// // nameArr[3] = "l"
// // console.log(nameArr)
// // function arrayToString(arr) {
// //     // console.log(arr)
// //     let str = ""
// //     for (let i = 0; i < arr.length; i++) {
// //         // console.log(arr[i])
// //         str += arr[i]
// //     }
// //     return str
// // }
// // let goodName = arrayToString(nameArr)
// // console.log(goodName)

// let badName = "Biff"
// let nameArr = badName.split("")
// nameArr[2] = "l"
// nameArr[3] = "l"
// let goodName = nameArr.join("")
// // console.log(goodName)
// let spaces = "here's some spaces"
// console.log(spaces.split(" "))
// // console.log("Biff".split(" ").map((char) => char === "f" ? "l" : char).join(" "))

// arraymethods 
// push, pop, unshift, shift

// let myArr = [4,7,2]
// // console.log(myArr.push(3, 2, 9, 10))
// // console.log(myArr)
// // console.log(myArr.unshift(3, 2, 9, 10))
// // console.log(myArr)
// // console.log(myArr.length === myArr.push("test"))
// console.log(myArr.push("test") === myArr.length)
// console.log(myArr)

// pop and shift

// let sumArray = (nums) => {
//     // nums = nums.slice()
//     console.log("Input nums: ", nums)
//     let sum = 0
//     // while (nums.length > 0){
//     //     console.log("Nums at top of loop:", nums)
//     //     let currentNum = nums.pop()
//     //     console.log("Current num:", currentNum)
//     //     sum += currentNum
//     //     console.log("Sum at end of loop:", sum)
//     // }   // true
//     while (nums.length > 0) {
//         console.log("Nums at top of loop:", nums)
//         let currentNum = nums.shift()
//         console.log("Current num:", currentNum)
//         sum += currentNum
//         console.log("Sum at end of loop:", sum)
//     }
//     return sum
// }

// let numsArr = [1, 2, 3, 4, 5]



// console.log(sumArray(numsArr))

// console.log(numsArr)


// nested loops

// for (let i = 0; i < 5; i++) {
//     console.log("value of i:", i)
//     for (let j = 0; j < 5; j++) {
//         // console.log(i, j)
//         console.log("value of j:         ", j)
//     }
//     console.log("inner loop ends")
// }
// console.log("outer loop ends")

// let myArr = [
//     [1, 2, 3],              //0
//     [4],                  //1
//     [5, 6, 7, 8],            //2
//     [9, 10, 11, 12, 13, 14]    //3
// ]
// // console.table(myArr)

// function twoDimensionalSum(arr) {
//     let sum = 0;
//     // console.log("input array:", arr)
//     for (let i = 0; i < arr.length; i++) {
//         let subArr = arr[i]
//         // console.log("current subArray:", subArr)
//         for (let j = 0; j < subArr.length; j++) {
//             let currentNum = subArr[j]
//             console.log("current num:     ", currentNum)
//             sum += currentNum
//             console.log("current sum:", sum)
//         }
//     }
//     return sum
// }

// console.log(twoDimensionalSum(myArr))

let myNums = [1,2,3,4,5,6]
function twoSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        let firstNum = arr[i]
        for (let j = i; j < arr.length; j++){
            let secondNum = arr[j]
            console.log("Does", firstNum,"+", secondNum, "=", target,"?")
            if (firstNum + secondNum === target){
                console.log("IT DOES!")
                return true
            } else {
                console.log("It does not.")
            }
        }
    }
    return false
}

twoSum(myNums, 3)

let twoSumExclusive = function (nums, target) {
    // define function to satisfy prompt
    let i = 0;
    // establish i for outer loop tracking
    let pairs = []
    // establish pairs array to hold results
    while (i < nums.length - 1) {
        // establish outer loop to get first number
        let firstNum = nums[i]
        // establish variable to refer to first number
        let j = i + 1
        // establish j for inner loop control
        while (j < nums.length) {
            // establish inner loop
            let newNum = nums[j]
            // establish variable to point to second number
            if (firstNum + newNum === target) {
                // check to see if boths nums addded together are our target
                pairs.push([firstNum, newNum])
                // if so, push an array of those nums into our pairs/result array
            }// else, do nothing
            j++
            // after checking, increment j
        }   
        i++
        // after inner loops ends, increment i
    }
    return pairs
    // return result after find all pairs
}
console.log(twoSumExclusive(myNums, 10))