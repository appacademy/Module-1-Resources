/*
Dot vs Bracket Notation
Given the object below, print out the values corresponding to each key
individually. Try using both dot and bracket notation where they're appropriate.
*/

const obj = {
  "first key": "1",
  second: 2,
  third_key: "three",
};

// Write your solution here.

// must use bracket notation here because the key is a string of two words
console.log(obj["first key"]);

// these cases allow for more flexibility. Can use either or in these cases.
console.log(obj.second);
console.log(obj["second"]);
console.log(obj.third_key);
console.log(obj["third_key"]);
