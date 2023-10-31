// let n1 = 1;
// let n2 = 2;
// let product = n1 * n2;

// let n3 = 3;
// let n4 = 4;
// let product2 = n1 * n2;

// let n5 = 3;
// let n6 = 4;
// let product2 = n1 * n2;

// function defined
// let num1 = 5
// let num2 = 6
// let globalName = 'brandon';// declared in global scope

function multiply(num1, num2) {
  console.log("parameters", num1, num2); // 5 6
  // console.log('test')
  globalName2 = 'brandon';// no keyword
  return num1 * num2;
  // console.log('do we make it?')
}

function add(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}

console.log(multiply(5, 6)); // 30
console.log(add(5, 6)); // 11
// console.log(multiply(10, 2));// 20

// function call
// console.log('return value =>',multiply(1, 2));// 2
// console.log('==>',multiply(3, 4));

// let result = multiply(5, 10);
// console.log(result);// undefined
// console.log(multiply(5, 6));
