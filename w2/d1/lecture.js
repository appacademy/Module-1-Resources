/*


  Arrow functions!
  - more concise way to declare our functions
  - allows to create one liners using the implicit return

  Difference
    - this value - learnt about week 4

*/


//function expression
//an anon function stored in a variable
let sayHello = function(name) {
  return 'hello ' + name
}

// console.log(sayHello('brandon'));


//using fat arrow
//replace function keyword with =>
//if you only have one parameter, you can omit the parenthesis
let sayHello2 = name => {
  return 'hello ' + name
}

// console.log(sayHello2('brandon'));

//another example with two args, need parenthesis because two args
//without implicit return
let addNums = (num1, num2) => {
  return num1 + num2
}

// console.log(addNums(10, 5))

//another example with two args, need parenthesis because two args
//with implicit return
//its implicit if you omit the curlys, if you omit the curlys then statement must be on one line, and you must omit the return
let addNums2 = (num1, num2) => num1 + num2

console.log(addNums2(10, 5));

//cant do this

// let addNums3 = (num1, num2) => 
// let res = num1 + num2;
// res
//must return res; then it cant be one line
/*

When can we implicitly return
  when the logic can be done on line
  youll omit the curlys and the return
  if your logic cant be done on one line, then use curlys, then you must have a return
*/

//how do we return an object
//so if you want to implicitly return a object, you must wrap it in parentheses
//an obj is delineated by {} this is an object - {}
let returnObj = () => (  {name: 'brandon'}    );
