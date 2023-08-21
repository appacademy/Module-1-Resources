

/*

  What is the debugger?
    * A tool used to help our application
    * Can be used to place debugger/breakpoint keywords to track the execution of your code
    * Track the call stack
    * Use the debugger keyword to tell the debugger where to look
    * Can be used similarly a console.log
      * But we have more control

  Where do I place the debugger
    * anytime the scope changes
    * anytime we modify a variable and want to see the before and after
    * debugger tries to access what is in its current scope



  In the watch tab
    * we can put the names of variables we would look to keep track of

  Controls

  Continue - will go debugger statement to debugger statement

  Step over
    * go line by line and if there is a function call step over it
    * If there is a debugger statement the debugger will enter the function regardless of using step over
    * Step over: step over function call
    * wont stop over function that have a debugger statement
  Step Into
    * Go line by line and if there is a function call, step into it
    * regardless if there is a debugger statement or not; step into will enter the function
    * step into: step into function calls
  Step out
    * step out of any function that you step into
  Stop
    * stops the debugger
  Restart
    * restarts the debugger
*/

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

function baz(word) { // define function baz that accepts param word
  console.log(word); // console.log the value stored in word param
  // debugger; // trigger debugger
}

// foo('Food');


function test() {

  let name = 'brandon';
  debugger;
  /// ======
  name += ' laursen';
  debugger;

  if(false) {
    debugger;
    name = 'false';
  }

  if(true) {

    let name = 'anthony'
    debugger;
  }

}


test();
