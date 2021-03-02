/*************** IIFE ***************/
/* 
Here's a function I'm never going to use again. It's taking up a name
on the global namespace. 
*/

function runNow() {
    console.log('run me immediately!'); // prints 'run me immediately!'
}
runNow();

/*
Since I'm going to define it, immediately invoke it and never call it again,
I can use Immediately Invoked Function Expression.
*/

(function () {
    console.log('run me immediately!'); // prints 'run me immediately!'
})();

/* 
When saving an IFFE to a variable, you're NOT saving the function, but the 
return value of that function, the function itself is not reusable.
*/

let result = (function () {
    return 'party!';
})();

console.log(result); // prints "party!"

/*
Pro:
Using IIFE ensures our global namespace remains unpolluted by a ton of 
function or variable names we don't intend to reuse.
Con: 
We cannot re-call an IFFE
*/

let namedFunc2 = (function namedFunction() {
    let result = "I'm a return value";
    console.log("I'm a console.log");
    return result;
})();

console.log(namedFunc2);
console.log(namedFunc2);
console.log(namedFunc2);
console.log(namedFunc2);
console.log(namedFunc2);
