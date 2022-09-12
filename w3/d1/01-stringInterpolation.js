// String interpolation gives us a way to include the values from our variables 
// in any strings we may want to construct. Rather than using string 
// concatenation, we can instead pull the values stored in our variables and
// inject them directly into the strings we'd like to create.
// Our basic syntax to create interpolated strings: 
// `(backtick, next to 1) This is my string, and here's my ${variable}`

// Here we have some variables that will hold a first and last name:
let firstName = "Bill";
let lastName = "Adams";

// Let's see how we might do it with string concatentation first: 
let greeting = "Hello " + firstName + " " + lastName + "!";
console.log(greeting);

// Now, let's do the same thing with string interpolation:
let newGreeting = `Hello ${firstName} ${lastName}!`;
console.log(newGreeting);

// Let's see it with a more complicated example. Here we have two arrays, 
// containing first and last names:
let firstArr = [`Jojo`, "Cam", "Peter", "Cody"];
let lastArr = ["Yih", "Whiteside", "Shin", "Lavene"];

// A short loop to log our names:
for (let i = 0; i < firstArr.length; i++) {
  console.log(`${firstArr[i]} ${lastArr[i]} is the goat.`);
} 