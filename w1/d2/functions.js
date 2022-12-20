/*


 What is a function?
  - a reusable piece of code
  - it's like instructions to execute
  - Function is a procedure of code that will run when called/invoked
  - A function evaluate to its return, if there is no return it will default to undefined

  * javascript reads top to bottom
  * js will not read a function unless its called

*/

//function!

//function declaration

//function keyword
//followed by the function name
//() parenthesis enclosed are parameters, parameters can be optional
//{} curlys signify a code block

function functionName() {
  // this function does nothing
}

//how to call a function
//use the function name followed by parenthesis, enclosed will be the arguments to pass to the function, can be optional
//calling the function/invoking
// console.log(functionName())//we get undefined because we dont have a return

function helloWord() {
  console.log("hello world");
}

// helloWord();
//passing a arg, the parameter will represent the arg being passed to the function call
//anytime you return in  function, no code under that return will be executed
function printName(name) {
  console.log(name);
  return name;
}
//pass arguments to function call/invocation
// console.log(printName('krandon'))//krandon
//we can have multiple function calls
// console.log(printName('jojo'))

function addTwo(num) {
  return num + 2;
  console.log("did we make it here?");
}

// console.log(addTwo(2))//4
//a function evaluates to its return
//we are storing the return value of a function in a variable
let result = addTwo(2);
// console.log(result);//4
// console.log(addTwo(2) === 4)//true

/*
function examples!
lets create some function
lets create a function that
  -returns the last index/letter of a word
  -multiples two numbers together
*/

function lastIndex(word) {
  // console.log(word[0]);
  // console.log(word[word.length - 1])
  return word[word.length - 1];
  // return console.log(word); //js wont reach this console.log
}

let res2 = lastIndex('cats')
// console.log(res2)

//you can multiple args to a function, you just need a param to represent it
//args/params are positional
function multiply(num1, num2) {
  let res = num1 * num2
  return res
}

// console.log(multiply(10,'10'))
function averageOfFour(one, two, three, four){
  return (console.log( (one + two + three + four) / 4));
}


let res = averageOfFour(1, 2, 3, 4);
console.log(typeof res)
// let multiply = (num1, num2) => num1 * num2;
