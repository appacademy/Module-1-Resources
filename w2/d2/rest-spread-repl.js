// * 1. RestSum
const restSum = (...otherNums) => {
  let sum = 0;
  for (let num of otherNums) {
    sum += num;
  }
  return sum;
};

// * 2. spreadItOut
const spreadItOut = (array1, array2) => {
  return [...array1, ...array2];
};

// * 3. breakDownObj
const breakDownObj = (obj) => {
  return [...Object.keys(obj), ...Object.values(obj)];
};


// * 4. copy array
//right hand is gathering rest
//left is spreading into

const arrSpread = [...arr]; //spreading elements into array literal
const [...arrRest] = arr; //gather the rest of the arguments in the arrRest variable
const objSpread = {
  ...obj,
};
const { ...objRest } = obj;

// * 5. clone object
//clone the obj into new obj while also grabbing value for green

// on right; spreading old object, adding new key-value pair
// on left; destructure out the green key, and spread the rest of the key:value pairs into the objClone variable
const { green, ...objClone } = { ...obj, yellow: "pentagon" };

console.log(objClone); // { red: "circle", blue: "square", yellow: "pentagon" }
console.log(green); // hexagon


// * 1. destructure array
let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];
let [first, second, third, fourth, fifth, sixth] = bigArray;
console.log(second); // prints: 14
console.log(fifth); // prints: { name: "party" }
console.log(sixth); // prints: ["pineapple"]
