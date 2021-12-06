// function somethingSlow(n) {
//   if (n === 1 || n === 2) return 1

//   return somethingSlow(n - 1) + somethingSlow(n - 2)
// }

// function foo() {
//   console.log("food");
//   somethingSlow2()
// }

// function bar() {
//   console.log("bark");
//   baz();
// }

// function baz() {
//   console.log("bazaar");
// }

// // foo();
// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// somethingSlow(40);


// Sync

// const foo = () => {
//   console.log('2');
// };

// console.log('1');
// foo();
// console.log('3');


// Aysnc

// console.log('1');
// setTimeout(foo, 3000);
// console.log('3');


// setTimeout()

// const foo = () => {
//   console.log('kmaps');
// };

// setTimeout(foo, 2000);

// setTimeout(function () {
//   console.log('kmaps');
// }, 2000);


// const food = (food1, food2, food3) => {
//   console.log(`I love ${food1} and ${food2} and ${food3}.`);
// };

// const res = setTimeout(food, 1000, "tacos", "pizza", "cheese curds");

// clearTimeout(res);


// setInterval()

// const food = (food1, food2) => {
//   console.log(`I love ${food1} and ${food2}`);
// };

// const interval = setInterval(food, 4000, "cheeseburger", "bear meat");
// clearInterval(interval);
// console.log(interval)



let count = 0;
let intervalTime = 2000;

function foo(number) {
  console.log("Whats going on?");
  count++;

  if (count === number) {
    clearInterval(interval);
  }
};

const interval = setInterval(foo, intervalTime, 5);