// Loops
// Loops provide us a way to repeat behavior a set number of times. We can use
// that behavior to progress through data structures and take a look at
// individual elements. Loops consist of 3 main components:
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop

// While loop
// While loops will execute while their condition is true. You'll want to make
// sure the expression that steps your loop towards completion is embedded
// within the body of your loop.

// Before we run this code, let's think about what we expect to see from it
let i = 1; // Initial expression, starting value

while (i <= 5) { // Condition, ending value
  console.log(i);
  i = i + 1; // step towards completing the loop
}
// What is the value of i when our loop completes?

// After our loop completes, we still have access to the variable we used to
// control our loop. Let's verify:
i += 1;
console.log(i);
i++;
console.log(i);
// Note that we can use either syntax as both will accomplish the same goal.

// For loops
// For loops execute the body of the loop for the duration of the condition
// remaining true. While pretty similar to while loops, for loops give us
// compact syntax to define our initial expression, loop condition and step
// towards completion in a single line. Let's take a look:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// A frequent usecase applied to for loops is using them to iterate through a
// data structure and taking a look at each individual element. 
let words = "Journey before destination";

// Let's set up a loop to look at each character of our string"
for (let index = 0; index < words.length; index++) { // define loop
  let char = words[index]; // store current character in variable
  console.log(char); // log character to our console
}

// Do we still have access to index?
console.log(index)
// Nope, we'll learn more about why soon(tm)!