// Base Case
// Recursive Case
// Recursive Step
function reverse(string) {
  if (string.length === 0) {
    return "";
  }
  let lastLetter = string[string.length - 1];
  let slicedStr = string.slice(0, string.length - 1);
  debugger;
  let sub_str = reverse(slicedStr);
  debugger;
  return lastLetter + sub_str;
}

console.log(reverse("lr"));
