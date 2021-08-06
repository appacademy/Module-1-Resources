let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  let el = arr[i];
  console.log(el);
  debugger;
}

function foo(word) {
  debugger;
  console.log(word);
  bar("barber");
}

function bar(word) {
  debugger;
  console.log(word);
  baz("bazaar");
}

function baz(word) {
  console.log(word);
  debugger;
}
