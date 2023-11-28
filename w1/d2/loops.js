
/*

  Loops

  Loops provide us a way to repeat behavior a set number of times.
  * We can use that behavior to progress through data structures and take a look at individual elements.
  * Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop/meeting the condition

  With loops we control the boundaries!
  There are may use cases of loops!
    * counting numbers
    * progressing through strings/arrays
      * we loop through these data types to get information
      * arrays can hold user information that we may need to access to print to the string

*/


// While loops
// * When would we use a while loop over a for loop?
// * Whenever we don't know how many times we need to iterate
// * If you want an action to repeat itself until a certain condition is met or while a condition is met

// 1. Initial Expression
let count = 0
let i = 0;
// 2. Condition for which we keep looping
// 1 iteration - 0 <= 5 - true
// 2 iteration - 1 <= 5 - true
// 3 iteration - 2 <= 5 - true
// 3 iteration - 3 <= 5 - true
// 3 iteration - 4 <= 5 - true
// 3 iteration - 5 <= 5 - true
// 3 iteration - 6 <= 5 - false <- exit the loop

// while(i <= 5) {
//   console.log(i);
//   console.log(count, i);
//   count++;
//   // 3. Step towards completing the loop/meeting the condition
//   // make sure embedded within the loop
//   i++;
// }

//cntrl + c to escape an infinite loop



// for loop
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop/meeting the condition

for(let i = 0; i < 4; i++){
  console.log(i);
}
