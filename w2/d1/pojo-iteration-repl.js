// * 1. iterate through object
function printObject(obj) {
  for (let key in obj) {
    let value = obj[key];
    console.log(key + " - " + value);
  }
}

// * 2. Using Object.keys I
const obj5 = {
  first: "1",
  second: 2,
  third: "three",
};

let keys = Object.keys(obj5);
for (let key of keys) {
  console.log(obj5[key]);
}

// OR

// let keys = Object.keys(obj5);
// for (let i=0;i<keys.length;i++){
//     let key = keys[i]
//     console.log(obj5[key])
//     //console.log(obj5[keys[i]])
// }

// * 3. Using Object.keys II
const obj = {
  red: "circle",
  blue: "square",
  green: "hexagon",
};

// Write your solution here.

// Should print "red"
function countC(word) {
  let cCounter = 0;
  for (let letter of word) {
    if (letter.toLowerCase() === "c") cCounter++;
  }
  return cCounter;
}

let keys2 = Object.keys(obj);

for (let i = 0; i < keys2.length; i++) {
  let key = keys2[i];
  let value = obj[key];
  let cCount = countC(value);
  if (cCount >= 2) console.log(key);
}

// * 4. Using Object.values
const obj7 = {
  first: "1",
  second: 2,
  third: "three",
};

const printValues = (obj) => {
  let values = Object.values(obj);
  for (let value of values) {
    console.log(value);
  }

  // OR
  // for (let i = 0; i < values.length; i++) {
  //   console.log(values[i]);
  // }
};

// * 5. Using Object.entries
const obj8 = {
  Jacky: "Honda",
  Ramon: "Kia",
  Lexi: "Mercedes",
  Eli: "Honda",
  Bradley: "Honda",
  Cecily: "BMW",
};

const printOwners = (obj) => {
  let entries = Object.entries(obj);

  for (let entry of entries) {
    if (entry[0].length > 5 && entry[1] === "Honda") console.log(entry[0]);
  }
};

// * 6. writing object methods
const obj9 = {
  Jacky: "Honda",
  Ramon: "Kia",
  Lexi: "Mercedes",
  Eli: "Honda",
  Bradley: "Honda",
  Cecily: "BMW",
};

obj9.printUniqueValues = function () {
  let uniqueVal = [];

  for (let val of Object.values(obj9)) {
    if (!uniqueVal.includes(val) && typeof val != "function")
      uniqueVal.push(val);
  }
  for (let val of uniqueVal) {
    console.log(val);
  }
};

// * 7. Refactoring Iteration
const obj10 = {
  a: "get",
  b: "all",
  c: "of",
  d: "the",
  e: "keys",
};

const printValues1 = (obj) => {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let key of Object.keys(obj)) {
    if (vowels.indexOf(key) >= 0) {
      console.log(obj[key]);
    }
  }
};

const printValuesRefactored = (obj) => {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let key in obj) {
    if (vowels.indexOf(key) >= 0) {
      console.log(obj[key]);
    }
  }
};
