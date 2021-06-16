function countdown(num) {
  debugger;
  if (num === 0) {
    debugger;
    // Base Case - stops recursion
    return; // Recursive Case - while num > 0
  }
  console.log(num);
  countdown(num - 1); // Recursive STEP - leads us to our base case
  debugger;
}

countdown(2);

debugger;
