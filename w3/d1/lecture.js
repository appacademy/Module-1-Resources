/*


  String Interpolation
    - alternative way to include values in our strings
    - so that we don't have to concatenate, dont have worry about spaces
    - delineated by - ``
      embedded expression - ${}

*/

//old way
let firstName = 'brandon';
let lastName = 'laursen';

let greeting = 'hello' + firstName + ' ' + lastName + '!';
// console.log(greeting);

let hello = () => 'hello';

//same thing with string interpolation
let newGreeting = `${hello()} ${firstName} ${lastName}!`;//hello brandon laursen!
// console.log(newGreeting);

let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

for(let i = 0; i < names.length; i++) {
  let name = names[i];
  // console.log('hello ' + name);
  console.log(`${hello()} ${name}`);
}

/*
hello celebi
hello pumpkin
hello mochi
hello jazz
*/
