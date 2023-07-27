


// fib
function somethingSlow(n) {
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
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
// * tree recursion
console.log(somethingSlow(44));

/*

  701408733
  bark
  bazaar
  food

*/
