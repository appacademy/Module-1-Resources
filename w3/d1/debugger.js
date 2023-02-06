/*


  Debugger!
     - place debugger keywords throughout our code
     - the debugger keyword tells the debugger to look

  Where do I place debugger
    -  anytime the scope changes, you'd the prob want another debugger

  In the watch tab!
    - we can put variables we would like to watch/track


    Continue - will go debugger statement to debugger statement
    Stop - stops the debugger
    Restart - restart the debugger
    Step into - go line by line into a function calls, will step into the function regardless of a debugger statement or not
      -if there isa  function call, we will step into that function
    Step out - if you step into a function, you can use step out to leave that function
    Step over - will step over any function that does not have a debugger
      - if there is a function call, and no debugger statement, if we use step over, it will step over the function

*/

function foo(word) {
  debugger;
  console.log(word);
  bar("barber");
}

function bar(word) {
  debugger;
  console.log(word);
  baz("bazaar");
}

function baz(word) {
  console.log(word);
  // debugger
}

foo("food");


let names = ['brandon', 'john', 'Jojo', 'Braxton', 'anabel', 'Jesse']
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
  debugger;
}
