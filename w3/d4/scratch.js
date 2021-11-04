// function somethingSlow(n) {
//     if (n === 1 || n === 2) return 1

//     return somethingSlow(n - 1) + somethingSlow(n - 2)
//   }

//   function foo() {
//     console.log("food");
//   }

//   function bar() {
//     console.log("bark");
//     baz();
//   }

//   function baz() {
//     console.log("bazaar");
//   }

//   setTimeout(foo, 1500);
//   setTimeout(bar, 1000);
//   somethingSlow(35);



// Sync

// const foo = () => {
//     console.log('2');
// }

// console.log('1');
// foo();
// console.log('3');


// Async

// console.log('1');

// setTimeout(function () {
//     console.log('2');
// }, 3000);

// console.log('3');




// setTimeout()

// setTimeout(function () {
//     console.log('time is up')
// }, 3000);

// const foo = () => {
//     console.log('time is up');
// }

// setTimeout(foo, 3000);
// console.log('end');


// const food = (food1, food2, food3) => {
//     console.log(`I love ${food1}, ${food2} and ${food3}`);
// }

// const res = setTimeout(food, 0, "tacos", "pizza", "cheese curds");
// // console.log(res);

// clearTimeout(res);


// setInterval()

// const food = (food1, food2, food3) => {
//     console.log(`I love ${food1}, ${food2} and ${food3}`);
// }

// const res = setInterval(food, 1000, "tacos", "pizza", "cheese curds");
// console.log(res);

// clearInterval(res);


let count = 0;
let intervalTime = 2000;

const foo = number => {
    console.log('Packers are the best');
    count++;

    if (count === number) clearInterval(res);
}

const res = setInterval(foo, intervalTime, 10)