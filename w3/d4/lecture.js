/*
const fibonacci = (val) =>
  val === 1 || val === 2 ? 1 : fibonacci(val - 1) + fibonacci(val - 2);

let count = 0;

const foo = () => console.log(`chicken tenders`);

const baz = () => console.log("bazaar");

const bar = (where) => {
  console.log("bark");
  where();
  // where.forEach((elem) => console.log(elem))
  baz();
};

const hello = () => {
  console.log("hello hello");
  setTimeout(hello, 1000);
};
hello ()

// const test = () => {
  //   setTimeout(() => {
    //     console.log('baked')
    //   }, 0)
    //   return 'potato'
    // }
    
    // console.log(test())
    // console.log(fibonacci(45));
    // console.log("-> this will print after fibonacci");
    // setTimeout(foo, 10);
    // console.log("this will be hit first");
    // setTimeout(bar, 2000, () => console.log('hit'));
// console.log("-> ", fibonacci(42));
console.log("now this will take a while");
*/

// setInterval
const foo = () => console.log(`chicken tenders`);

// const tendies = setInterval(foo, 500)

// setTimeout(clearInterval, 10000, tendies)

const interval = () => {
  let count = 0;
  const tendies = setInterval(() => {
    foo();
    count ++;
    if (count > 9) clearInterval(tendies);
  }, 500);
  
};

interval();
