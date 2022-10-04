// key/value pairs

// console.log
//  ^
// Object!

// Arrays are objects
// ["H", "e", "y"]
//   0    1    2

// array[1] //e

let myFavoriteColor

let myArr = ["H", "e", "y"] // 3

let myObj = {
    "0":"H",
    "1":"e",
    "2":"y",
    "length": 3,
    "subObject": {
        "hello": function (name) { return "hello " + name + " from obj"}
    }
    //"someKey": "Hello World"
}

let i = "length"
console.log(myObj)
delete myObj.subObject.hello
console.log(myObj)
// console.log(myObj.subObject.hello("Caleb"))


// let myVar = "someKey"
// myObj.myVar // myObj["myVar"]
// myObj["myVar"] // myObj["myVar"]
// myObj[myVar] // myObj["someKey"]



// myObj.someKey = "Hello World"
// delete myObj.someKey
// console.log(myObj.someKey)
// console.log(myObj)