
// Using Object.keys I
const obj5 = {
  first: "1",
  second: 2,
  third: "three"
}

let keys = Object.keys(obj5);
for (let key of keys) {
  console.log(obj5[key])
}

// OR

// let keys = Object.keys(obj5);
// for (let i=0;i<keys.length;i++){
//     let key = keys[i]
//     console.log(obj5[key])
//     //console.log(obj5[keys[i]])
// }

// Using Object.keys II
const obj6 = {
  red: "circle",
  blue: "square",
  green: "hexagon"
}


function helper(key, value) {
let eCounter = 0;

for(let letter of key) {
  if(letter.includes('e')) eCounter++;
}

for(let letter of value) {
  if(letter.includes('e')) eCounter++;
}
return eCounter >= 3;
}

for(let key in obj) {
let value = obj[key];

if(helper(key, value)) {
 console.log(value);
}
}


// Using Object.values
const obj7 = {
  first: "1",
  second: 2,
  third: "three"
}


const printValues2 = obj => {
  // Write your solution here.
  let values = Object.values(obj)
  for (let value of values) {
      console.log(value)
  }

  // OR
  for (let i = 0; i < values.length; i++) {
      console.log(values[i])
  }
}

// Using Object.entries

const obj8 = {
  Jacky: "Honda",
  Ramon: "Kia",
  Lexi: "Mercedes",
  Eli: "Honda",
  Bradley: "Honda",
  Cecily: "BMW"
}

const printOwners = obj => {
  // Write your solution here.
  let entries = Object.entries(obj)

  for (let entry of entries) {
      if (entry[0].length > 5 && entry[1] === "Honda") console.log(entry[0])
  }

}

// Writing Object Methods
const obj9 = {
  Jacky: "Honda",
  Ramon: "Kia",
  Lexi: "Mercedes",
  Eli: "Honda",
  Bradley: "Honda",
  Cecily: "BMW"
}

// Write your solution here.
obj9.printUniqueValues = function () {
  let uniqueVal = []

  for (let val of Object.values(obj9)) {
      if (!uniqueVal.includes(val) && typeof val != 'function') uniqueVal.push(val)
  }
  for (let val of uniqueVal) {
      console.log(val)
  }
}

// Refactoring Iteration
const obj10 = {
  a: "get",
  b: "all",
  c: "of",
  d: "the",
  e: "keys"
}

const printValues = obj => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let key of Object.keys(obj)) {
      if (vowels.indexOf(key) >= 0) {
          console.log(obj[key]);
      }
  }
}

const printValuesRefactored = obj => {
  // Write your solution here.
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let key in obj) {
      if (vowels.indexOf(key) >= 0) {
          console.log(obj[key]);
      }
  }
}
