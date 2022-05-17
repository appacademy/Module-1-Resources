// /*
// Create an object and store it in a variable (perhaps myObj). Once you have your
// object created, add some keys using dot notation:
//  -- favFood = your favorite food
//  -- favNumbr = your favorite number(or age)
//  -- birthDay = your birthday

// Check to make sure things are working like you expect with a console.log
// statement. After you're feeling pretty good about dot notation, let's try it
// with brackets.

// -- change all of your above statements to instead use bracket notation
// -- next, define a variable and give it some value, then use that variable to 
//    create a new key value pair.
// -- change the value stored in your variable, see how it alters what key/value is
//    added to your object.

// Play around with objects for a moment and start to get very comfortable with how
// we can use either dot or bracket notation. Objects are going to be one of (if 
// not the) most important things you'll learn in this bootcamp. 
// */

// // let myObj = {}

// // console.log(myObj)

// // myObj.favColor = "green"

// // console.log(myObj)

// // myObj.favFood = "pizza"

// // console.log(myObj)

// // myObj["favInstrument"] = "guitar"

// // console.log(myObj)


// // let books = {
// //    first: "Way of Kings",
// //    second: "Words of Radiance",
// //    third: "Oathbringer",
// //    fourth: "Rhythm of War"
// // }

// // const series = {
// //    name: "Stormlight Archives",
// //    author: "Brandon Sanderson",
// //    numberOfNovellas: 1,
// //    worthReading: false,
// //    banana: books,
// // }

// // let color = "blue"

// // // series.banana.first = "This is a test"
// // series[color] = "Blue"

// // // console["log"](books)
// // console.log(series)
// // console.log(books)
// // console.log(books.first["length"])
// // console.log(series)
// // let myArr = [1,2,3]
// // let banana = "log"
// // let papaya = "map"
// // // console[banana](myArr[papaya](el => el * 2))
// // console.log(myArr.map(el => el * 2))

// let show = {
//    name: "Star Trek",
//    series: ["TOS", "TNG", "DS9", "VOY"],
//    captains: {
//       TOS: "Kirk",
//       TNG: "Picard",
//       DS9: "Sisko",
//       VOY: "Janeway"
//    },
//    myFunc: () => console.log("Hi!")
// }

// const myArr = [() => console.log("Hi!"), 2, 3, 4]
// // myArr[0]()
// show.myFunc()
// //  show.doctors = show.captains
// //  console.log(show)
// //  delete show.captains
// //  console.log(show)
// // let keys = Object.keys(show)
// // console.log(keys)
// // keys.forEach(key => console.log(show[key]))

// // let values = Object.values(show)
// // console.log(values)

// // for (let key in show){
// //    console.log(key)
// //    let value = show[key]
// //    console.log("     ",value)
// //    // if (Array.isArray(value)){
// //    //    value.forEach(el => console.log(el))
// //    // }
// //    // if (typeof value === "object" && !Array.isArray(value)){
// //    //    for (let show in value){
// //    //       console.log(value[show])
// //    //    }
// //    // }
// // }


// let books = {
//    first: "Way of Kings",
//    second: "Words of Radiance",
//    third: "Oathbringer",
//    fourth: "Rhythm of War"
// }

// let newBooks = Object.assign({}, books)

// const series = {
//    name: "Stormlight Archives",
//    author: "Brandon Sanderson",
//    numberOfNovellas: 1,
//    worthReading: false,
//    banana: newBooks,
// }

// series.banana.fourth = "New Fourth"
// series.banana.newKey = "I am a new key"

// console.log(books)
// console.log(series)

// let wax = {
//    name: "wax",
//    color: "torty",
//    hasTail: false,
//    isCuddly: true,
//    isChonky: false,
// }

// let wayne = Object.assign({isBitey:true,}, wax)
// // let wayne = wax

// wayne.isChonky = true
// wayne.name = "wayne"
// wax.isCuddly = false
// wayne.color = "black"

// console.log("wax: ", wax)
// console.log("wayne:", wayne)

// let age = 20
// let age2 = age
// age += 20
// console.log(age2)

// let wax = {
//    name: "wax",
//    color: "torty",
//    hasTail: false,
//    isCuddly: true,
//    isChonky: false,
// }

// let wayne = Object.assign({isBitey:true,}, wax)

// wayne.isChonky = true
// wayne.name = "wayne"
// wax.isCuddly = false
// wayne.color = "black"

// let {name:waxy, color, isCuddly, isChonky} = wax
// let {name:countChonkula, color:hisColor, isCuddly:himsCuddles, isChonky:chonker } = wayne

// console.log("wax", waxy, color, isCuddly, isChonky)
// console.log("wayne", countChonkula, hisColor, himsCuddles, chonker)
// console.log(wayne)

// function catName({name}){
//    console.log("Hi", name)
// }

// catName(wax)
// catName(wayne)

let myArr = [1,2,3,4]
// let [banana, papaya] = myArr

// console.log(banana)
// console.log(papaya)

let myRestFunction = (firstParam, secondParam, ...params) => {
   // console.log("firstParam:", firstParam)
   // console.log("secondParam:", secondParam)
   // console.log("...params", params)
   return params
}
let returnedParams = myRestFunction(1,2,3,4,5,6,7,8,9)

// console.log(returnedParams)
// returnedParams.push(10,13,16,18)
// //            (3,4,5,6,7,8,9,10,13,16,18)
// myRestFunction(...returnedParams)
// console.log(...returnedParams)
// console.log(returnedParams)
// returnedParams.push(...myArr)
// let combo = [...returnedParams, ...myArr]
// console.log(returnedParams)
// console.log(myArr)
// console.log(combo)


let wax = {
   name: "wax",
   color: "torty",
   hasTail: false,
   isCuddly: true,
   isChonky: false,
}
//          {name: "wax", color:"torty", ""}
let wayne = {...wax}

console.log(wayne)
// wayne.name = "wayne"
console.log(wax)