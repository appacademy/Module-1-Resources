// Arrow Functions

// let sayHello = (name1, name2) => console.log("Hello " + name1 + " and " + name2 + "!")
// // let sayHello = function(name){
// //     console.log("Hello " + name + "!")
// // }

// sayHello("Zahkyi", "Nick") 

// let simpleAdd = (num1, num2) => {
//     return num1 + num2
// }

// let simpleAdd = (num1, num2) => num1 + num2
// let simpleAdd = function(num1, num2){
//     return num1 + num2
// }

// console.log(simpleAdd(2, 3))
//   
// let sumArray = array => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//         let ele = array[i]
//         sum = sum + ele
//     }
//     return sum
// }

// console.log(sumArray([1,2,3]))

// Objects!
// let str = "Hello!"
// console.log(str.length)
// console.log(str.slice(1))

// let myObj = {};
// console.log(myObj)
// myObj.a = "Test!"
// console.log(myObj)
// myObj.b = "New thing!"
// console.log(myObj)

// let series = {
//     "name": "Stormlight Archives",
//     "books": {
//         "first": "The Way of Kings",
//         second: " Words of Radiance",
//         third: "Oathbringer",
//         fourth: "Rhythm of War",
//     },
//     author:"Brandon Sanderson",
//     numberOfNovellas: 1,
//     worthReading: false,
//     qualityOrder: ["third", "first", "fourth", "second"]
// }

// let method = "table"
// console[method](series.books.third)

// for (let key in series.books){
//     console.log("Current key:", key)
//     console.log("Value at key:", series.books[key] )
// }

// let myArr = [1,2,3,4]
// for (let i in myArr){
//     console.log(i)
//     console.log(myArr[i])
// }

let series = {
    name: "Stormlight Archives",
    books: {
        first: "The Way of Kings",
        second: " Words of Radiance",
        third: "Oathbringer",
        fourth: "Rhythm of War",
    },
    author:"Brandon Sanderson",
    numberOfNovellas: 1,
    worthReading: false,
    qualityOrder: ["third", "first", "fourth", "second"]
}

// console.log(series)
// series.quote = "Journey Before Destination"
// console.log(series)
// if (series.quote === undefined){
//     console.log("That key is not in the object!")
// }

if (!("quote" in series)){
    console.log("That key is not in the object!")
}

// console.log(series.books)
// let booksKeys = Object.keys(series.books)
// console.log(booksKeys)


// // series["numberOfNovellas"] = 2
// // series.numberOfNovellas = 2
// // delete series.numberOfNovellas
// series["qualityOrder"]["push"]("Another thing!")
// console.log(series) 

// // let keys = Object.keys(series)
// // console.log(keys.join(", "))
// // for (let i = 0; i < keys.length; i++){
// //     let currentKey = keys[i]
// //     console.log(currentKey)
//     // console.log("Value at " + currentKey + " is: ", series[currentKey]  )
// // }

// // Object.values()
// // let person = {
// //     name: ["Bill", "Adams"]
// // }

// console.log("Thing I want to see")

function letterCounter(string){
    let count = {}
    for(let index in string){ //for(let index = 0; index < string.length; index++)
        // console.log(index)
        console.log(count)
        let currentChar = string[index]
        if (count[currentChar] === undefined){
            count[currentChar] = 1
        } else count[currentChar]++
    }
    return count;
}

console.log(letterCounter("Journey before destination")) // {t: 2, e: 1, s:1}