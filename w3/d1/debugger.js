

/*


  ! Things to look out for
    * wsl user - check they have to wsl extension in vscode
    * but I didn't see 'Launch' or any other debugger info after making a blank file until I selected 'Run' > 'Start Debugging'


  What is the debugger?
    * A tool used to help debug our application
    * Can be used to place debugger/breakpoint keywords to track the execution of our code
    * The debugger keyword tell the debugger where to look
    * Can track call stack
    * Can be used similarly like a console.log
      * But we have more control!


  Where do I place the debugger?
    * anytime the scope changes
    * anytime we modify a variable and want to see the before and after
    * debugger tries to access whatever is in its current scope
    * block, local/function, and global scopes

  Controls

  Continue
    * will go debugger statement to debugger statement
  Step Over
    * go line by line and if there is a function call, step over it
    * If there is a debugger statement; the debugger will enter the function regardless if using step over
    * Step over: steps over function calls
    * Wont step over functions that have a debugger statement
  Step Into
    * Go line by line and if there is a function call, step into it
    * Regardless if there is a debugger statement or not; step into will enter the function
    * Step into: steps into function calls
  Step out
    * step out of any function you stepped into
  Stop
    * stops the debugger
  Restart
    * restart the debugger

  In the watch tab
    * we can put the name variables names we would like to watch

*/

// ! Comment out console.log or step into will step into console.log
function foo(word) { // define function foo that accepts param word
  debugger; // trigger debugger, jumps to next function call
  console.log(word); // console.log the value stored in word param
  bar("barber"); // invoke bar function with string "barber"
}

function bar(word) { // define function bar that accepts param word
  debugger; // trigger debugger
  console.log(word); // console.log the value stored in word param
  baz("bazaar");  // invoke baz function with string "bazaar"
}


// ! leave out debugger to show that step into will
// step into the function and go line by line
// step over will step over the function
// if there is a debugger, then it will enter the function regardless of step into/step over

function baz(word) { // define function baz that accepts param word
  console.log(word); // console.log the value stored in word param
  // debugger; // trigger debugger
}

foo("food");

let names = ['brandon', 'charles', 'Anabel', 'trevor'];
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
  debugger;
}


