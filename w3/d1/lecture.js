/*



String Interpolation
  - Alternative way to include values in our strings
  - so that we don't have to concatenate, don't have worry about spaces
  - delineated by``
    embed - ${}

*/

//old way
let firstName = 'brandon';
let lastName = 'laursen';

let greeting = "Hello " + firstName + ' ' + lastName + '!';
// console.log(greeting);

let hello = () => 'hello';//a function evaluates to return

//lets do the same thing with string interpolation
let newGreeting = `${hello()} ${firstName} ${lastName}!`;//hello brandon laursen!
// console.log(newGreeting);


let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

for(let i = 0; i < names.length; i++) {
  let name = names[i];
  // console.log(name);
  console.log(`hello ${name}`)
}
