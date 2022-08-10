// Primitives vs Reference
let age = 20;
let newAge = age;
age += 1;
console.log(newAge)

// Reference!
let wayne = {
    hasTail: false,
    color: "black",
    chonky: true,
    cuddly: true,
}

// let wax = wayne;
// let wax = Object.assign({}, wayne)
let wax = {...wayne, chonky: false,}

//hacky way to deep copy:
// let wax = JSON.parse(JSON.stringify(wayne))

// wax.chonky = false;
// wax.color = "torty"

console.table(wayne)
console.table(wax)