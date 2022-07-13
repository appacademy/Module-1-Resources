// let myVariable = "someKey";

// let myArray = [7,3,5,6,2,8]
//             // 0 1 2 3 4 5
// myArray.push("someData")
// myArray.pop()

// for(let i = 0; i < myArray.length; i++){
//     myArray[i]
// }

// let myObject = {}

// myObject['0'] = 5
// myObject[myVariable] = 10

// myVariable = "anotherKey"
// myObject[myVariable] = 11

// console.log(myObject)
// console.log(myObject[myVariable])
// console.log(myObject["someKey"])



let myUser = {
    "id": 0,
    "firstName": "Caleb",
    "lastName": "Braten",
    "0": "Hello"
}

let anotherUser = {
    "id": 626,
    "firstName": "Ryan",
    "lastName": "Webster",
    "run": (dest) => console.log("We're Running to " + dest)
//   key : value
}

let myUsers = [myUser, anotherUser];
            //    0         1

// Set by the user via a button            
let whichName = "firstName" // firstName
let id 

// console.log(myUsers[1].myKey, myUsers[1][whichName])
console.log(anotherUser.run("Disneyland"))

console.log(Object.keys(anotherUser)) // ["id", "firstName", ...]

// let myArray = []
// myArray.push





// Key Takeaways
// Arrays are just objects -> you've been using them all along

let newObj = {} // Empty Object
let newObjWithStuff = {
    "key": "someValue"  // Object with key/value pair
}
// Dot Notation
// Read Operation
newObjWithStuff.key
            //     ^
            // some key

// Write Operation
newObjWithStuff.key = "newValue"
            //     ^
            // some key


// Bracket Notation
// Read Operation
newObjWithStuff["key"]
            //     ^
            // some key

// Write Operation
newObjWithStuff["key"] = "newValue"
            //     ^
            // some key


// Bracket Notation with a dynamic value for our key
let myKeyVar = "key"
// Read Operation
newObjWithStuff[myKeyVar]
            //     ^
            // some key

// Write Operation
newObjWithStuff[myKeyVar] = "newValue"
            //     ^
            // some key