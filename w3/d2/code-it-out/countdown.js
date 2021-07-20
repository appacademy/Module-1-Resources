// we're expecting num > 0
function countdown(num) {
  console.log(`Starting stack where num is ${num}`);
  if (num === 0) {
    // BASE CASE
    console.log("Base Case");
    console.log(`I'm popping off stack where num is ${num}`);
    return;
  }
  // RECURSIVE CASE while num > 0
  // console.log(num);
  countdown(num - 1); // RECURSIVE STEP
  console.log(`I'm popping off stack where num is ${num}`);
}

countdown(2);
