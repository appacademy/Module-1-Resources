/* Variables & Scope Code Demo Part 2 */


/**
 * `let` is BLOCK scoped and CAN be reassigned.
 */
function blcokScope() {
    let test = "upper scope";
    if (true) {
        let test = "lower scope";
        // console.log(test)           // ? 
    }
    // console.log(test)               // ?
};




/**
 * `const` is BLOCK scoped and CANNOT be reassigned.
*/
function constBlockScoped() {
    const test = ["upper scope"];
    if (true) {
        const test =[ "lower scope"];
        // console.log(test)           // ? 
    }
    // console.log(test)               // ?
};

constBlockScoped()




/**
 * `var` is FUNCTION scoped and CAN be reassigned. We don't like var. 
 */
function varStringMachine() {
    var string = "I'm function scoped!";
    if (true) {
        var string = "I've been reassigned from within a block";
        // console.log(string)           // ? 
    }
    // console.log(string)               // ?
};      

varStringMachine();


// ------------------------------------------------------


/* Hoisting with `var` */
function hoistVar() {
    console.log(dog);      // ?
    var dog = "dog";
}

/*Hoisting with `let` and `const` */
function hoistLetAndConst() {
    console.log(cat);      // ? 
    let cat = "cat"
}

// ------------------------------------------------------
/*
 * IMPORTANT TAKEAWAYS :
 *
 *  1. Let is block scoped and CAN be reassigned. 
 *  2. Const is also block scoped, but CANNOT be reassigned.
 *  3. Var is function scoped, and CAN be reassigned.
 * 
 * * Var preceeded let and const. Because of its weird
 *      scopeing and hoisting properties, JS created the 
 *      let and const key words. 
 */