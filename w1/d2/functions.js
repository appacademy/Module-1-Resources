/*



  Functions!
  What is a function?
  - A function is a procedure of code that will run when called/invoked
    - a function will not run, unless its called/invoked
  - writing a function, using the function keyword - function declaration/function definition
  - A function evaluates to its return
  - its like instructions

  *javascript read top to bottom


  Some things to remember about return statements are:
  1. Every function call evaluates to its return value
  2. Every function in js, returns undefined unless its return is specified
  3. Once a return statement is encountered, any code after that return will not be read


*/

//function declaration
//function keyword
//followed by the functionName
//followed by parenthesis which contain, parameters
//take note of the syntax
//this is a code block {}
function functionName() {
  //this function does nothing because its never called!!
  console.log('hey')
}


function helloWorld() {
  console.log('hello world');
  // return 'hello world' - out function will only evaluate if we have a return
}

//calling a function
//function named followed by parenthesis
//our function will not run unless its called
//if we do not have a return, it will return undefined
// console.log(helloWorld())//undefined - because this function does not have a return, its results in undefined


//args and params
//parameter is name
//a parameter is a variable to represent the argument being passed
//the param name can be anything
function printName(name, banana, middle) {
  console.log(name, middle)
  return name;
  //anything after a return, will not be read

};

//pass an argument
//'brandon' is an argument
let lastname = 'laursen';
//wrap your function call in a console.log if you want to see what that function evaluates too
// console.log(printName('brandon', lastname, 'luke'))
// //you can call a function more than once
// console.log(printName('logan'));


//can store a return value of a function in a variable
function addTwo(num) {
  return num + 2
}

// console.log(addTwo(3));
let result = addTwo(3);
// console.log(result)

// console.log(5 === addTwo(3));//true

/*
function examples!
lets create some function
lets create a function that
  -returns the last index/letter of a word
  -multiples two numbers together
  -determines if a number is greater
  -returns a boolean, if two numbers add up to num passed in
*/


//-returns the last index/letter of a word
function lastIndex(word) {
  console.log(word);
  // console.log(word[0]);//c
  // console.log(word[1])
  // console.log(word[word.length - 1])
  return word[word.length - 1];
  // console.log(word) never reaches
};

// console.log(lastIndex('cats'))


//-multiples two numbers together
function multiply(num1, num2) {
  console.log(num1 + num2);
  return num1 * num2;
};

// multiply(10, 2);
