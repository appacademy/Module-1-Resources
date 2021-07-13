function countdown(num) {
  debugger;
  if (num === 0) {
    debugger;
    console.log('Happy Birthday!!')
    return; 
  }
  console.log(num);
  countdown(num - 1);
  debugger;
}

countdown(3);

debugger;
