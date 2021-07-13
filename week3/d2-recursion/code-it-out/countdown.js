function countdown(num) {
  if (num === 0) {
    console.log("Happy Birthday!!");
    return;
  }
  console.log(num);
  countdown(num - 1);
}

countdown(3);
