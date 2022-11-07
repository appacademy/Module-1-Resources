
debugger;
function foo(word) { // define function foo that accepts param word
  debugger; // trigger debugger
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
  debugger; // trigger debugger
}

// Before running this code, take a moment to stop and think about what we
// expect to see in our output.
// What's the value of word at any moment?
// What's the order we expect to see our output?

foo("food");

let names = ['brandon', 'Drew', 'Jojo', 'Braxton', 'Charlie', 'Jesse']
for(let i = 0; i < names.length; i++){
  let name = names[i];
  debugger;
  console.log(names[i]);

}
