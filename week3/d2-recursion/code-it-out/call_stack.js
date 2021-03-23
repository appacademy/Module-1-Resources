function foo() {
    // debugger;
    console.log('a');
    bar();
    // debugger;
    console.log('e');
}

function bar() {
    // debugger;
    console.log('b');
    baz();
    // debugger;
    console.log('d');
}

function baz() {
    // debugger;
    console.log('c');
}

foo();

// debugger;
