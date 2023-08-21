/*


  String Interpolation
    * Alternative way to include values in our strings
    * So that we dont have to concatenate, dont have to worry spaces
    * Delineated by - `` - backticks
    * embedded expressions - ${expression}
    * Template literal that are used for string interpolation


*/



// * old way
let firstName = 'brandon';
let lastName = 'laursen';

// concatenate
let greeting = 'Hello ' + firstName + ' ' + lastName + '!';
console.log(greeting);// Hello brandon laursen!


// * same thing with interpolation
let newGreeting = `Hello ${firstName} ${lastName}!`;
console.log(newGreeting);// Hello brandon laursen!


// embeds expression

let hello = () => 'hello';


console.log(`${hello()} ${firstName} ${lastName}!`);// hello brandon laursen!


let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

console.log(`Hello ${names.join(' and ')}`)// Test celebi,pumpkin,mochi,jazz

for(let i = 0 ; i < names.length; i++){
  let name = names[i];
  console.log(`${names[i]} or ${name}`);
}

