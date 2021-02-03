// (function() {
//   statements;
// })();

// this function will never be reusable
(function() {
  console.log("run me immediately!");
})(); // => 'run me immediately!'


// we're saving the result of the function to the variable and not the function itself
// that way, it will not be reusable
let result = (function() {
  return "party!";
})();

console.log(result); // prints "party!"


//Using IIFEs ensures our global namespace remains 
//unpolluted by a ton of function or variable names we don't intend to reuse.

function nameGen() {
  const bName = "Barry";
  console.log(bName);
}

// we can not reference the bName variable from this outer scope
console.log(bName);
console.log(nameGen()); // prints "Barry"


(function() {
  const bName = "Barry";
  console.log(bName);
})(); // prints "Barry"

// and now we have no hope of ever running the above function above again