// global scope
// let name = "global scope";
function myFunc() {
  // function/local scope
  // let name = "function/local scope";

  if (true) {
    // block scope
    let name = "block scope 1";

    for (let i = 0; i < 1; i++) {
      // another block scope
      let name = "block scope 2";

      // console.log(name); // block scope 2
      // ! not outward -> inward
    }
  }

  // global declared variable
  // ! don't do this
  x = "bad";
}

// myFunc();

function myFunc2() {
  let name = "brandon";
  // able to access x variable in a different scope
  console.log(x); // "bad" - no error
}

// console.log(name);
// myFunc2();





function myFunc3() {
  let name = "initial value";

  for (let i = 0; i < 2; i++) {
    name = "new value";
  }

  console.log(name); // new value
}

// myFunc3();
