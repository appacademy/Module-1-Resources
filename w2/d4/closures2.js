function elephantCollector() {
  let elephants = ["dumbo"];

  // * return a named function
  // return function inner(name) {
  //   elephants.push(name);
  //   return elephants;
  // };

  // * return a anon function
  // return function (name) {
  //     elephants.push(name);
  //     return elephants;
  //   };

  // return the return value of calling inner
  // function inner(name) {
  //   elephants.push(name);
  //     return elephants;
  // }

  // return the return value of calling inner
  // return inner;

  return (name) => {
    elephants.push(name);
    return elephants;
  };
  
}

// console.log(elephantCollector()());// [ 'dumbo', undefined ]
// we storing  a function that is a return value in a variable
let elephantParade1 = elephantCollector();

// console.log(elephantParade1);// [Function: inner]

// no argument passed
console.log(elephantParade1("amir")); // [ 'dumbo', amir ]
