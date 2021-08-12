// Single Thread v MultiThread

// single only handles one task at a time. once completed it will move to the next

// multi handles more than one task at a time. If mutual resources are being used
// the task may have to wait to execute

// Examples of multi threaded purposes
 // 1. Web Browsers - you can have many tabs, you can download multiple files
 //     from different web pages at the same time
 // 2. Web Servers - it can handle multiple requests from multiple users at any
 //     given time
 // 3. Computer Games / Video Games - rendering areas of the map, calculating
 //    where and what different characters or objects are doing.
 // 4. Text Editor - spelling check, autosave, formatter, what the user is typing in



 // THREADIN
 
 /* Example 1 */

//  setTimeout(function() {
//     console.log('times up');
//  }, 1000);

//  function nextTask() {
//      console.log('done');
//  };

//  nextTask();

 // What order does this print out?
    // done
    // times up


/* Example 2 */

// function blockingTheThread() {
//     while (true) {
//         console.log('hi');
//     };
// };

//  setTimeout(function() {
//     console.log('times up');
//  }, 1000);

//  blockingTheThread();


 
 
 // Event LOOP

//  function somethingSlow(n) {
//      if (n < 2) {
//          return n;
//      }

//      return somethingSlow(n -1) + somethingSlow(n - 2)
//   }
  
//   function foo() {
//     console.log("food");
//   }
  
//   function bar() {
//     console.log("bark");
//     baz();
//     return;
//   }
  
//   function baz() {
//     console.log("bazaar");
//     return;
//   }
  
//   setTimeout(foo, 1500);
//   setTimeout(bar, 1000);
//   console.log(somethingSlow(44));

  // What order everything will be printed?
  // somethingSlow
  // bark => bazaar => food



  // Async v Sync

  // Example 1 - Sync
//   console.log('one');
//   console.log('two');
//   console.log('three');

  // Example 2 - Sync
//   const foo = () => {
//       console.log('two');
//   };

//   console.log('one');
//   foo();
//   console.log('three');


  // Example 3 - Aysnc
//   console.log('one');

//   setTimeout(function () {
//       console.log('two');
//   }, 1500);

//   console.log('three');


// setTimeout Problems

// Problem 1
// setTimeout(function () {
//     console.log('time is up');
// }, 1000);

// console.log('end');

// end
// time is up


// Problem 2
// function foo() {
//     console.log('time is up');
// };

// setTimeout(foo);

// console.log('end');


// Problem 3
// function foo(food1, food2, food3) {
//     console.log('time is up');
//     console.log(`I love ${food1} + ${food2} + ${food3}`)
// };

// setTimeout(foo, 1000, 'pizza', 'tacos', 'cheeseburgers');

// console.log('end');

// end => time is up => I love pizza and tacos


// Problem 4
// function foo(food1, food2, food3) {
//     console.log('time is up');
//     console.log(`I love ${food1}, ${food2}, and ${food3}`)
// };

// const res = setTimeout(foo, 1000, 'pizza', 'tacos', 'cheeseburgers');
// // console.log(res)
// clearTimeout(res)


// setInterval

// Problem 1
// function foo(food1, food2, food3) {
//     console.log('time is up');
//     console.log(`I love ${food1}, ${food2}, and ${food3}`)
// };

// setInterval(foo, 1000, 'pizza', 'tacos', 'beer')


// Problem 2
// function foo(food1, food2, food3) {
//     console.log('time is up');
//     console.log(`I love ${food1}, ${food2}, and ${food3}`)
// };

// let interval = setInterval(foo, 1000, 'pizza', 'tacos', 'beer')
// // console.log(interval)
// clearInterval(interval);


// Problem 3
// let count = 0;

// function foo() {
//     console.log('time is up');
//     count++;

//     if (count === 10) {
//         clearInterval(intervalObj);
//     };
// };

// const intervalObj = setInterval(foo, 1000)

// Problem 4
// function intervalCount(count) {
//     const intervalObj = setInterval(function() {
//         console.log('time is up');
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj)
//         };
//     }, 1000);
// };

// intervalCount(10);

// Problem 5
// function intervalCount(count, delayInterval) {
//     const intervalObj = setInterval(function() {
//         console.log('time is up');
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj)
//         };
//     }, delayInterval);
// };

// intervalCount(10, 2000);


// Problem 6
function intervalCount(cb, count, delayInterval, arg1, arg2) {
    const intervalObj = setInterval(function(arg1, arg2) {
        cb(arg1, arg2)
        count--;

        if (count === 0) {
            clearInterval(intervalObj)
        };
    }, delayInterval, 'pizza', 'tacos');
};

function foo(arg1, arg2) {
    console.log(arg1, arg2);
}

intervalCount(foo, 10, 1000);