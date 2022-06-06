// Variables
// Think of it as creating a named space to hold some value that will be of 
// significance for your code. 

// Variables do not need to have an initial value. When we create variables
// without an initial value, we are declaring that variable
let animal; // Variable Declaration

// JavaScript needs to give it something, however, so your variable will start 
// with undefined if you don't give it some initial value
console.log(animal);

// We can then assign it a value using the assignment operator =
animal = "cat"; // Variable Assignment
console.log(animal);

// And we can reassign that variable again, still using the assignment operator
animal = "chicken"; // Variable Reassignment
console.log(animal);

// If we give our newly declared variables an initial value all in the same
// statement, we call that process variable initialization
let animal2 = "dog"; // Variable Initialization
console.log(animal2);

// We cannot redeclare or initialize variables with the same name! This will
// cause an error in JavaScript
// let animal2 = "pig"; // CANNOT REDECLARE THIS VARIABLE

// This process can be done with numbers as well
let age = 0
console.log(age)
age = age + 5
console.log(age)

// We've also got special increment and decrement operators
age++ 
console.log(age)

age--
console.log(age)

// We want to be careful when using arithmetic operations in our reassignment
// or assignment statements as mixing data types can cause trouble
let animal3;
let animalAge = animal3 + age
console.log(animalAge)
// If you're unexpectedly seeing NaN in your code, trace backwards and ensure
// all of your variables have good values before your arithmetic operations