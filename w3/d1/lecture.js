

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
  // debugger; // trigger debugger
}

// foo("food");

function test() {
  let name = "brandon";
  debugger;

  if (false) {
    name = "false";
    debugger;
  }
  if (true) {
    name = "krandon";
    debugger;
  }

  if (1) {
    let name = "1";
    debugger;
  }

  debugger;
}

// test();



function recursiveFunc(num) {

  debugger;
  if(num === 0) return;

  debugger;
  console.log(num);

  return recursiveFunc(num - 1)
}


recursiveFunc(5);
