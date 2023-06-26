/*



  String Interpolation
  - alternative way to include values in our string
  - so that we dont to concatenate, dont have to worry spaces
  - delineated by - `` - backticks
    * embedded expression - ${expression}

*/


//old way
let firstName = 'brandon';
let lastName = 'laursen';

let greeting = 'Hello ' + firstName + ' ' + lastName + '!';
console.log(greeting);//Hello brandon laursen!

//embedded expression
let sayHello = () => 'hello';

//same thing with interpolation
//so were getting the return value of the function, then embedded that value
let newGreeting = `${sayHello()} ${firstName} ${lastName}!`;
// console.log(newGreeting);//Hello brandon laursen!

let names = ['celebi', 'mochi', 'pumpkin'];

for(let name of names) {
  // console.log('hello ' + name.toUpperCase());
  console.log(`${sayHello()} ${name.toUpperCase()}`);
}
