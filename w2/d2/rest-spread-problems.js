// Rest Sum
// Write your code for `restSum` here

// function restSum(...nums) {
//   return nums.reduce((acc, curr) => acc + curr);
// }

function restSum(...nums) {
    let sum = 0;

    nums.forEach(num => sum += num);

    return sum;
}

console.log(restSum(3, 5, 6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0


// Spread it out
const spreadItOut = (array1, array2) => {
    // Your code here
    return [...array1, ...array2];
}

console.log(spreadItOut([3, 5, 6], [1, 2, 3])); // => [3,5,6,1,2,3];
console.log(spreadItOut([], [1, 2, 3])); // => [1,2,3];
console.log(spreadItOut(["apple", "banana"], [1, 2, 3])); // => ["apple", "banana", 1, 2, 3];

// Break down object
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
let object2 = {location: 'NY', borough: 'Brooklyn'};

const breakDownObj = obj => {
  // Your code here
  return [...Object.keys(obj), ...Object.values(obj)];
}

console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]

// Copy array
const arr = [1, "two", "3"];

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your code here.
let [...arrRest] = arr;
let arrSpread = [...arr];

let { ...objRest } = obj;
let objSpread = { ...obj }

console.log(arrRest);   // [1, "two", "3"]
console.log(arrSpread); // [1, "two", "3"]

console.log(objRest);   // { red: "circle", blue: "square", green: "hexagon" }
console.log(objSpread); // { red: "circle", blue: "square", green: "hexagon" }

// Clone object
const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your code here.
let { green, ...objClone } = { ...obj, yellow: "pentagon" }

// let obj2 = { ...obj, yellow: "pentagon" }
// let { green, ...objClone } = obj2;

console.log(objClone); // { red: "circle", blue: "square", yellow: "pentagon" }
console.log(green);    // hexagon
