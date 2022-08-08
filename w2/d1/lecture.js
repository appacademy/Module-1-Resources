// // arrow functions!


// // let myFunc = () => ({
// //     key: "value", 
// //     a: 'b',
// // });

// // console.log(myFunc())

// // let vowels = "aeiouAEIOU"

// // // let isVowel = char => vowels.includes(char) ? char ==='a' ? 'Thats an a!' : "that's some vowel I guess" : char + " is a consonant"
// // let isVowel = char => vowels.includes(char) ? char + " is a vowel" : char + " is a consonant"
// // // let isVowel = char => {
// // //     if (vowels.includes(char)) return char + " is a vowel";
// // //     else return char + " is a consonant"
// // // }

// // console.log(isVowel("a"))

// // let sum = (num1, num2) => num1 + num2

// // console.log(sum(1,3))

// // // anonymous!
// // let arr = [1,2,3]
// // arr.push(4)
// // console.log(() => "Hello!")

// // function thisFunction(param){
// //     //body
// // }

// // let otherFunction = function(param){
// //     //body
// // }

// // Objects
// // anything with properties, is either an object, or has been "wrapped" in an object
// // "Hi!"
// //  -- .length -> 3
// //  -- .slice -> 

// // console.log("Hi!".slice) //-> method

// // Methods are functions that exists as properties on objects

// // let sayHello = function(){
// //     console.log("Hello!")
// // }
// // let myObj = {
// //     name: "Bill", 
// //     sayHello: function() { 
// //         console.log("Hello!")
// //     },
// //     family: {wife: "Melissa", child1: "Madelyn", child2:"Finley"}
// // }
// // myObj["sayHello"]()
// // myObj.sayHello()
// // console["table"](myObj["family"])
// // console.table(myObj)

// // let someObj = {}

// // console.log(someObj.name)
// // someObj.name = "Braxton"
// // console.log(someObj.name)

// // console.log("Hi!"[3])
// // let myNum = 42.003
// // console.table(myNum.toFixed(0))

// function doesItExist(banana, papaya){
//     return banana[papaya] !== undefined
// }

// let myObj = {
//     name: "Bill", 
//     sayHello: function() { 
//         console.log("Hello!")
//     },
//     family: {
//         wife: "Melissa",
//         child1: "Madelyn", 
//         child2:"Finley"
//     },
// }
// console.log(doesItExist(myObj, "name"))

// let prop = "toLowerCase"
// console.log(myObj.family.child1)

// let name = "bill"

// let me = {[name]:"value?", ['b' + 'ar']: "other value?"}

// console.log(me)

let myObj = {
    name: "Bill", 
    sayHello: function() { 
        console.log("Hello!")
    },
    family: {
        wife: "Melissa",
        child1: "Madelyn", 
        child2:"Finley"
    },
}
let banana = Object.values(myObj)
console.log(banana)
// console.log(Object.keys(myObj))
// let keys = Object.keys(myObj)
// for (let i in keys){
//     console.log('i', i)
//     let key = keys[i]
//     console.log(key)
// }
// for (let i = 0; i < keys.length; i++){
//     let key = keys[i]
//     console.log(key, ":", myObj[key])
// }

// for (let key in myObj){
//     console.log(key, ":", myObj[key])
// }