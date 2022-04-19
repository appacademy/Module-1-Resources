// // let series = {
// //     name: "Stormlight Archives",
// //     books: {
// //         first: "The Way of Kings",
// //         second: "Words of Radiance",
// //         third: "Oathbringer",
// //         fourth: "Rhythm of War",
// //     },
// //     author: "Brandon Sanderson",
// //     numberOfNovellas: 1,
// //     qualityOrder: ["third", "first", "fourth", "second"],
// //     worthReading: false, 
// // }

// // // console.log(series["name"])
// // // console["log"](series.name)
// // // console.log(series.books["third"])
// // // console.log(series.books.third)
// // // console.log(series.qualityOrder[2])
// // // series.qualityOrder[2] = "fifth"
// // // console.log(series.qualityOrder[2])
// // // console.log(series)
// // // console.log(series["numberOfNovellas"])
// // series.numberOfNovellas++
// // // console.log(series.numberOfNovellas)
// // series.worthReading = true
// // // console.log(series)
// // let fifth = "fifth"
// // series.books["fifth"] = "Uknown Title"
// // // console.log(series.books)
// // // let i = 0
// // // let arry = [0,1,2]
// // // console.log(arry["i"])
// // let booksStrng = JSON.stringify(series.books)
// // let rankedTitles = series.qualityOrder.map(function(rank){
// //     return series.books[rank]
// // })
// // // console.log(booksStrng)
// // console.log("If I had to rank them by favorites, it might go something like: ", rankedTitles )

// // let place = {
// //     city: "Pittsburgh",
// //     hockeyTeam: "Penguins",
// //     baseballTeam: "Pirates",
// //     footballTeam: "Steelers",
// // }

// // for (let key in place){
// //     console.log('current key is:', key)
// //     console.log('that key\'s value is:', place[key])
// // }
// // let arry = [0, 1, 2]
// // let someFunc = function () {

// //     // for (let element of arry) {
// //     //     console.log(element)
// //     //     return;
// //     // }
// //     let sideEffect = []
// //     console.log(sideEffect)
// //     arry.forEach(function(element){
// //         sideEffect.push(element + 5)
// //     })
// //     // console.log(sideEffect)
// //     return sideEffect;
// //     // for (let index in arry){
// //     //     console.log(arry[index])
// //     // }
// // }
// // console.log(someFunc())

// // let someVariable = "hockeyTeam"
// // let first = "football"
// // let second = "Team"
// // // console.log(first + second)
// // let array = [1,2,3]
// // // console.log(1 == "1")
// // // console.log(place[first + second])

// let place = {
//     city: "Pittsburgh",
//     hockeyTeam: "Penguins",
//     baseballTeam: "Pirates",
//     footballTeam: "Steelers",
// }

// let keysArray = Object.keys(place)
// let valuesArray = keysArray.map(function(key){
//     return place[key]
// })
// // console.log(keysArray)
// // // let valuesArray = Object.values(place)
// // console.log(valuesArray)
// let entriesArray = Object.entries(place)
// console.log(entriesArray)

//Primitive v Reference
// let number = 42
// let anotherNumber = number
// number = number + 10
// console.log(number, anotherNumber)

// let wayne = {
//     type: 'cat',
//     color: 'black',
//     hasTail: false,
//     chonky: true,
// }

// let wax = wayne;
// wax.color = "torty"
// wayne.chonky = false;

// console.log("wayne details: ", wayne)
// console.log("wax detqails: ", wax)

// let arr1 = [1,2,3,4]
// // let arr2 = arr1
// let arr2 = arr1.slice()
// arr1.pop()
// console.log(arr2)

// let wayne = {
//         type: 'cat',
//         color: 'black',
//         hasTail: false,
//         chonky: true,
//     }

// let wax = {}

// // Object.assign(target, source)
// Object.assign(wax, wayne)
// Array.isArray([])
// console.log(wax)
// wax.color = "torty"
// wax.chonky = false
// console.log("wayne:", wayne)
// console.log("wax:", wax)

// let daughter = {
//     name: "Madelyn",
//     hairColor: "Blonde",
//     eyeColor: "Blues",
//     favoriteThings: {
//         person: "Mama",
//         character: "Peppa",
//     },
// }

// // let {name, hairColor, eyeColor, favoriteThings} = daughter;

// // console.log(name, hairColor, eyeColor, favoriteThings)
// let {favoriteThings: {person:banana, character:papaya}} = daughter;
// console.log(banana, papaya)

// let [first, second, third] = arr
// console.log(first, second, third)

// let arr = ["Bill", "Jeff", "Geoff"];
// let [first, second, third] = arr;

// console.log(first, second, third);


// // We can also use destructuring syntax to swap the positions of array elements
// console.log(arr);
// [arr[0], arr[1]] = [arr[1], arr[0]];
// // console.log(arr);
// console.log(arr);
let daughter = {
    name: "Madelyn",
    hairColor: "Blonde",
    eyeColor: "Blues",
    favoriteThings: {
        person: "Mama",
        character: "Peppa",
    },
}
let wayne = {
    type: 'cat',
    color: 'black',
    hasTail: false,
    chonky: true,
}

let wax = {...wayne}

// Object.assign(target, source)
// Object.assign(wax, wayne)
let arr = [daughter, wax, wayne]

let [{name}, {color:banana}, {color:papaya}] = arr;

// console.log(maddyName, waxName, wayneName)

// let lastName = "Bill";
// let firstName = "Adams";
// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);

let yeller = function(...words){ // defining function, using rest param to accept any number of args
    // .toUpperCase() on every word
    let upperCasedWords = words.map(function(word){ // mapping through array of args provided to function
        return word.toUpperCase() // returning each word upperCased to result array
    })
    return upperCasedWords.join(" ") + "!" // returning result array joined with spaces and with an ! at the end
}

// console.log(yeller("i", "am", "the", "senate", "and", "more", "words"))

// console.log("uses", "the", "rest", "param")

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]

// let arr4 = [0, ...arr1, ...arr2, ...arr3]

// // let words = ["i", "am", "the", "senate", "and", "more", "words"]
// // console.log(yeller(...words))
// // // console.log(arr4)

// let obj1  = {name: "bill"}
// let obj2 = {animal: "dog", game: "Destiny 2"}
// let obj3 = {obj1, obj2, book: "Wheel of Time"}
// let obj4 = {...obj1, ...obj2, book: "Wheel of Time"}
// console.log(obj3)
// console.log(obj4)