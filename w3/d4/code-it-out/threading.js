/* Threading */

/********** Problem 1  ***********/

function nextTask() {
    console.log('done');
}

setTimeout(function () {
    console.log('times up!');
}, 1000);

nextTask(); // prints:

/* 
Why does it print in that order? 
Answer:

*/
/********** Problem 2 ***********/
function blockingTheThread() {
    while (true) {}
}

setTimeout(function () {
    console.log('times up!');
}, 1000);

blockingTheThread(); // prints:

/* 
What causes this behavior?
Answer:

*/

/* 
Comprehension Questions:
In your own words, what is the thread of execution? 


What's the difference between single-threaded and multi-threaded?


Is JavaScript single-threaded or multi-threaded?

*/
