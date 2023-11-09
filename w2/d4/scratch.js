




// let name = 'global scope';
// ReferenceError: name is not defined

function myFunc(name){
  // let name = 'function local/scope';

  if(true) {
    // let name = 'block scope 1';


    for(let i = 0; i < 2; i++){
      // let name = 'block scope 2';
      console.log(name);

    }
  }
  password = 'password'
}


// myFunc('functions args')

function myFunc2(){

  let user = 'maica';
  console.log(password);// password
};

// console.log(password);
// myFunc2();
// console.log(name);


function myFunc3() {
  let name = "true value";

  for (let i = 0; i < 2; i++) {
    name = "new value";
  };

  if(true){
    name = 'true value'
  }

  console.log(name); // new value
}
// myFunc3();

let arr = [1,2,3]
for (let i = 0; i < 3; i++) {
  // console.log("  out scope: i ", i);
  for (let i = 4; i < 6; i++){
    // console.log(arr[i]);
    // console.log("inner scope: i ",i);
  };
}

// let variable1;// variable declaration
// variable1 = 'string';// variable assignment
// let variable2 = 'string2';//variable initiation

// variable2 = 12;// reassign


let name = 'name';

name = 'new name';
// console.log(name);






function testingVar(){
  // console.log(test);
  // var test = undefined;
  var test = 1;

  test = 2;
  console.log(test)

  var test = 3;
  console.log(test);

  if(true){
    var access = true;
  }

  console.log(access);
}


// testingVar();








function testingLet(){

  console.log(test);
  //let test;
  let test = 1;

  test = 2;
  console.log(test);

  // let test = 2;
  // console.log(test);

  if(true){
    let access = false;
  }

  console.log(access);
  //ReferenceError: Cannot access 'test' before initialization
}


// testingLet();



function testingConst(){

  // console.log(test);
  //const test;
  const test = 1;

  // test = 2;
  //TypeError: Assignment to constant variable.

  // const test = 2;

  if(true){
    const access = false;
  };

console.log(access);
}


// testingConst();


const age = 28;
// age = 29

const obj = {name:'batman'};
obj.city = 'gotham';
console.log(obj);
// arr1.push(4);
// console.log(arr1);// [ 1, 2, 3, 4 ]

const obj2 = {...obj};
