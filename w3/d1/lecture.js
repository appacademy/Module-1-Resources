/*


  String Interpolation
    * Alternate way to include values in our strings
    * So that we dont have concatenate, dont worry about spaces
    * Delineated by - ``
    * Template literal - ``
      *embedded expression: ${<expression>}
    * QOL

*/

// * old way
let firstName = "brandon";
let lastName = "laursen";

// *  concatenation
let greeting = "Hello " + firstName + " " + lastName + "!";
console.log(greeting); // Hello brandon laursen!

// * lets do the same thing with string interpolation
// * you can embedded expression
// * expression will first evaluate then embedded the value
let newGreeting = `Hello ${firstName.toUpperCase()} ${lastName}!`;
console.log(newGreeting); // Hello BRANDON laursen!

// * can embedded function expressions
// * because functions evaluate to a return value

let hello = () => "Hello";

console.log(`${hello()} Week 3`); // Hello Week 3

let names = ["celebi", "mochi", "pumpkin"];


for (let i = 0; i < names.length; i++) {
  let name = names[i];
  console.log(`${hello()} ${name} `);
}

/*
Hello celebi
Hello mochi
Hello pumpkin
*/
