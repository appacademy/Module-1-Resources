
// global scope
// let name = "global scope";

function myFunc() {
  // function/local scope
  // let name = "function/local scope";

  if (true) {
    // block scope
    // let name = "block scope 1";

    for (let i = 0; i < 1; i++) {
      // another block scope
      let name = "block scope 2";
      // console.log(name); // block scope 2
      // * if were not able to find the variable we need in the immediate scope, js will scope chain to the outer scopes to find one, in this case, if js did not find name in block scope 2, js will scope chain up and find the name in block scope 1
      // *  we can go inward -> outward
      // ! not outward -> inward
    }
  }

  // global declared variable
  // ! don't do this
  brandonPassword = "bad";
}

// myFunc();


// outer scope does not have access to inner scope
// *  we can go inward -> outward
// ! not outward -> inward
function myFunc2() {
  let name = "brandon";
  // able to access x variable in a different scope
  console.log(brandonPassword); // "bad"
}

// myFunc2();
// console.log(name);



// * We can reassign the values of outer scope variables
function myFunc3() {
  let name = "initial value";

  for (let i = 0; i < 2; i++) {
    name = "new value";
  }

  console.log(name); // new value
}

// myFunc3();




// * review
let variable1; // variable declaration
variable1 = "string"; // variable assignment
let variable2 = "string"; // variable initialization


/*

  let
    * block scoped
    * can be reassigned
    * cannot re declared

  * when let is hoisted
    ** let does not have a default value
    ** therefore will throw an error when hoisted
    ** as the variable does yet exists

*/
function testLet(){

  // console.log(name);
  let name = 'brandon';

  name = 'maica';
  // console.log(name);

  // let name = 'alexi';

  if(true) {
    let access = false;
  }


}

// testLet();


/*

  const
    * constant
    * block scoped
    * cannot be reassigned
    * cannot be re declared

  * when const is hoisted
    ** const does not have a default value
    ** therefore will throw an error when hoisted
    ** as the variable does yet exists

*/


function testConst() {

  // console.log(name);
  const name = 'brandon';

  // name = 'maica';
  // console.log(name);

  // const name = 'alexi';

  if(true) {
    const access = false;
  }

  console.log(access);
};

// testConst()

/*
  var
  * function scoped
  * can be reassigned
  * can be re declared
  ! error prone

  * when var is hoisted
    ** only the the variable declaration is hoisted
    ** when var is hoisted, it has a default value of undefined
    ** therefore when we hoist var, we do not get an error because we get undefined
*/


function testVar() {

  // console.log(name);
  // var name = undefined
  var name = 'brandon';

  name = 'maica';

  console.log(name);

  var name = 'alexi';

  // console.log(name);

  if(true) {
    var access = true;
  }

  // console.log(access);
};


// testVar()







/*
   globally
    * any variable that is declared in the global scope will be globally available
    * any variable declared without let, const, or var will be globally available

*/


// all global
let global1 = 1;
var global2 = 2;
const global3 = 3;


function myFunc() {

  // console.log(global1)
  // global variable
  global4 = 4;
};

myFunc();

// console.log(global4);


/*
  <elephantCollector>: {
    elephants: ['dumbo'];
    inner: <function>
    <inner>:{
       elephants: ['dumbo'];
       name: param
    }
  }

  <elephantParade1>:{
       elephants: ['dumbo'];
       name: funkfreed
    }

[ 'dumbo', 'funkfreed' ]

    <elephantParade2>:{
      elephants: ['dumbo'];
      name: zunesha
  }

[ 'dumbo', 'zunesha' ]
*/
