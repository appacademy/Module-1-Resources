/*Declare Keys/Values
Given the following declaration of an object, obj below, declare values so
that the print statements output what is expected. Try using both dot and bracket notation.
*/

const obj = {};

// Write your code here.

// DOT Notation
// obj.firstKey = 'firstValue'
// obj.numeric = 2
// obj.boolean = false
// obj.object = {}

//Bracket Notion
obj["firstKey"] = "firstVale";
obj["numeric"] = 2;
obj["boolean"] = false;
obj["object"] = {};

// use bracket notation for two word keys
// 'my name'

// obj['my name'] = 'maica'

console.log(obj["firstKey"]); // firstValue
console.log(obj["numeric"]); // 2
console.log(obj["boolean"]); // false
console.log(obj["object"]); // {}
// console.log(obj['my name']);
