/*
Using Object.keys I
Given the object below, use Object.keys() to iterate through the object and
print all its values.
*/

const obj = {
    first: "1",
    second: 2,
    third: "three"
}

// Write your solution here.

let keys = Object.keys(obj)

// console.log(keys)

for (let i = 0; i < keys.length; i++){
	let key = keys[i]

    console.log(typeof obj[key])
}

