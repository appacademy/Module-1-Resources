// const obj = {};

function outerFunc(param1) {
  var name = "brandon";

  function innerFunc(num) {
    var name2 = "maica";

    // LE = {
    // functionScope:{
    // name2 : maica
    // num :
    // name : brandon
    // param1 :
    // }
    // }
  }

  function innerFunc2() {
    var name2 = "trevor";
  }
}

// we can access and change the outer functions variables
function groceryList(list) {
  function addItem() {
    list.push("ice cream");
  }

  addItem();

  return list;
}

// console.log(groceryList(['milk','eggs']));// [ 'milk', 'eggs', 'and ice cream' ]

function myFunc() {
  // return true;
  // return 12;
  // return false

  return function () {};
}
// console.log(myFunc());

function elephantCollector() {
  let elephants = ["dumbo"];


  return (name) => {
    elephants.push(name);
    return elephants;
  };
}

// console.log(elephantCollector);// [Function: elephantCollector]
// console.log(elephantCollector());// [Function: inner]

let elephantParade1 = elephantCollector();
/*
  LE = { elephantCollector: { elephants = ['dumbo'] }
         anonFunc: { name: 'babor'}
    }
*/
// console.log(elephantParade1("babor")); // [ 'dumbo', 'babor' ]


let elephantParade2 = elephantCollector();
// console.log(elephantParade2('tantor'));// [ 'dumbo', 'tantor' ]
/*
  LE = { elephantCollector: { elephants = ['dumbo'] }
         anonFunc: { name: 'tantor'}
    }
*/




// console.log(elephantParade1);// [Function: inner]
/*

let elephantParade1 = function inner(name) {
    elephants.push(name);
    return elephants;
  };

*/

// console.log(elephantParade1());// [ 'dumbo', undefined ]

// console.log(elephantCollector()());// [ 'dumbo', undefined ]
// console.log(elephantCollector()('babor'));// [ 'dumbo', 'babor' ]



function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  }
}
/*
  LE = {
    createCounter: { count: 3 }
    anonFunc: {}
  }
*/
let counter1 = createCounter();
console.log(counter1);// [Function (anonymous)]
console.log(counter1());// 1
console.log(counter1());// 2
console.log(counter1());// 3
/*
  LE = {
    createCounter: { count: 3 }
    anonFunc: {}
  }
*/
let counter2 = createCounter();
console.log(counter2);
console.log(counter2());// 1
console.log(counter2());// 2
console.log(counter2());// 3
