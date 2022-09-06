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

let series = {
    "name": "Stormlight Archives",
    "books": {
        "first": "The Way of Kings",
        second: " Words of Radiance",
        third: "Oathbringer",
        fourth: "Rhythm of War",
    }
}

let method = "log"
console[method](series)