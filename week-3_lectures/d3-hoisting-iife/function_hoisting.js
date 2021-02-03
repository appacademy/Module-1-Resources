// review variable hoisting
function hoistVar(){
  console.log(dog);
  var dog = "dog"
}

hoistVar();


function hoistLetandConst(){
  debugger
  console.log(cat);
  const cat = "cat"
}


hoistLetandConst()

// function declaration hoisting

hello();

function hello(){
  console.log("hello!");
}


// function expression hoisting 
hello();

let hello = function(){
  console.log("hello!")
}

// function expression hoisting with var

hello();

var hello = function(){
  console.log("hello!")
}


// combining function and variable hoisting let and const 

let hello = "hello"

function hello(num) { //ReferenceError: Identifier 'hello' has already been declared
  console.log("hello!")
}

console.log(hello)


// combining function and variable hoisting var

var foo = "I'm a variable" // if we create a variable with var and assign it a value, then it will trump anything that comes below it

function foo(num) { 
  return "i'm a function"
}

console.log(foo) // i'm a variable



// combining function and variable hoisting var

var foo; // if we create a variable with var and assign it a value, then it will trump anything that comes below it

function foo(num) { 
  return "i'm a function"
}

console.log(foo) // [Function: foo]