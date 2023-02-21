/*


  Functions!
    - A function is procedure of code that will run when called
    - writing a function is know as a function declaration or function definition


    * javascript read top and bottom
    * will not read a function until its called/invoke
    * functionName()

    Some things to remember about return statements
      1. Every function call evaluates to its return value.
      2. Every function in JavaScript returns undefined unless a return is specified.
      3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring any code below the return statement.


*/


//function declaration
//function keyword
//followed by a name, camelCase
//parenthesis, where youll take in parameters
//curly braces - are used to signify code block - {};
function functionName() {
  //this function does nothing, because its never called
}


function helloWorld() {
  console.log('hello world')
};

//we want to call/invoke our function if we want to run it
//functionName followed by parenthesis, inside of paras youd would pass arguments
// console.log(helloWorld());//undefined - there is no return value

//the name variable is a parameter
//parameter is a variable to represent the argument passed in
function printName(name) {
  console.log('1', name)

  return name;
  console.log('we wont reach here')//javascript ignore everything after the return
}

//function call/invocation
//argument is brandon
// we are passing an argument to the printName function
//we wrap our function call in a console.log when want to see what our function returns
// console.log(printName('brandon'));
// //you call a function with multiple test cases
// console.log(printName('jojo'));


//arguments and parameters
//num is our param
function addTwo(n) {
  // console.log(n)

}

//10 is our arg
// console.log(addTwo(34));//36
// console.log(addTwo(2))//4

//we can store the return value of a function in a variable
let res = addTwo(2);
// console.log(res)

// console.log(addTwo(2) === 4);//true


//last index of function
function lastIndex(word) {
  // console.log(word);
  // console.log(word[3]);
  // console.log(word[word.length - 1])
  return word[word.length - 1];
};

// console.log(lastIndex('cats'))//s
// console.log(lastIndex('mouse'))//e
