


// console.log('hello ' + 'maica');
// console.log('hello ' + 'brandon');
// console.log('hello ' + 'johnny');

function myFunc(name){
  // console.log(`hello ${name}`);
  name = name.toUpperCase();
  // return `hello ${name}`
  // console.log('do we reach this console.log?');
  for(let i = 0; i < 4; i++){
    console.log(i);
    return 'done'
  }
};

// want to see output
// wrap the function call in a console.log
// this is the function call!
// console.log('the return value of myfunc =>',myFunc('maica'));


//input - maica
//output - the return value of the function

// myFunc('brandon');
// myFunc('johnny');




// declare function
// param1 = 25
// param2 = 17
function math(num1, num2){
  // console.log('num1', num1, 'num2', num2);

  return num1 + num2;
};


// call/invoke that function
let num = 10
// console.log('return value of math 1',math(30, num));

// console.log('return value of math 2',math(25, 17));
// arguments 10 and num
