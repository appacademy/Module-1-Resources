/*


  Debugger!
  - place debugger keywords throughout our code
  - the debugger keyword tell the debugger where to look

  When I do place the debugger?
  - anytime scope changes
  - anytime we modify a variable, before and after

  In the watch tab
  - we can put variables names we like to watch
  * avoid anything that mutates data in the watch list

  Controls!

  continue - will go debugger statement to statement

  step over - go line by line and if there is a function call, step OVER it
    * unless there is a a debugger statement

  step into - go line by line and if there is a function call, step into it
    * will enter regardless if debugger statement is present or not

  step out - step out of any function you stepped into

  stop - stop the debugger

  restart - restart the debugger
*/



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


let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

for(let i =0; i < names.length; i++){
  let name = names[i];
  debugger
  // console.log(`${hello()} ${name.toUpperCase()}`);
};
