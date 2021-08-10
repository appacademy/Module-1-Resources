/* 
Write a function that intakes a string and returns the reverse of the string
Must be recursive.
*/
function reverse(string) {
  // Base Case
  debugger; // a new callstack frame has been added
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
