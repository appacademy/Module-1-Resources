/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will 
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it 
returns a string of "Happy New Year!". Look closely at how this function is 
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/
function countDownTimer(num) {
  //!!START
  if (num === 0) return "Happy New Year!";
  const _count = () => {
    num -= 1;
    if (num <= 0) {
      return "Happy New Year!";
    } else {
      return _count;
    }
  };
  return _count;
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = countDownTimer;
} catch (e) {
  return null;
}
