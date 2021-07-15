function somethingSlow(n) {
  //I inserted a function that is actually slow
  if (n < 2) {
    return n;
  }

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

setTimeout(foo, 1500);
setTimeout(bar, 1000);
console.log(somethingSlow(44));
