/*
Using Variables as keys
Write a function that accepts an object, obj, and a string, str and prints
the value from the object at the key str.
*/

const obj = {
  first: "1",
  second: 2,
  third: "three",
};

const str = "first";

const variableAsKey = (obj, str) => {
  // Write your code here.

  // We must use bracket notation in this case because dot notation does not work with variables
  console.log(obj[str]);
};

variableAsKey(obj, str); // "1"
variableAsKey(obj, "second"); // 2
