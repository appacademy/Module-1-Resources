/*

  String Interpolation
  - alternative way to includes values in our strings
  - so that we dont have to concatenate, dont have to worry spaces
  - delineated by: ``- backticks
    * embedded expression - ${}

*/

//old way
let firstName = 'brandon';
let lastName = 'laursen';

let greeting  = 'hello ' + firstName  + ' ' + lastName + '!';
// console.log(greeting);//hello brandon laursen!

let hello = () => 'Hello'

//same with string interpolation
//big quality of life!
let newGreeting = `${hello()} ${firstName} ${lastName}!`;//we can embed expressions, this is saying embedded the return value of calling hello
// console.log(newGreeting);//hello brandon laursen!


let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

for(let i =0; i < names.length; i++){
  let name = names[i];
  console.log(`${hello()} ${name.toUpperCase()}`);
};
