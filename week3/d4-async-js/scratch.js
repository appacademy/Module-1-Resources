function somethingSlow(n) {
  //I inserted a function that is actually slow
  if (n < 2) {
    return n;
  }

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

// function foo() {
//   console.log("foo");
// }

// function bar() {
//   console.log("bark");
//   baz();
// }

// function baz() {
//   console.log("bazaar");
// }

// setTimeout(foo, 0); // doesn't block execution
// setTimeout(bar, 0); // doesn't block execution

// console.log(somethingSlow(44));

// console.log("hello");

// function sayHi(str, str2) {
//   console.log(str, str2);
// }

// setTimeout(sayHi, 1000, "hi", "bye"); //cb, delay (in ms), (n amount of arguments for the cb), arg, arg, arg
// // sayHi('hi') after 1000ms

// function submitOrder(item) {
//   console.log(`order submitted, ordered: ${item}`);
// }

// // submitOrder("bike");
// let itemOrdered = "bike";

// let timeoutObj = setTimeout(submitOrder, 3000, itemOrdered);

// let userCancelled = true; //mimic if the user clicked cancel

// if (userCancelled) {
//   clearTimeout(timeoutObj);
// }
// function sayHi(str) {
//   console.log(str);
// }

// let timeoutObj = setInterval(sayHi, 1000, "hi"); //cb, time interval, (n amount of args) arg, arg, arg.....
// // console.log(timeoutObj);
// // clearInterval(timeoutObj);

// let counter = 0;

// let timeoutObj = setInterval(function () {
//   counter += 1;
//   console.log(counter);
//   if (counter === 10) {
//     console.log("logged out");
//     clearInterval(timeoutObj);
//   }
// }, 1000);

// setTimeout(() => (counter = 0), 5000); // simulates user interaction
