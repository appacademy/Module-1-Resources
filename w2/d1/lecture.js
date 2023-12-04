





// remove the function keyword
// add fat arrow after the params
// ! anytime you see a fat arrow
// thats a function! => or function
let hello = name => {
  return 'hello ' + name
}


// console.log(hello('brandon'));


/*
 * Multiple statement arrow function
    (parameters, go, here) => {
      expression/statement1;
      expression/statement2;
      return <a value>;
    }
*/


// Implicit return
let helloImplict = name => 'hello ' + name;// 1



// console.log(helloImplict('brandon'));

let addition = (num1, num2) => num1 + num2;


// console.log(addition(10, 15));//25



let returnObj = (name, age) => ({ name, age });

// js - code block - {}
// js - obj - {}

console.log(returnObj('brandon', 28));
//{ name: 'brandon', age: 28 }


// let math1 = (num1) => (num2) => (num3) => num1 + num2 + num3

// math1((name, age) => ({ name, age }))
