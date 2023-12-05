/*
Delete Keys/Values
Given the object below, delete the key-value pair such that "{}" is printed
when printing the object.
*/

const obj = {
  first: "1",
};

// Use the delete key word! works for both dot and bracket notation
// delete obj.first
delete obj["first"];

console.log(obj); // {}
