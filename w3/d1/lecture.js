/*


  String Interpolation
    * Alternatively way to include values/expression in our string
    * so that we dont have to concatenate - + ' ' +
    * Delineated by - ``
    * embed expression - ${}
    * Template literal are sometimes are called template string they are most used for string interpolation

*/


// * old way
let firstName = 'brandon';
let lastName = 'laursen';

// *  concatenation
let greeting = 'hello ' + firstName + ' ' + lastName;
// console.log(greeting);// hello brandon laursen

// * lets do the same with string interpolation
let newGreeting = `Hello ${firstName} ${lastName}`
// console.log(newGreeting);// hello brandon laursen


let hello = () => 'Hello'

let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

for(let name of names){

  console.log(`${hello()} ${name.toUpperCase()}`)
}
