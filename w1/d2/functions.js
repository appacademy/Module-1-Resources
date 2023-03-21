/*


  Functions!
  - A function is procedure of code that will run when CALLED/INVOKED  functionName()
  - writing a function is know as a function declaration or function definition

  * javascript reads top to bottom
  * will not read a function until its called/invoked
  * functionName()

  Some things to remember about return statements
    1. Every function call evaluates to its return value
    2. Every function in javascript returns undefined unless a return is specified
    3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring anything below the return statement

  function naming convention
    - camelCase
    - descriptive name
    - verb followed by a noun getInfo, deleteInfo, editInfo

*/


//function declaration
//function keyword
//followed by name, usually camelCase - functionName
//parenthesis, where you takin in parameters
//curly braces - are used to signify a code block
function functionName() {
  //this function does nothing, because its never called/invoked
  console.log('hello')
  return 'hey'
};

//this example does not return anything, therefore defaults its return to undefined, and all this does is print hello world
function helloWorld() {
  console.log('hello world!')
  //no return value
}

//we want to call/invoke our function to run it
//were saying i want to console.log the return value of calling hello world, all hello world does is print to the termianl hello world but it does not return anything therefore the function evaluates to undefined
// console.log(helloWorld());//undefined

//when you wrap a function invocation in a console.log your loggings its return value

//our parameter which is a variable used to represent the argument passed is name
//parameters can be names anything
function printName(name) {
  console.log(name)

  return name;//this is what your function will evaluate to
}

//our argument is the string brandon
//i want to see the return value of calling printName
//so ill wrap the function invocation in a console.log
// console.log(printName('brandon'));//brandon
// console.log(printName('jojo'));//jojo
//a function evaluates to its return, the return is brandon

//arguments and parameters
//parameters are the variables used to represent the arguments passed
//arguments are passed to the function

function addTwo(num) {
  // console.log(num + 2)
  return num + 2
}

// console.log(addTwo(5));//7
//were saying, store in this variable the return value of calling addTwo passing the argument 5
let returnValueOfAddTwo = addTwo(5);//this function is being called, so its gets ran
let returnValueOfAddTwo2 = addTwo(10)
// console.log(returnValueOfAddTwo);//7
// console.log(returnValueOfAddTwo2);//12

// console.log(returnValueOfAddTwo === 7);//true


//last index of a string, function
function lastIndex(word) {
  // console.log(word);
  // console.log(word[0]);
  // console.log(word[1]);
  // console.log(word[word.length - 1]);//s
  return word[word.length - 1];
  console.log('we will never reach here')//this will not be run
}

// console.log(lastIndex('cats'));
