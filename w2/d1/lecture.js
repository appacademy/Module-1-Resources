
/*
  What are Fat arrows?
  - Arrow functions, aka Fat arrows =>
    are a more concise way of declaring our functions

  - Differences?
    - this value -
*/


// function expression
// storing an anon function ia variable
let sayName = function (name) {
  return 'hello ' + name;
}

// console.log(sayName('brandon'));

// use fat arrow!
// move the function keyword after the parameter and convert to an arrow =>
// if you use curlys, need return keyword
// if you have one parameter you can omit parenthesis
let sayName2 = name => {
  return 'hello ' + name;
};

// let sayName3 = name => 'hello ' + name;//implicit

// console.log(sayName2('Anabel'));//

// fat arrow with multiple args
// if you have two args cannot omit parenthesis
let addNums = (num1, num2) => {
  return num1 + num2;
}

// console.log(addNums(10, 12));//22

// if we wanted to make an implicit return
// we have to make sure that are statement can be done in one line
// if it can, they you can omit the curyls and the return keyword

let addNumsImplicit = (num1, num2) => num1 + num2;

// console.log(addNumsImplicit(11, 23));//34

// return an object implicitly
// let obj = {};
// wrap obj literal in parenthesis
// object literal - {}
let returnObj = () => ({ name:'brandon'})
console.log(returnObj());{}


// let arr literal = [];
// obj literal = {};
// string literal; '',"",``
