
/*




  String interpolation
  - Alternative way to include values in our strings
  - so that we dont have to concatenate


*/
//old way
let firstName = 'brandon';
let lastName = "laursen";

//concatenation
let greeting = 'Hello' + firstName + ' ' + lastName + '!'
// console.log(greeting)

//we open up a template literal using backticks `` instead of using quotes
//lets the same thing with string interpolation!
let hello = () => 'hello'

let newGreeting = `${hello()}  ${firstName} ${lastName}`;

// console.log(newGreeting)

let names = ['brandon', 'jojo', 'charlie', 'jesse', 'braxton', 'david'];

for(let i = 0; i < names.length; i++) {
  let name = names[i];
  console.log(`${name}, ${names[i]}`);
}
debugger
