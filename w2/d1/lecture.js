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

// REPL Code:

//Declare Keys/Values
const obj = {};

console.log(obj)
// Write your code here.
let someVariable = "firstKey"
// obj["firstKey"] = "firstValue"
obj[someVariable] = "firstValue" 
obj.numeric = 2
obj["boolean"] = false
obj.object = {}

console.log(obj['firstKey']);       // firstValue
console.log(obj['numeric']);        // 2
console.log(obj['boolean']);        // false
console.log(obj['object']);         // {}
console.log(obj)

//Delete Keys/Values
const obj = {
    first: "1"
}

// Write your solution here.
// Do deletion here

delete obj.first;

console.log(obj);               // {}

//Using Variables as keys
const obj = {
    first: "1",
    second: 2,
    third: "three"
}

const str = "first";

const variableAsKey = (obj, str) => {
    // Write your code here.
    // obj.
    // when our key lives in a variable, we need to use bracket notation
    console.log(obj[str])
}

variableAsKey(obj, str);                // "1" (looks like 1 in terminal)
variableAsKey(obj, "second");           // 2

//Cat Builder
function catBuilder(name, color, toys) {
    // your code here...
    return {
        name: name,
      color: color,
      toys: toys,
    }
  }
  
  console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
  // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
  
  console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
  // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

// Array of Objects
const users = [
    {
        name: "Gerald",
        age: 23,
        height: 68
    },
    {
        name: "Winnie",
        age: 35,
        height: 62
    },
    {
        name: "Peter",
        age: 61,
        height: 72
    }
]

const printNames = users => {
    // Write your solution here.
  // console.log(users)
  // for (let i = 0; i < users.length; i++){
  	// console.log(users[i])
    for (let i in users){
    let currentPerson = users[i]
    console.log(currentPerson.name)
  }
}

printNames(users)                   // Gerald Winnie Peter

//Using Object.keys II
const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon",
    1:"one",
}

// Write your solution here.
let keys = Object.keys(obj)

for (let i = 0; i<keys.length; i++){
	let currentKey = keys[i]
    let currentVal = obj[currentKey]
    let eCount = 0
    for (let j = 0; j < currentKey.length; j++){
    	let currentChar = currentKey[j]
        if (currentChar.toLowerCase() === "e") {
          eCount++
        }
    }
  
    for (let k = 0; k < currentVal.length; k++){
    	let currentChar = currentVal[k]
        if (currentChar.toLowerCase() === "e") {
          eCount++
        }
    }
    // console.log("there are", eCount,"e's in", currentKey,"and",currentVal)
    if (eCount >= 3) console.log(currentVal)
}
// Should print "hexagon"

// Writing Object Methods
const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

// Write your solution here.
obj.printUniqueValues = function(){
	let count = {}
    let vals = Object.values(obj)
    for (let i = 0; i < vals.length; i++){
    	let currentVal = vals[i]
        if (typeof currentVal === "function"){
        	continue;
        }
        if (currentVal in count){
        	count[currentVal]++
        } else {
        	count[currentVal] = 1
        }
    }
    // console.log(count)
    let uniqueVals = Object.keys(count)
	console.log(uniqueVals.join(" "))
}

obj.printUniqueValues();               // Honda Kia Mercedes BMW

