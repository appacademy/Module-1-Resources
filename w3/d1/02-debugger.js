// To get your debugger set up, please head over to: 
// https://open.appacademy.io/learn/js-py---apr-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/vscode-debugger-practice
// and follow the instructions. We'll do a brief demo, however if you're unable 
// to follow along we may want to spend a moment together during the long
// to get you set up.

// The debugger provides us with a powerful way to interact with our code and
// halt its progress while we explore the current state of all of our variables
// and expressions. As we get further into this week, the debugger will provide
// us with a great tool for diving into our code and exploring what it's doing.


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