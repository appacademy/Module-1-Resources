/*


  Loops

  Loops provide us a way to repeat behavior a set of number of times
  * We can use that behavior to progress through data structures and take it a look at each element in that data structure
  * Loops consists of 3 main components:
    1. Initial Expression - start
    2. Condition for which we keep looking - end
    3. Step towards completing the loop/meeting the condition - step

  With the loop we control the boundaries
  There are many use cases of loops!
    * count numbers
    * progress through strings/arrays
      * we loop through to get the elements at an index

*/

// While loops!
// * You would use a while loop anytime you don't how many times you need to iterate
// * If you want an action to repeat itself until a certain condition is met

// You'll want to make sure the expression that steps your loop towards competition is embedded withing the body of loop

// component of a loop
let i = 0; // condition where to start
// * we can start anywhere

// condition is which we keep looking; also tells us when to stop
while (i <= 5) {
  // while this condition is true, execute the code in this block
  // console.log(i);
  // debugger;
  i += 2; // step towards completing the loop
  // make sure its in the while loop or youll get a infinite loop
}

// for loop
// * let i = 0; initial expression, where to start
// * i <= 5; condition to be met
// * i++; increment i by 1, step to completing the loop
let res = true;
for (let i = 0; res; i++) {
  // console.log("i:", i); // 0 1 2 3 4 5
}


