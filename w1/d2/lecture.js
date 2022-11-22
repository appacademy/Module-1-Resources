/*


    What is a function?
      - A block of code that you can call, so you dont repeat yourself
      - A means of abstraction, supress detail, focus on solving sub problmem
      - A function is a procedure of code that will run when called,
      - Writing a function is know as function declaration/function definition
      - A function will evaluate to its return
        - if there no return value, it returns undefined

      Javascript reads top to bottom
      A function will not be read until its called/invoked
*/


//function declaration
//function keyword
//followed by the function name
//A function will not be read until its called/invoked
function functionName() {
  //this function does nothing, it is not called
}


function helloWord() {
  console.log('hello world');

}

//in order to call a function, we must invoke using ();
//function name, followed by paranthesis
//this function does not have a return, therefore it return undefined
// console.log(helloWord())//undefined


//function with return value
function printName(name) {
  return name;
  //if you do any logic after the return, it will not run it
  //if you return, you exit the function
  console.log('dont reach here', name)
}

//we have a return but we are not printing the return value to the terminal
//if we wanted to wed wrap our function call in console.log
// console.log(printName('brandon'))//brandon


//arguments and parameters
//paramaters and args enclosed in paranthesis
//code to be run is wrapped in curly braces
//paramaters represent the arguemnts being passed to the function
//we need a paramater to represent the arg being passed
function addTwo(num) {
  // console.log(num)//2
  return num + 2;
}

//we pass are arguments to the function call
// 2 would be the arugment
// console.log(addTwo(2))

//can store return values in a variable
//show a function evaluate to its return and you can store in var
let result = addTwo(2);
// console.log(addTwo(2) === 4)//true


//function examples!
//lets create a function
/*
  - return the last letter of a word
  - multiplies two numbers together
*/

function lastLetter(word) {
  // console.log(word)
  // console.log(word[0])//c
  // console.log('in the function cl',word[word.length - 1]); //s
  let result = word[word.length - 1]
  return result;
  //wont reach here
  console.log(word[2])
}

// console.log('first func call', lastLetter('cats'))//s
// console.log('second function call', lastLetter('dog'))//g

//return two nums nutiplied together
function multiply(num1, num2) {
  // console.log('num1', num1);
  // console.log('num2', num2);
  return num1 * num2;
}

console.log(multiply(10, 5))//50

console.log(50 === multiply(10, 5))//true
