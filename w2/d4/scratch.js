function pizzaMaker(food) {
  let order = "id like a pizza with ";

  function oven() {
    // lexical env:
    // food - cheese - outer func
    // order 'id like a pizza with' - outer func

    return order + food;
  }

  return oven();
}

// console.log(pizzaMaker('cheese'));

/*

  Call stack -
  first in last out
  ex: stack of plates

  when you call a function - push frame on to the stack
  when you return in a function - pop off a frame from the stack



*/

function groceryList(list) {
  function addItem() {
    console.log(list);
    list.push("and ice cream");
  }

  addItem();
  return list;
}

// console.log(groceryList(["milk", "eggs"]));

function elephantCollector() {
  let elephants = ["dumbo"];

  return function inner(name) {
    elephants.push(name);
    return elephants;
  };
}

// console.log(elephantCollector)
// [Function: elephantCollector]

// console.log(elephantCollector());
// [Function: inner]
// elephantparade1 = {["dumbo", babor]}
let elephantParade1 = elephantCollector();

// console.log(elephantParade1('babor'));//[ 'dumbo', 'babor' ]
// console.log(elephantParade1('brandon'));//[ 'dumbo', 'babor' ]

// // elephantparade2 = {["dumbo", ganesha]}
// let elephantParade2 = elephantCollector();
// console.log(elephantParade2('ganesha'));//[ 'dumbo', 'ganesha' ]
// console.log(elephantParade2('maica'));//[ 'dumbo', 'ganesha' ]


function createCounter(param) {
  console.log('outer func',param);
  let count = 0;

  return function (param2) {
    console.log('inner func',param2);
    count++;
    return count;
  };
}

// LE: count = 1
let counter1 = createCounter('Outer funcs arg');

// console.log(counter1('inner func arg')); // 1

// console.log(counter1()); // 1
// console.log(counter1()); // 1

// // LE: count = 2
// let counter1 = createCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2

// // LE: count = 2
// let counter2 = createCounter();
// console.log(counter2());// 1
// console.log(counter2());// 2


// function countDown(num) {

//   console.log(num);

//   return function inner() {
//     num--;
//     if(num === 0) {
//       return 'do something'
//     } else {
//       return inner;
//     }
//   }
// }


console.log(countDown(3));
