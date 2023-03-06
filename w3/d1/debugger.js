
/*


  Debugger!
    - place debugger keywords throughout our code
    - the debugger keyword tell the debugger where to look

  Where do I place the debugger?
    - anytime the scope changes
    - anytime we modify a variable before and after


  In the watch tab
    - we can put variables name we would like to watch


  Controls

  Continue - will go debugger statement to debugger statement

  Step Over - go line by line and if there is a function call, step over it
  *unless there is a debugger statement

  Step Into - go line by line and if there is a function call, step into it
  *will enter regardless if debugger statement is present in function call

  Step out - step out of any function you stepped into

  Stop - stops the debugger;

  Restart - restart the bugger;

*/

//were tracking with the debugger how the word variable changes as teh scope changes

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

foo("food");


let names = ['brandon', 'Whit', 'Jojo', 'Braxton', 'Anabel', 'Jesse']
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
  debugger;
}
