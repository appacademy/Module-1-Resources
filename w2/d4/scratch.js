
// global scope
// let name = "global scope";

function myFunc() {
  // function/local scope
  // let name = "function/local scope";

  if (true) {
    // block scope
    // let name = "block scope 1";

    for (let i = 0; i < 1; i++) {
      // another block scope
      let name = "block scope 2";
      console.log(name); // block scope 2
      // * if were not able to find the variable we need in the immediate scope, js will scope chain to the outer scopes to find one, in this case, if js did not find name in block scope 2, js will scope chain up and find the name in block scope 1
      // *  we can go inward -> outward
      // ! not outward -> inward
    }
  }

  // global declared variable
  // ! don't do this
  brandonPassword = "bad";
}

myFunc();


// outer scope does not have access to inner scope
// *  we can go inward -> outward
// ! not outward -> inward
function myFunc2() {
  let name = "brandon";
  // able to access x variable in a different scope
  console.log(brandonPassword); // "bad"
}

// myFunc2();
// console.log(name);



// * We can reassign the values of outer scope variables
function myFunc3() {
  let name = "initial value";

  for (let i = 0; i < 2; i++) {
    name = "new value";
  }

  console.log(name); // new value
}

myFunc3();
