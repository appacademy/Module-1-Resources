// // Primitive vs Reference types

// // let myArr = ["this"]
// let age = 20
// let age2 = age
// age++
// // console.log(age, age2)

// let myArr = ["this"]
// let myArr2 = myArr.slice()
// myArr.push("that")
// console.log(myArr, myArr2)
// myArr2.push("other")
// console.log(myArr, myArr2)
// // myArr.push(age)
// // // console.log(myArr)
// // age = age + 1
// // // console.log(myArr)
// // let myArr3 = []
// // myArr.push(myArr3.slice())
// // myArr3.push("mutated!")
// // console.log(myArr, myArr2)
// // console.log(myArr3)
// // myArr2[4].push("Again!")
// // console.log(myArr3)

// let myObj = {} // instantiating an object
// myObj["catTwo"] = "count chonkula" // adding key cat with value "count chonkula"
// myObj.otherCat = "wax" // adding key otherCat with value "wax"
// console.log(myObj) // logging object to console
// myObj["cat"] = "wayne"
// console.log(myObj)

// let series = {
//     name: "Stormlight Archives",
//     books : {
//         first: "The Way of Kings",
//         second: "Words of Radiance",
//         third: "Oathbringer",
//         fourth: "Rhythm of War",
//     },
//     author: "Brandon Sanderson", 
//     numberOfNovellas: 1,
//     worthReading: false,
//     quality: ["third", "first", "fourth", "second",],
// }

// series.quality.forEach(element => console.log(series.books[element]))

// for (let key in series) {
//     console.log("Current key:", key)
//     console.log("         it's value is:", series[key])
// }

// let values = Object.values(series)
// console.log(values)
// let keys = Object.keys(series)
// console.log(keys)
// let values = keys.map(key => series[key])
// console.log(values)

let myArr = ["default value"]

// let myPusher = (...things) => {
//     console.log( things, )
//     // myArr.push(things)
//     things.forEach(newThing => myArr[myArr.length]=(newThing))
//     return myArr
// }
// console["log"](myPusher(1,2,3,4,5,6,7,8))
// // myPusher([1,2,3,4,5,6,7,8])
// // arr.push(...args)

// function yeller(...words){
//     return words.map(word => word.toUpperCase()).join(" ") + "!"
// }

// let yeller = (...words) => words.map(word => word.toUpperCase()).join(" ") + "!"

// console["log"](yeller("i", "am","the","senate"))
// console["log"](Object.keys(console))

let series = {
    name: "Stormlight Archives",
    books : {
        first: "The Way of Kings",
        second: "Words of Radiance",
        third: "Oathbringer",
        fourth: "Rhythm of War",
    },
    author: "Brandon Sanderson", 
    numberOfNovellas: 1,
    worthReading: false,
    quality: ["third", "first", "fourth", "second",],
}

let {name, books} = series;
// console.log(name)
// console.log(books)
// console.log(first)
// console.log(series.newBooks = series.books)
// delete series.books
// console.log(series)

// array destructuring

// useState("") >>> ["", function]
// const [myState, setMyState] = useState("")
// const stateVar = useState("")

// value = myState;
// onClick = (event : {target : {value}}) => setMyState(value)

let modInstructors = ["Jeff", "Bill", "Geoff", "Alec", "Dan", "Brad", "Tom"];
console.log(modInstructors)


;[modInstructors[0], modInstructors[1]] = [modInstructors[1], modInstructors[0]];
console.log(modInstructors);

function swap(i, j, arr){ // define function that takes in swap indices and arr
    let temp = arr[i] // hold current value of arr[i] in temp
    arr[i] = arr[j] // reassign arr[i] to arr[j]
    arr[j] = temp // reassign arr[j] to temp (original val for arr[i])
    return arr // return mutated array
}

// console.log(modInstructors)
// swap(0, 1, modInstructors)
// console.log(modInstructors)
// swap(0, 5, modInstructors)
// console.log(modInstructors)