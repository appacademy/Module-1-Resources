// Function Declaration Syntax

// // Function Definition for sayHello
// function sayHello(name){
//     return "Hello " + name;
// }

// // Invoke Function
// console.log(sayHello("Caleb"))
// //  ^
// // Just an identifier


// let newFunctionName = sayHello
// console.log(newFunctionName("Caleb"))

// --------------------------------------------------


// Function Assignment Syntax

// let myFunction = function(name){
//     return "Hello " + name;
// }

// console.log(myFunction("Caleb"))

// --------------------------------------------------


// Arrow Function Syntax (exact same as function 
// assignment, just different syntax)

// let myArrowFunction = (name) => {
//     return "Hello " + name;
// }

// let myArrowFunctionSimpler = name => {
//     return "Hello " + name;
// }

// let myArrowFunctionSimplest = name => "Hello " + name;

// myArrowFunctionSimplest("Caleb")










// Exploring The Anonymity of arrow functions
// sayHello(name) => console.log("Hi, " + name); // SyntaxError

let myFunc = ((name)=>{ console.log("Hi, " + name) })("Caleb")
console.log(myFunc) 

// invoke