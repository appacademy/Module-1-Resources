// IIFE - Immediately Invoked Function Expression

/*
What is an IIFE? What does it allow us to do?
    - Define and immediately invoke an anonymous function
    - IIFE's can only be ran once

How can they be useful?
    - Want to function one time
    - Don't want use the global name space
    - Protects function names and variables

- Part of why people figured out IIFE's was to emulate the idea of block scoping before let/const existed. Those variable declarations were
    late additions to JS -- There was something like 20 years before let/const
- It got difficult to maintain good coding practices/well named variables if concepts were shared but independent in different logical
    blocks of your function. In order to get around this limitation, an IIFE can let you have "private" local scope for var declared variables
    so that they don't overwrite stuff that you write later.
*/

// function expression
// storing an anon function in a variable
// we can alias the function with the variable we've stored it in

let sayHi = function() {
    console.log("Hi!");
};

// sayHi()

// function expression with fat arrow syntax
let sayHi2 = () => console.log("Another one");

// sayHi2()

// an IIFE is the anon portion wrapped parenthesis
// IIFE
// (function() {
//     console.log("Hi again!")
// })()

// Fat arrow
// (() => console.log("Another one again"))()

// you can pass arguments to an IIFE
// ((name) => console.log(`Good morning ${name}`))('Brandon')

// prove an IIFE only runs once

// let sayHello = (function() {
//     console.log("will only run once");
//     return 'hello';
// })();

// let sayHello2 = (function() {
//     console.log("will only run once");
//     return 'hello';
// })();

// // IIFE will only run the console.log in the function once!
// console.log(sayHello); // after this call, we will not be able to run the function again
// console.log(sayHello);
// console.log(sayHello);
// console.log(sayHello);

/*
    HOISTING!
    let, const, and var
        - var - hoist the declaration, but not the assignment, and has a default value of undefined
        - const/let - hoist the only declaration but does not have a value, throws an error if you try to access
            before initialized
    Hoisting with Functions!
*/

function hoistVar() {
    // var name = undefined
    console.log(name);
    var name = 'Anthony';
};

// hoistVar(); // undefined

function hoistConstAndLet() {
    // let/const name;
    console.log(name);
    // let name = "Anthony";
    const name = "Anthony";
}

// hoistConstAndLet(); // error

// hoisted()
//function declaration
// function hoisted() {
//     console.log('hoisted');
// };


// var hoisted = () => console.log('hoisted');