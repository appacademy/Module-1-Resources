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
  if (!string.length) return "";

  return reverse(string.slice(1)) + string[0];
};

console.log(reverse("cat")); //'tac'
/*

  reverse("cat") => return 'tac'
  -----------------
  Global stack frame
  Bottom of Stack
*/
