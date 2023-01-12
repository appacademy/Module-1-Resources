/*



    What is a setTimeout?
    - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

    - setTimeout(callbackfunction, delayInMiliseconds, param1, param2);
    - you can pass an anon function to a a setTimeout
*/

//ex
// setTimeout(console.log, 1000, 'sup')


//example w/o args
function time() {
  console.log('time is up');
};


// setTimeout(time, 4000)
//same thing but passing a anon callback
// setTimeout(() => console.log('time is up'), 4000)


function sayHi(name1, name2) {
  console.log(`Hello ${name1} and ${name2}`)
}

// let res = setTimeout(sayHi, 2000, 'brandon', 'jojo');
// console.log(res)
// clearTimeout(res);




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
// console.log(somethingSlow(44));


//recursion example

// function delayedPrinter(delaysArr) {

//   //base case
//   if(!delaysArr.length) return;

//   const currentDelay = delaysArr.shift();
//   console.log(currentDelay);

// //setTimeout(callbacfunction, delayInMiliseconds, param1)
//   setTimeout(delayedPrinter, currentDelay, delaysArr)

// };

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// delayedPrinter(delaysArr);


function delayedPrinter(delays) {
  let totalDelay = 0;

  delays.forEach((delay) => {
    totalDelay += delay;

    setTimeout(() => {
      console.log(`waiting for ${delay}`)
    }, totalDelay)

  })

};

delayedPrinter(delaysArr);
