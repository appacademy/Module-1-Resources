function foo() {
  debugger;
  return 2 + bar();
}

function bar() {
  debugger;
  return 6 + baz();
}

function baz() {
  debugger;
  return 3;
}

console.log(foo());

debugger;

// When functions are popped off the call stack,
// they are EVALUATED as their return value!

/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/
function rec_sum(n) {
  debugger;
  if (n === 1) {  //Base Case
    debugger;
    return 1;
  }
  // Recursive Case - n > 1
  debugger;
  return n + rec_sum(n - 1);
}
// console.log(rec_sum(1)); // 1
// console.log(rec_sum(2)); // 3 // equal num + rec_sum(num - 1)
console.log(rec_sum(3)); //6 this will equal 3 + rec_sum(n - 1)

/* 
Write a function that intakes a string and returns the reverse of the string
Must be recursive.
*/
function reverse(string) {
  // Base Case
  debugger; // a new call stack frame has been added
  if (string.length <= 1) {
    debugger; // your base case has been met
    return string;
  }
  // Recursive Case - string.length > 1
  let lastLetter = string[string.length - 1];
  let restOfWord = string.slice(0, string.length - 1);
  // Recursive Step - slice() reducing the length by 1;
  debugger; // you're about to recurse
  return lastLetter + reverse(restOfWord);
}

// console.log(reverse("")); // ""
// console.log(reverse("l")); // "l"
// console.log(reverse("lm")); // "ml" take the last letter + reverse("l")
console.log(reverse("lmr")); // "rml" take the last letter + reverse("lm")
// console.log(reverse("house"));
