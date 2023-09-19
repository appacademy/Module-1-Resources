// Lets reverse a string
// * access every letter
// ! start with a full string

// function reverse(string){
// // console.log('entering reverse func:', string);
//   //base case
//   if(!string.length) return '';

//   // console.log(string[0]);

//   // recursive step
//   // use slice to remove the first letter each recurse
//   return reverse(string.slice(1)) + string[0];
// };

function reverse(string) {
  if (!string.length) return 'string';

  return reverse(string.slice(1)) + string[0];
};

console.log(reverse("cat")); //'tac'
/*

  reverse("cat") => return 'tac'
  -----------------
  Global stack frame
  Bottom of Stack
*/

// reverse call stack
// * were going to keep recursing till we hit a base case
// * once we do, we can use the return values and propagate them back up the stack
// console.log(reverse("cat")); //tac

// * In order for me to take reverse('t') and add it to 'a' I first need to call reverse('t') and get its return value; but reverse('t') returns a function call to reverse('') + t so we must wait for reverse('') to evaluate; and so forth until we hit the base case
// reverse('cat') => reverse('at') + c
// reverse('at') => reverse('t') + a
// reverse('t') => reverse('') + t
// reverse('') => return '' <-- At this point we hit the base case; we can start getting the return values
// ! popping off functions from call stack
// * we can now fill in what the functions evaluate too
// reverse('t') => " " + t ==> 't'
// reverse('at') => 't' + a ==> 'ta'
// reverse('cat') => 'ta + c ==> tac

function logReverse(string) {
  console.log('up the stack',string);
  if (!string.length) return "";

  let first = string[0];
  console.log(first, string);

  let result = logReverse(string.slice(1)) + first;
  // we dont hit this log until we start going back down the stack
  console.log('down the stack',result);
  return result;
}

// console.log(logReverse("cat")); // nodarb


function debuggedReverse(string) {
  debugger;
  if (!string.length) return "";
  let first = string[0];
  debugger;
  let result = debuggedReverse(string.slice(1)) + first;
  debugger;
  return result;
}

console.log(debuggedReverse('cat'));//



fibonacci(4);

// fibonacci(n-1) + fibonacci(n-2)
