function foo() {
  debugger;
  bar();
  debugger;
}

function bar() {
  debugger;
  baz();
  debugger;
}

function baz() {
  debugger;
}

foo();

debugger;
