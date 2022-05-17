/*
Create an object and store it in a variable (perhaps myObj). Once you have your
object created, add some keys using dot notation:
 -- favFood = your favorite food
 -- favNumbr = your favorite number(or age)
 -- birthDay = your birthday

Check to make sure things are working like you expect with a console.log
statement. After you're feeling pretty good about dot notation, let's try it
with brackets.

-- change all of your above statements to instead use bracket notation
-- next, define a variable and give it some value, then use that variable to 
   create a new key value pair.
-- change the value stored in your variable, see how it alters what key/value is
   added to your object.

Play around with objects for a moment and start to get very comfortable with how
we can use either dot or bracket notation. Objects are going to be one of (if 
not the) most important things you'll learn in this bootcamp. 
*/

// let myObj = {}

// console.log(myObj)

// myObj.favColor = "green"

// console.log(myObj)

// myObj.favFood = "pizza"

// console.log(myObj)

// myObj["favInstrument"] = "guitar"

// console.log(myObj)


// let books = {
//    first: "Way of Kings",
//    second: "Words of Radiance",
//    third: "Oathbringer",
//    fourth: "Rhythm of War"
// }

// const series = {
//    name: "Stormlight Archives",
//    author: "Brandon Sanderson",
//    numberOfNovellas: 1,
//    worthReading: false,
//    banana: books,
// }

// let color = "blue"

// // series.banana.first = "This is a test"
// series[color] = "Blue"

// // console["log"](books)
// console.log(series)
// console.log(books)
// console.log(books.first["length"])
// console.log(series)
// let myArr = [1,2,3]
// let banana = "log"
// let papaya = "map"
// // console[banana](myArr[papaya](el => el * 2))
// console.log(myArr.map(el => el * 2))

let show = {
   name: "Star Trek",
   series: ["TOS", "TNG", "DS9", "VOY"],
   captains: {
      TOS: "Kirk",
      TNG: "Picard",
      DS9: "Sisko",
      VOY: "Janeway"
   },
   myFunc: () => console.log("Hi!")
}

const myArr = [() => console.log("Hi!"), 2, 3, 4]
// myArr[0]()
show.myFunc()
//  show.doctors = show.captains
//  console.log(show)
//  delete show.captains
//  console.log(show)
// let keys = Object.keys(show)
// console.log(keys)
// keys.forEach(key => console.log(show[key]))

// let values = Object.values(show)
// console.log(values)

// for (let key in show){
//    console.log(key)
//    let value = show[key]
//    console.log("     ",value)
//    // if (Array.isArray(value)){
//    //    value.forEach(el => console.log(el))
//    // }
//    // if (typeof value === "object" && !Array.isArray(value)){
//    //    for (let show in value){
//    //       console.log(value[show])
//    //    }
//    // }
// }