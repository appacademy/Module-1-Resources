/*


  Loops!

  Loops provide us a way to repeat behavior a set number of times. We can use that behavior progress through data structures and take a look at each element.

  Loop consists of these 3 main components
  1. Initial Expression
  2. Condition for which we keep looping
  3. Step towards completing that loop

*/

// While loop
// when would we use a while loop over a for loop?
// whenever you dont know how many times we need to iterate

// While loops will execute while there condition is true, you'll want to make sure Step towards completing that loop is embedded within in your loop

let i = 0; //Initial Expression
while (i <= 5) {
  //Condition for which we keep looping
  // console.log(i);
  i += 1;//Step towards completing that loop
};

// console.log('done with loop');

//for loop!
//Initial Expression
//Condition for which we keep looping
//Step towards completing that loop
for(let i = 0; i <= 5; i++ ) {
  console.log(i);
}
