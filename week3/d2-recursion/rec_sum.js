function rec_sum(n) {
  debugger
  if (n === 1) {
    debugger
    return 1;
  }
  debugger
  let sum = rec_sum(n-1);
  debugger
  return sum + n 
}
debugger
rec_sum(3)