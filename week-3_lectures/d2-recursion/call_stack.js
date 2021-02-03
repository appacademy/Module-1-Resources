debugger
function foo() {
  debugger
  bar();
  debugger
  let banana = "banana"
}

function bar() {
  debugger
  baz();
  debugger
  let banana = "banana"
}

function baz() {
  debugger
  let banana = "banana"
  debugger
}
debugger
foo();