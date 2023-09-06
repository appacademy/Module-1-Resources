/*

  Conditionals
    * let us control what we decide to do, creates a decision making for our code

  Talk about truthy and falsey values
    * TBD

  Conditional statements will act as control flow of our application
  * The basic structure of a conditional statement looks like:
      if (condition or comparison){
        <run this code>
      } else if (other condition or comparison) {
        <run this code>
      } else {
        <do this code if none of the conditions are met>
      }

    Mutually exclusive condition
    * A general rule of thumb is that you are working with a mutually exclusive condition meaning if one condition is true the other must not
    * Think of it like a coin flip
      * You can either be heads or tails - not both!

*/
let randomNumber = Math.random();
console.log(randomNumber);

// mutually exclusive

if (randomNumber < 0.5) {
  console.log("heads");
} else {
  console.log("tails");
}

if (randomNumber < 0.5) {
  console.log("heads");
} else if (randomNumber < 0.4) {
  console.log("do something");
} else {
  console.log("tails");
}

// not mutually exclusive
// *  both conditions can be fulfilled and both blocks of code will be ran
let num = 10;
console.log("not mutually exclusive");
if (num > 5) {
  console.log("num is greater than 5");
}
if (num > 4) {
  console.log("num is greater than 4");
}

console.log("mutually exclusive");
if (num > 5) {
  console.log("num is greater than 5");
} else if (num > 4) {
  console.log("num is greater than 4");
}


// many things in a conditional can be compared
console.log('=====',10 > 1)
if(10 > 1) {
  console.log('10 is greater than 1')
}else{
  console.log('not greater than 10')
};

console.log('string'.length > 3)
if('string'.length > 3) {
  console.log('do something')
} else {
  console.log('do something empty')
}

// truthy and falsy values
// * we can pass anything to a if statement, it will either evaluate to truthy or falsy
// * truthy - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// * falsy - https://developer.mozilla.org/en-US/docs/Glossary/Falsy

if(true){
  console.log('this code will always run')
}

if(0){
  console.log('this will not run; because its a falsey value')
}

