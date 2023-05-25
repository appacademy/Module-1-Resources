function letsJam() {
  // letsJam's scope
  // let rand = 3;

  if (10 > 8) {
    rand = 2; //where is this rand variable, i did not delcare a variable with the keyword in this scope, js has to go scope chain and find it, so it does, it scope chains up to the function scope let rand 2
  }

  if (true) {
    rand = 1;
    // console.log(rand)
  }

  if (true) {
    rand = "let's jam!";
  }

  return rand;
}

console.log(letsJam()); // ???



// <!-- -----EXAMPLE 1----- -->
let counter1 = 0;
// 1. remove the parameter
// - allows us to access the global scope var instead
function incrementCounter1() {
    counter1 += 1;
    console.log(counter1);
}

console.log("*****Example 1: Your Code*****")

incrementCounter1();   // ?
console.log(`First counter value:  ${counter1}`)    // ?

incrementCounter1();   // ?
console.log(`Second counter value:  ${counter1}`)    // ?

incrementCounter1();   // ?
console.log(`Third counter value:  ${counter1}`)    // ?


// <!-- -----EXAMPLE 2----- -->

let counter2 = 0;
// 2. change or remove param so it accesses the global scope instead
// resetting due to the param being put back to 0 each time new scope is entered
function incrementCounter2() {
    counter2 += 1;
    console.log(counter2);
}

console.log("*****Example 2: Your Friend's Code*****")

incrementCounter2(counter2);    // ?
console.log(`First counter value:  ${counter2}`)    // ?

incrementCounter2(counter2);    // ?
console.log(`Second counter value:  ${counter2}`)    // ?

incrementCounter2(counter2);    // ?
console.log(`Third counter value:  ${counter2}`)    // ?
