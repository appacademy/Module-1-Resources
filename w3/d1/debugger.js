/*


  Debugger!
  - place debugger keywords throughout or code
  - the debugger keyword tells the debugger where to look

  When/where do i place the debugger
  - anytime scope changes
  - anytime we modify a variable; before and after

  In the watch tab
  - we can put variable names wed like to watch
  * avoid anything that mutates data in the watch list

  Controls
  - Continue - will go debugger statement to statement

  - Step Over - go line by line and if there is a function call, step OVER it
  * still executes function stepped over, just will not show it
  * unless there is a debugger keyword in the function

  - Step Into - go line by line and if there is a function call, step INTO it
  * will enter regardless if there is a debugger keyword or not

  - Step Out - step out of any function you step into

  - Stop - stop the debugger

  - Restart - restart the debugger


*/
//lets track word - added it the watch list
//see how word variables changes as we enter different scopes
//we can also see the stack
//function at top is js current context of execution

function foo(word) { // define function foo that accepts param word
  debugger; // trigger debugger, jumps to next function call
  // console.log(word); // console.log the value stored in word param
  bar("barber"); // invoke bar function with string "barber"
}

function bar(word) { // define function bar that accepts param word
  debugger; // trigger debugger
  // console.log(word); // console.log the value stored in word param
  baz("bazaar");  // invoke baz function with string "bazaar"
}

function baz(word) { // define function baz that accepts param word
  // console.log(word); // console.log the value stored in word param
  // debugger; // trigger debugger
  return word;
}

foo("food");


let names = ['celebi', 'mochi', 'pumpkin'];

for(let name of names) {
  // console.log('hello ' + name.toUpperCase());
  debugger;
  // console.log(`${sayHello()} ${name.toUpperCase()}`);
}
