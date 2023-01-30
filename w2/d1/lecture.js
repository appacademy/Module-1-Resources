/*

  Arrow Functions!
  - arrow function, more concise way to declare our functions

  Difference
    - This value - learn about week 4

*/

//function expressions
//storing an anon function in a variable
//turn into fat arrow
//replace the function keyword with  =>, move it after params
//if there is only one parameter, you can omit the parenthesis
let sayHello2 = function() {

}

let sayHello = name => {
  return "hello " + name;
};

// console.log(sayHello("brandon"));
//without implicit return
// you use the curlys
//you can have multiple lines of code
//must have a return
let addTwo = (num1, num2) => {

  return num1 + num2
}


// with implicit return
//if your code can be return in one line
//remove the curly's and the return
let addThree = (num1, num2, num3) => num1 + num2 + num3


console.log(addThree(1,2,3))


//if you want to implicitly return a obj, then wrap it in  parenthesis
let returnObj = () => ({name:'brandon'})

//if you make an IFFE
((name) => console.log("Hi, " + name))('brandon'); // this works!
