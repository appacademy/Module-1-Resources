function foo() {
    console.log('a');
    bar();
    console.log('e');
}

function bar() {
    console.log('b');
    baz();
    console.log('d');
}

function baz() {
    console.log('c');
}

foo();
