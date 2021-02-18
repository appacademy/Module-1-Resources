/* Closures */

/*********** Problem 1 ***********/
function appleTree() {
    let aVariable = 'apple';

    function tree() {
        return aVariable; // returns a `closed over` variable `aVariable`
    }

    return tree();
}
console.log(appleTree());
/* 
What will print to the console from line 13? 
Answer:
*/
/*********** Problem 2 ***********/
function appleTree2() {
    let tree = { type: 'apple', grown: false };

    function growTree() {
        tree.grown = true; // changing a `closed over` variable `tree`.
    }

    growTree();
    return tree;
}
console.log(appleTree2());
/* 
What will print to the console from line 29? 
Answer:
*/
/*********** Problem 3 ***********/
function treeMaker() {
    let trees = [];

    function addTree(tree) {
        trees.push(tree);
        return trees;
    }

    return addTree; // remember, we are returning a function here
}

const treeFunc = treeMaker(); 
console.log(treeFunc);
console.log(treeFunc('Pine'));
/* 
What will print to the console from line 46? 
Answer:
What will print to the console from line 48? 
Answer:
*/
/*********** Problem 4 ***********/
function createCounter() {
    let count = 0;

    return function () {
        // we are returning an anonymous function here.
        count++; // we are changing a closed over variable here.
        return count;
    };
}
let counter1 = createCounter();
console.log(counter1); 
console.log(counter1()); 
console.log(counter1()); 

let counter2 = createCounter();
console.log(counter2); 
console.log(counter2()); 
console.log(counter2());
/* 
What will print to the console from line 66? 
Answer:
What will print to the console from line 67? 
Answer:
What will print to the console from line 68? 
Answer:
What will print to the console from line 71? 
Answer:
What will print to the console from line 72? 
Answer:
What will print to the console from line 73? 
Answer:
*/

