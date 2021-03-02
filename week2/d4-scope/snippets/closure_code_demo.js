/** Closures Code Demo */

/*********** Problem 1 ***********/
function pizzaMaker(food) {
    // we are inside the `outer` function
    let order = "I'd like a pizza with ";

    function oven() {
        // we are inside the `inner` function
        return order + food; // food comes from the outer scope (see line 11)
    }

    return oven();
}

console.log(pizzaMaker('cheese'));
/* 
What will print to the console? 
Answer:
*/
/*********** Problem 2 ***********/
function groceryList(list) {
    let groceries = list;

    function addItem() {
        groceries.push('and ice cream!'); // mutates closed over `groceries` variable
    }

    addItem();
    return groceries;
}
console.log(groceryList(['milk', 'eggs']));
/* 
What will print to the console? 
Answer:
*/
/*********** Problem 3 ***********/
function elephantCollector() {
    const elephants = ['dumbo'];

    return function (name) {
        // we are returning a FUNCTION
        elephants.push(name);
        return elephants; // this is a CLOSED OVER variable
    };
}

const elephantParade = elephantCollector();
console.log(elephantParade);
console.log(elephantParade('Obi'));
console.log(elephantParade('Gerald'));
/* 
What will print to the console from the first console.log?
Answer:
What will print to the console from the second console.log?
Answer:
What will print to the console from the third console.log? 
Answer:
*/
