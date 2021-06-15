function countdown(num) {
  debugger;
  if (num === 0) {
    return;
  }
  console.log(num);
  countdown(num - 1);
  debugger;
}

countdown(2);

debugger;
