/**
 * Variables & Scope Code Demo Part 1
 * 
 *      var -> function scoped
 *      let & const -> block scoped
 */


/* Global Scope */

let apple = "apple";        // apple is defined in the global scope  
console.log(apple)          // "apple"
function sayApple() {
    console.log(apple);     // using global apple 
}
sayApple();                 // "apple" 



/* Function or Local Scope */

function sayPotato(){
    let potato  = 'hello this is potato';
    console.log(potato);
}
sayPotato();                // 'hello this is potato'
console.log(potato)         //  ?



/* Block Scope */

let carrot = "snake";
if (true) {
    let carrot = "carrot";
    console.log(carrot)     // 'carrot'
}
console.log(carrot)         // ? 