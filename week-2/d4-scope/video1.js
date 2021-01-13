/**
 * SCOPE is the set of variables that we have access to 
 *      at a given location.
 */

 /**
  * 1. Global Scope - largest scope;
  * 2. Function Scope - args and any variables decl inside a function;
  * 3. Block Scope - variables declared within curly braces`{}` , and any 
  *                  variables declared above the given curly braces.
  */

// what is the scope of line 14 ? 
const bear = { sound: 'rawr' }    


// what is the scope below for lines 18-20 ? :
function bearMaker(name) {
    return "I'm " + name + "the bear Rawr!";
}
console.log( bearMaker('Miley') ) 


// what is the scope below for lines 25-28 ? :
if (true) {
    let candle = "fire!";
    console.log(fire);
}


// what variables does `bearMaker` func have access to ? :
let newBear = 'Lewis';
function bearMaker(name) {
    let bearMaker = "I'm " + name + "the bear Rawr!";
    return bearMaker;
}
console.log( bearMaker('Miley') ) 
// Answer - name, bearMaker, newBear


// scope chaining demo:
function garden() {
    let flower = 'lily';

    function flowerBed() {
        console.log(flower);
    }
    flowerBed();
}
garden()   // ???

function garden2() {
    let flower = 'lily';

    function flowerBed() {
        let flower = 'rose';
        console.log(flower);
    }
    flowerBed();
}
garden2()   // ???