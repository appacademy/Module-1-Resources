/*




What are fat arrows?
 - =>
 - Arrow functions - a more concise way to declare our functions

 Differences
 - this value - learn in week 4
*/

// function expression
// storing an anon function in a variable
let sayName = function(name) {
  return 'hello ' + name
}

// sayName('brandon');

// but we moved the function keyword after the parenthesis and swapped to a fat arrow =>
// if you only have one parameter, you can omit the parenthesis
let sayName2 = name => {
  return 'hello ' + name
}

// console.log(sayName2('brandon'));

//implicit vs explicit return

//explicit - non implicit
//you have to use a return
//if you have multiple lines of logic
//you must have curlys and use the return keyword
let addNums = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
}

// console.log(addNums(12,14));

// implicit return
// it must be able to be done on one line
// implicit means no curlys and no return
let addNums2 = (num1, num2) => num1 + num2; //<-- implied that this is what we return

// console.log(addNums2(12,14));//26

//return an object
// an object is delineated by - {}
// if you need to return an obj, implicitly, return it in parenthesis
let returnObj = () => ({ key: 'value'});//<- tell js not a code block an obj

let returnCodeBlock = () => {//<-- not an obj, but a code block
  let res = {};
  return res;
}

// let res = () => [1];
// console.log(res())

//arr literal
let arr = [];
//obj literal
let obj = {};



returnCodeBlock(function(num){
  return num + 1
});

// returnCodeBlock(num => num + 1);
