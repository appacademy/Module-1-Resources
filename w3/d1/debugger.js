/*




  Debugger

  What is a debugger?
  * A tool used to help debug our application
  * Can be used to place debugger/breakpoint keywords to track the execution of code
  * The debugger keyword tells the debugger where to look
  * Can be used to track the call stack
  * Can be used similarly to console.log
    * But we will have more control!

  Where do I place the debugger keyword?
  * Anytime the scope changes
  * Anytime we modify a variable and want to see the before and after

  Control
  Continue
    * will tell the debugger to go each debugger statement/keyword
  Step Over
    * go line by line and if there is a function call, step over it
    * If there is a debugger statement; the debugger will enter the function regardless if using step over
    * step over: step over function call
    * wont step over functions that have a debugger statement
  Step Into
    * Go line by line and if there is a function call; step into it
    * regardless if there is a debugger statement or not; step into will enter the function
    * step into: step into function calls
  Step Out
    * step out of any function you stepped into
  Stop
    * stop the debugger
  Restart
    * restarts the debugger

  In the watch tab
    * We can put variable names we would like to see change

*/

function foo(word) { // define function foo that accepts param word
   // trigger debugger, jumps to next function call
  debugger;
  console.log(word); // console.log the value stored in word param
  bar("barber"); // invoke bar function with string "barber"

}

function bar(word) { // define function bar that accepts param word
  debugger; // trigger debugger
  console.log(word); // console.log the value stored in word param
  baz("bazaar");  // invoke baz function with string "bazaar"
}

function baz(word) { // define function baz that accepts param word
  console.log(word); // console.log the value stored in word param
  // debugger; // trigger debugger
}

foo("food");


let names = ['brandon', 'charles', 'Anabel', 'trevor'];
// * running loop in global scope
// * global scope has its own stack frame
// * first frame added when running node
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
  debugger;
}
