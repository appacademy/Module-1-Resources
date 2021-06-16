function reverse(string) {
  debugger;
  if (string.length === 0) { // Base Case str.length === 0
    return ""; // Recursive Case while str.length > 0
  }

  let lastLetter = string[string.length - 1]; // last letter
  let slicedStr = string.slice(0, string.length - 1); // everything BUT the last letter
  debugger; // ^^ Recursive Step
  let sub_str = reverse(slicedStr);
  debugger;
  return lastLetter + sub_str;
}

console.log(reverse("lr")); // "rl"
