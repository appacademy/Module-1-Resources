/** closures code demo */
/**
 * When an inner function uses or changes variables 
 *      in an outer function.
 * 
 * Note, in JS we can access outer scopes FROM inner scopes
 *       (aka work our way out), but CANNOT access inner scopes 
 *       FROM outer scopes (aka work our way in). 
 */

function pizzaMaker(food) {
    // we are inside the `outer` function
    let order = "I'd like a pizza with ";
    
    function oven() {
        // we are inside the `inner` function
        return order + food;        // food comes from the outer scope (see line 11)
    };

    return oven();
}

console.log(pizzaMaker("cheese"));  // ? 


// --------------------

function groceryList(list) {
    let groceries = list;       

    function addItem() {
        groceries.push("and ice cream!"); // mutates closed over `groceries` variable
    }

    addItem();
    return groceries;
}
console.log( groceryList(['milk', 'eggs']) );

// --------------------

function elephantCollector() {
    const elephants = [ 'dumbo' ];

    return function(name) {         // we are returning a FUNCTION
        elephants.push(name);
        return elephants;           // this is a CLOSED OVER variable 
    }
}

const elephantParade = elephantCollector(); // ?

console.log(elephantParade)  // ?

console.log(/* your code here*/)  // ?
console.log(/* your code here*/)  // ?