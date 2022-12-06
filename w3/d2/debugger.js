/*


  Debugger!

  - place debugger keywords throughout our code
  - the debugger keyword tells the debugger where to look

  Where do i place debuggers?
  - anytime the scope changes, youd prob want another debugger

  In the watch tab
    - we can put variables we would like to watch

    Continue- will go debugger statement to debugger statement
    stop- stops the debugger
    restart- restart the debugger
    step into -  go line by line into function calls will step into the function regardless if there is a debugger statement or not
    step over - will step over any function that does not have a debugger, if it does it will enter that function
*/


function foo(word) {
  debugger;
  console.log(word);
  bar('barber');
}

function bar(word) {
  debugger;
  console.log(word);
  baz('bazaar');
}

function baz(word) {
  console.log(word);
  debugger
}

debugger;
foo('food')



let names = ['brandon', 'David', 'Jojo', 'Braxton', 'Charlie', 'Jesse']

for(let i = 0; i < names.length; i++) {
  debugger
  if(true) {
    debugger;
  }
}
