

let value = 0;

let expression = 1 + 2 + 4;

console.log(expression)


let arr = [];
let obj = {};
let templateLiteral = ` The result of the expression: ${expression} ${!true}`;


// console.log(templateLiteral);
//The result of the expression: 7

const name = 'brandon'
const age = 28;

let greeting = 'Hello my name is, ' + name + ' and i am ' + age;
// console.log(greeting);// Hello brandon

let coolerGreeting = `Hello my name is, ${name} and i am ${age}`
console.log(coolerGreeting)
// Hello my name is, brandon and i am 28

let myFunc = () => 'hello'
let evenCoolerGreeting = `${myFunc()} ${name}`
// hello brandon

// console.log(evenCoolerGreeting);

let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

for(let name of names) {
  console.log(`${myFunc()} ${name}`);
}
