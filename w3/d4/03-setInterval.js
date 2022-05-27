// setInterval
// setInerval is in many ways very similar to setTimeout, the key difference
// being that setInterval will repeat our function at the specified delay.
// setInterval will still return a timeout object that can be cleared with
// clearInterval. Let's take a look:


const int = setInterval(food, 1000, "bbq", "calzone", "pierogi");
console.log(int);
clearInterval(int);


// Let's look at something a bit more involved:
let count = 0;

function intervalFunc(number) {
  console.log("Hello There");
  count++;

  if (count === number) clearInterval(interval);
}

const interval = setInterval(intervalFunc, 1000, 7);
// What's going to happen when the above code is executed?