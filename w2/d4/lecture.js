// global scope
// let name = 'global scope';

function myFunc(param) {
  // function/scope
  // let name = 'function/local scope';

  if (true) {
    // block scope
    // let name = 'block scope 1';

    for (let i = 0; i < 1; i++) {
      // let name = 'block scope 2';
      // console.log(name);
    }
  }

  // variable is declared globally
  password = "secret";
}

// myFunc()

function myFunc2() {
  // let name = 'brandon';
  console.log(password);
}

// myFunc2();
// console.log(name);
// ReferenceError: name is not defined

// we can reassign values in the outer scope

function myFunc3() {
  let name = "new value";
  // console.log(name);

  for (let i = 0; i < 2; i++) {
    name = "new value";
  }

  console.log(name);
}

// myFunc3();

// console.log(num);
// let num = 10;


// let variable;// variable declaration
// variable = 'string';// variable assignment
// let variable2 = 'string';// variable initialization


function testVar(){

  var test = 1;

  test = 1;
  // console.log(test);

  var test = 2;
  // console.log(test);

  if(true) {
    var access = true;
  }

  // console.log(access);// true
  // var test2 = undefined;
  console.log(test2);// undefined
  var test2 = true;
};


// testVar();









function testLet(){

  // console.log(test);
  // let test;
  let test = 1;

  test = 2;
  // console.log(test);

  // let test =  3;

  if(true){
    let access = true;
  }

  console.log(access);

};


// testLet();

// let x = [];

// x.push(1);

// console.log(x)











function testConst(){

  // console.log(test);
  // ReferenceError: Cannot access 'test' before initialization
  const test = 1;

  // test = 2;
  // console.log(test);
  // TypeError: Assignment to constant variable.

  // const test = 2;

  if(true){
    const access = false;
  };

  // console.log(access);
  // ReferenceError: access is not defined

  const arr = [];

  arr.push(1,2,3);

  // console.log(arr);

};


// testConst();
let global1 = 1;
const global2 = 2;
var global3 = 3;



function myFunc4() {
  // we can access these values from the function's scope
  console.log(global1);
  console.log(global2);
  console.log(global3);

  // * variable declared globally if no keyword is used
  global4 = 4;
}

myFunc4();

// console.log(global4);



const obj = {};

obj.name = 'brandon';
console.log(obj);

obj = {};

console.log(obj);
