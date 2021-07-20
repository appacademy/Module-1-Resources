/** Event Loop **/

function somethingSlow(n) {
    //I inserted a function that is actually slow
    if (n < 2) {
        return n;
    }

    return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
    console.log('foo');
}

function bar() {
    console.log('bark');
    baz();
}

function baz() {
    console.log('bazaar');
}

setTimeout(foo, 1500);
setTimeout(bar, 1000);
console.log(somethingSlow(44));
// foo()
// bar()



/* 
What prints to the console in order?

Why do foo and bar occur after the specific time we asked them to run?

Why does doesn't baz have to enter the message queue?


*/

/* 
Comprehension Questions:

What is the event loop in your own words?

What are the two parts of JavaScript's event loop?

What's the difference between a 'stack' and a 'queue'? 
Hint: A 'stack' of papers vs. a 'queue' for a rollercoaster

*/
