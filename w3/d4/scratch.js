// Single Thread v Multi Thread

// Single: handle one task at a time, wait for it to be completed and 
// and then go to the next task

// Multi: Handle more than one task at a time, if mutual resources are 
// are being used, a thread will have to wait to be executed

// Multi Threaded Examples
// 1. Web Server - it can handle multiple requests from multiple users
//  at any given time
// 2. Chat Server (Slack or Discord) - Handle many chat rooms with many users
// at the same time
// 3. Video Games - rendering areas of the map,  loading assests, calculate
// what many different characters and/or objects are doing
// 4. Web Browsers - you can have many tabs open at once, you can download
// many files from different web pages at the same time
// 5. Text Editor - spelling check, autosave, formatter, etc... 


// Threading

// setTimeout(function() {
//     console.log("Time is up")
// }, 1000);

// function nextTask() {
//     console.log('done');
// }

// nextTask();

// What order do these print out
// done => time is up

// setTimeout(function() {
//     console.log("Time is up")
// }, 1000);

// function blockingTheThread() {
//     while (true) {
//         console.log('whats up');
//     }
// }

// blockingTheThread()


// Event Loop
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
//   somethingSlow(44);


// Async v Sync
// const foo = () => {
//     console.log('2')
// }

// console.log('1');
// foo();
// console.log('3');


// console.log('1')

// setTimeout(function () {
//     console.log('2')
// }, 2000)

// console.log('3');


// setTimeout()

// Ex. 1

// setTimeout(function () {
//     console.log('time is up')
// }, 1000)

// console.log('end')

// function foo() {
//     console.log('time is up');
// };

// setTimeout(foo, 1000);

// console.log('end');


// Ex. 2
// function foo(food1, food2) {
//     console.log('time is up');
//     console.log(`I love ${food1} + ${food2}`);
// };

// const res = setTimeout(foo, 1000, 'tacos', 'pizza');
// // console.log(res);
// clearTimeout(res);

// console.log('end');




// setInterval()

// ex. 1

// function foo(food1, food2) {
//     console.log('time is up');
//     console.log(`I love ${food1} + ${food2}`);
// };

// setInterval(foo, 1000, 'pizza', 'tacos');


// ex. 2
// function foo(food1, food2) {
//     console.log('time is up');
//     console.log(`I love ${food1} + ${food2}`);
// };

// const interval = setInterval(foo, 1000, 'pizza', 'tacos');
// // console.log(interval)
// clearInterval(interval)


// ex. 3
let count = 0;
let time = 2000;

function foo(number) {
    console.log('time is up');
    count++;

    if (count === number) {
        clearInterval(interval);
    }
}

const interval = setInterval(foo, time, 5);
