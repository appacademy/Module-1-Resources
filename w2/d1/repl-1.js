

// POJO BASICS PRACTICE

// Declare Keys/Values Solution

const obj = {};
obj['firstKey'] = 'firstValue';
obj['numeric'] = 2;
obj['boolean'] = false;
obj['object'] = {};

// Delete Keys/Values Solution

const obj2 = {
    first: "1"
}

// Write your solution here.
// Do deletion here
delete obj2.first

// Using Variables as keys Solution

const obj3 = {
    first: "1",
    second: 2,
    third: "three"
}

const str = "first";

const variableAsKey = (obj, str) => {
    // Write your code here.
    console.log(obj[str]);
}

// Dot vs Bracket Notation Solution

const obj4 = {
    "first key": "1",
    second: 2,
    "third_key": "three"
}

console.log(obj4["first key"])
console.log(obj4.second)
console.log(obj4["second"])
console.log(obj4.third_key)
console.log(obj4["third_key"])

// Cat Builder Solution
function catBuilder(name, color, toys) {
    // your code here...
    let newObj = {}

    newObj.name = name
    newObj.color = color
    newObj.toys = toys

    // OR
    // newObj['name'] = name
    // newObj['color'] = color
    // newObj['toys'] = toys

    return newObj
}

// let catBuilder =(name, color, toys) => ({name, color, toys})

// Array of Objects Solution
const users = [
    {
        name: "Gerald",
        age: 23,
        height: 68
    },
    {
        name: "Winnie",
        age: 35,
        height: 62
    },
    {
        name: "Peter",
        age: 61,
        height: 72
    }
]

const printNames = users => {
    // Write your solution here.
    for (let i = 0; i < users.length; i++) {
        let currObj = users[i]
        console.log(currObj['name'])
        //console.log(currObj.name)
    }

    // OR
    // for(let i=0;i<users.length;i++){
    //     console.log(users[i]['name'])
    //     //console.log(users[i].name)
    // }
}
