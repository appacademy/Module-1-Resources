/************* Variable hoisting ***************/

function hoistVar() {
    console.log(dog);
    var dog = 'dog';
}

hoistVar(); // prints:

function hoistLetAndConst() {
    console.log(cat);
    const cat = 'cat';
}

hoistLetAndConst(); // error:

/******** Function Declaration Hoisting ********/

hello(); // prints:

function hello() {
    console.log('hello!');
}

/******** Function Expression Hoisting *********/

hello(); // error:

let hello = function () {
    console.log('hello!');
};

/**** Function Expression Hoisting with Var ****/

hello(); // error:

var hello = function () {
    console.log('hello!');
};

/*** Function Declaration & Variable Initialization - let/const ***/

let hello = 'hello';

// error from line below:
function hello() {
    console.log('hello!');
}

console.log(hello); 

/***** Function Declaration & Variable Initialization - var ******/

var foo = "I'm a variable";

function foo() {
    return "I'm a function";
}

console.log(foo); // prints:

/***** Function Declaration & Variable Declaration - var ******/
var foo;

function foo() {
    return "I'm a function";
}

console.log(foo); // prints:
