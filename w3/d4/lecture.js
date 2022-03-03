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
// const foo = () => console.log('2');
// console.log('1');
// foo();
// console.log('3');

// Async
// console.log('1');
// setTimeout(foo, 3000);
// console.log('3');


// setTimeout
// const foo = () => console.log('The time is up');

// setTimeout(foo, 5000);

// setTimeout(() => console.log('time is up'), 2000);
// console.log('end');


const food = (food1, food2, food3) => {
  console.log(`I love ${food1} and ${food2} and ${food3}`);
}

// const res = setTimeout(food, 1000, "redbull", "taco", "ramen");
// // console.log(res);
// // clearTimeout(res);



// setInterval

// const res = setInterval(food, 1000, "pad thai", "pizza", "mante");
// console.log(res);
// clearInterval(res);



let count = 0;

function foo(number) {
  console.log("Hello There");
  count++;

  if (count === number) clearInterval(interval);
}

const interval = setInterval(foo, 1000, 7);