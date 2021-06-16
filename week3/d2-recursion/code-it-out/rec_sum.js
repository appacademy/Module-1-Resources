function rec_sum(n) {
  debugger;
  if (n === 1) { // Base Case
    debugger; // Recursive CASE - while n > 1
    return 1;
  }
  let sum = rec_sum(n - 1); // Recursive STEP
  debugger;
  return sum + n;
}

console.log(rec_sum(3));

debugger;
