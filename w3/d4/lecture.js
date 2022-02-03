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
// somethingSlow(35);
// setTimeout(bar, 1000);


// const foo = () => console.log('2');

// // Sync
// // console.log('1');
// // foo();
// // console.log('3');

// // Async
// console.log('1');
// setTimeout(foo, 0);
// console.log('3');
// console.log('4')
// const print = x => console.log(x);
// print("Hello");



// setTimeout()

// setTimeout(() => {
//   console.log('time is up');
// }, 3000);

// console.log('end');

// const foo = () => console.log('time is up');

// setTimeout(foo, 3000);
// console.log('end');


// const food = (food1, food2) => console.log(`Jeff loves ${food1} and ${food2}`);

// const res = setTimeout(food, 1000, "cheese curds", "pizza");
// console.log(res);

// clearTimeout(res);


// setInterval()

// const food = (food1, food2) => console.log(`Jeff loves ${food1} and ${food2}`);

// const res = setInterval(food, 1000, "tacos", "brownie fudge ice cream");
// // console.log(res);
// clearInterval(res);




let count = 0;
let intervalTime = 1500;

const foo = number => {
  console.log("Hey");
  count++;

  if (count === number) clearInterval(res);
}

const res = setInterval(foo, intervalTime, 10);
