let count = 0;
let timeoutObject = setInterval(sayHello, 2000, "Yooooo", "how are you????");

function sayHello(str1, str2) {
  console.log(`${str1} ${str2}`);
  count++
  if (count >= 5) {
    clearInterval(timeoutObject)
  }
}


