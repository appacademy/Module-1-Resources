/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three 
parameters. The first parameter is an object, the second parameter will be a 
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}
***********************************************************************/

function setKeyInObject(obj, string, value) {
  //!!START
  let key = string;
  obj[key] = value;
  return obj;
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;
