function rec_sum(n) {
  debugger
  if (n === 1) {
    debugger
    return 1;
  }
  debugger
  sum = rec_sum(n-1);
  debugger
  return sum + n 
}

rec_sum(3)