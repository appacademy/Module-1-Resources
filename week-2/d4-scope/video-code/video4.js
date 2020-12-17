/** Closures 
 * A closure is an inner function that uses or changes variables 
 *      that were initialized in an outer function. 
*/
function appleTree() {
    let aVariable = "apple";

    function treeFunction() {
        return aVariable;
    }

    return treeFunction();
}
console.log( appleTree() ); // ?


function appleTree2() {
    let tree = { type: 'apple', grown: false };

    function growTree(){
        tree.grown = true;      // changing a `closed over` variable `tree`.
    }

    growTree();
    return tree;
}
// console.log( appleTree2() ); // ? 

// Closures can close over variables of a returned function:
function treeMaker() {
    let trees = [];

    function addTree(tree) {
        trees.push(tree);
        return trees;
    }

    return addTree; // remember, we are returning a function here
}
// const treeFunc = treeMaker(); // ?
// console.log(treeFunc)         // ?
// treeFunc('Pine');             // ? 

/** 
 * Closures are cool because they allow for 
 *      `private state`. AKA we can hide variables 
 *      from the user to keep them safe. 
 */
function createCounter() {
    let count = 0;

    return function() {     // we are returning an anonymous function here. 
        count++;            // we are changing a closed over variable here. 
        return count;
    };
}
let counter1 = createCounter();
console.log(counter1)   // Function
console.log(counter1()) // ?
console.log(counter1()) // ? 

let counter2 = createCounter();
console.log(counter2)   // Function
console.log(counter2()) // ?
console.log(counter2()) // ? 