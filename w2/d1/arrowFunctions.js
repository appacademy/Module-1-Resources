// =============
// == forEach ==    :    Iterate from start to end and 
// =============         pass each item into the callback function

let pixarFilms = ["Toy Story",          // 0 
                  "A Bug's Life",       // 1 
                  "Monsters, Inc.",     // 2 
                  "Finding Nemo",       // 3 
                  "The Incredibles",    // 4 
                  "Cars"]               // 5

// ----------------------------------------------

// pixarFilms.forEach((item, index, array) => {
//     console.log(index, item.toUpperCase())
//     // array[index] = item.toUpperCase()
// }) // return undefined
// pixarFilms.push("Cars")

// ----------------------------------------------

// console.log(
//     pixarFilms.map(function(item, index, array) {
//         return item.toUpperCase()
//     })
// )

// console.log(
//     pixarFilms.map((item, index, array) => {
//         return item.toUpperCase()
//     })
// )

// console.log(
//     pixarFilms.map(item => item.toUpperCase())
// )

// ----------------------------------------------

// console.log(
//     pixarFilms.filter(function(item, index, ogArray){
//         if(item[0] === 'T'){
//             return true
//         } 
//         return false
//     }) // return an array
// )

// console.log(
//     pixarFilms.filter(item => {
//         if(item[0] === 'T'){
//             return true
//         }
//         return false
//     }) // return an array
// )

// console.log(
//     pixarFilms.filter(item => item[0] === 'T' ? true : false ) // return an array
// )

// ----------------------------------------------

// console.log(
//     pixarFilms.reduce((prev, cur) => {
//         console.log("prev", prev)
//         console.log("cur", cur)
//         console.log("--------------------")

//         return prev + " | " + cur;
//         // return undefined
//     }, "The Incredibles 2")
// )

// console.log(
//     pixarFilms.reduce((prev, cur) =>  prev + " | " + cur, "The Incredibles 2")
// )

// ----------------------------------------------

let arr1 = [5, 10, 15]
let getAverage = (myArr) => {
    return myArr.reduce((prev, cur) => prev + cur) / myArr.length
}

console.log(getAverage(arr1))






