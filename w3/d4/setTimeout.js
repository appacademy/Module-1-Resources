// fib
function somethingSlow(n) {
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// // * tree recursion
// console.log(somethingSlow(44));
// sync code block the call stack
// *  we had to wait for somethingSlow to complete before removing the task from the message queue
/*
  701408733
  bark
  bazaar
  food
*/

// recursion w/ setTimeout
// we want to print the number and use the number a the delay for a setTimeout
// * Is this actually recursing?
// * cant populate the call stack with async code
// * pseudo - recursion
function delayedPrinter(delaysArr) {
  // console.log(delaysArr);
  debugger;
  if (!delaysArr.length) return;

  const currentDelay = delaysArr.shift();
  console.log(currentDelay);

  // setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )
  // delayedPrinter(delaysArr);
  setTimeout(delayedPrinter, currentDelay, delaysArr);
  // * alt syntax: pass anon callback

  // * alt syntax using anon callback
  // setTimeout(
  //   (delaysArr) => {
  //     delayedPrinter(delaysArr);
  //   },
  //   currentDelay,
  //   delaysArr
  // );

  // * This syntax works as the delaysArr will be accessed through scope chaining, no argument is passed to the function
  //   setTimeout(() => {
  //     delayedPrinter(arr);
  //   }, currentDelay);
  // };
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// delayedPrinter(delaysArr);

// .forEach doesnt care about the order in which you send callbacks to the node api
// * the delays are sent to the message queue all at the same time
function delayedPrinter2(delaysArr) {
  let totalDelay = 0; // added
  // added
  delaysArr.forEach((delay) => {

    totalDelay += delay;


    setTimeout(() => {
      console.log(delay);
    }, totalDelay); // added


  });
}

delayedPrinter2(delaysArr);
