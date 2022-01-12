// function somethingSlow(n) {
//   if (n === 1 || n === 2) return 1

//   return somethingSlow(n - 1) + somethingSlow(n - 2)
// }

// function foo() {
//   console.log("food");
// }

// function bar() {
//   console.log("bark");
//   baz();
// }

// function baz() {
//   console.log("bazaar");
// }

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// somethingSlow(35);


// Sync

// const foo = () => {
//   console.log('2');
// };

// console.log('1');
// foo();
// console.log('3');


// Async
// console.log('1');

// setTimeout(function () {
//   console.log('2');
// }, 0);

// console.log('3');
// function somethingSlow(n) {
//   if (n === 1 || n === 2) return 1

//   return somethingSlow(n - 1) + somethingSlow(n - 2)
// }
// somethingSlow(40);
// console.log('done');




// setTimeout
// setTimeout(() => {
//   console.log('time is up');
// }, 5000);

// console.log('end');

// const foo = () => {
//   console.log('time is up');
// }

// setTimeout(foo, 1000);
// console.log('end');

// const food = (food1, food2, food3) => {
//   console.log(`I love ${food1} and ${food2} and ${food3}`);
// };

// const res = setTimeout(food, 1000, "tacos", "pizza", "cheese curds");

// // console.log(res);

// clearTimeout(res);



//setInterval

// const food = (food1, food2) => {
//   console.log(`I love ${food1} and ${food2}`);
// };

// const interval = setInterval(food, 1000, "cheeseburgers", "fried rice");
// console.log(interval);

let count = 0;
let intervalTime = 2000;

function foo(number) {
  console.log("Hey");
  count++;

  if (count === number) clearInterval(interval);
};

const interval = setInterval(foo, intervalTime, 5)
console.log(interval)