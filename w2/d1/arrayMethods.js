// =============
// == forEach ==    :    Iterate from start to end and 
// =============         pass each item into the callback function

// let pixarFilms = ["Toy Story",          // 0 
//                   "A Bug's Life",       // 1 
//                   "Monsters, Inc.",     // 2 
//                   "Finding Nemo",       // 3 
//                   "The Incredibles",    // 4 
//                   "Cars"]               // 5

// for(let i = 0; i < pixarFilms.length; i++){
//     console.log(i, pixarFilms[i])
// }

// for(let i = pixarFilms.length-1; i >= 0 ; i--){
//     console.log(i, pixarFilms[i])
// }

// console.log(pixarFilms)

// pixarFilms.forEach(function(item, index, array){
//     console.log(index, item.toUpperCase())
//     array[index] = item.toUpperCase()
// }) // return undefined
// pixarFilms.push("Cars")

// for(let i = 0; i < pixarFilms.length; I++){
//  function(pixarFilms[i], i, pixarFilms){}
// }

// console.log(pixarFilms)




// Parameters vs. Arguments
// function myFunc(myString, param2, parma3){
//     // does stuff
// }

// myFunc()

// myFunc("Hello", "World", function(param1){})




// =========
// == map ==        :    Iterate and transform from start to end without affecting the original
// =========

// let pixarFilms = ["Toy Story",          // 0
//                   "A Bug's Life",       // 1
//                   "Monsters, Inc.",     // 2
//                   "Finding Nemo",       // 3
//                   "The Incredibles"]    // 4


// let newArr = []
// console.log("OG Array", pixarFilms)
// console.log("newPreLoopArray", newArr)
// for(let i = 0; i < pixarFilms.length; i++){
//     newArr.push(pixarFilms[i].toUpperCase())
// }
// console.log("newPostLoopArray", newArr)
// console.log("OG Array", pixarFilms)


// let newArr2 = pixarFilms.map(function(item, index, array){
//     return item.toUpperCase()
// })
// console.log("newArrayPostMap", newArr2)
// console.log("OG Array", pixarFilms)




// ============
// == filter ==     :    Iterate and select from start to end
// ============

// let pixarFilms = ["Toy Story",          // 0
//                   "A Bug's Life",       // 1
//                   "Monsters, Inc.",     // 2
//                   "Finding Nemo",       // 3
//                   "The Incredibles"]    // 4

// let newArr = pixarFilms.filter(function(item, index, ogArray){
//     if(item[0] === 'T'){
//         return true
//         console.log("Didn't run")
//     } else if(item[0] === 'A') {
//         return true
//     }

//     return false
// }) // return an array


// console.log(newArr)


// ============
// == reduce ==     :    Iterate and combine from start to end
// ============

// let pixarFilms = ["Toy Story",          // 0
//                  "A Bug's Life",       // 1
//                   "Monsters, Inc.",     // 2
//                   "Finding Nemo",       // 3
//                   "The Incredibles"]    // 4

// let lastValue = pixarFilms.reduce(function(prev, cur){
//     console.log("prev", prev)
//     console.log("cur", cur)
//     console.log("--------------------")

//     return prev + " | " + cur;
//     // return undefined
// }, "The Incredibles 2")
// console.log("Last Value:", lastValue)


// Not a thing when not a string
// let myString = "some string"
// let retVal = myString.reduce(function(prev, cur){
//     return prev + " | " + cur;
// })
// console.log(retVal)


// let arr1 = [5, 7, 10]
// function getAverage(myArr){
//      return myArr.reduce(function(prev, cur){
//         return prev + cur
//     }) / myArr.length
// }
// console.log(getAverage([5, 7, 10]))

