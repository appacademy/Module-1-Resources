/* 
Write a function that intakes a string and returns the reverse of the string
Must be recursive.
*/
function reverse(string) {
  debugger;
  if (string.length <= 1) {
    // BASE CASE
    debugger;
    return string;
  }
  // RECURSIVE CASE while string length > 1
  let lastLetter = string[string.length - 1];
  let restOfWord = string.slice(0, string.length - 1);
  let reversedRestOfWord = reverse(restOfWord);
  debugger;
  return lastLetter + reversedRestOfWord;
}

console.log(reverse("lmr")); // "rl" // "r" + reverse("l")

