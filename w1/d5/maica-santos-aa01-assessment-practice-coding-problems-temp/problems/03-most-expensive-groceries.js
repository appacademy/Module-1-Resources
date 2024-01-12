/*
You are compiling a price checker for a grocery store. The grocery prices are as
follows:

  // butter: $1,
  // eggs: $2,
  // milk: $3,
  // bread: $4,
  // cheese: $5

First, create a function called costOfGroceries(groceries) which takes a single
array of grocery items and returns the total cost.

Then, write a function mostExpensiveGroceries(groceriesList) that takes in a
2-dimensional array of grocery items and returns the index of the sub-array with
the highest cost.

Constraint: Use the costOfGroceries function as a helper function in the
mostExpensiveGroceries function to solve the problem.

// PLAN IT OUT!

input: array
output: number

1. write a func costOfGroc(grcLi)
2. declare a cost variable = 0;
3. interate through this array
  - isolate each item
  - check each item to see, if it is a particular one (ex cheese) update cost
4. return total cost
*/


function costOfGroceries(groceries) {
  // Your code here
  // console.log(groceries)

  let cost = 0;

  // ['cheese', 'butter', 'eggs']
  for (let i = 0; i < groceries.length; i++){
    let groc = groceries[i];
    // console.log(groc)
    if (groc === "butter") cost += 1
    if (groc === "eggs") cost += 2
    if (groc === "milk") cost += 3
    if (groc === "bread") cost += 4
    if (groc === "cheese") cost += 5
  }

  // console.log(cost)
  return cost

}


/*
Then, write a function mostExpensiveGroceries(groceriesList) that takes in a
2-dimensional array of grocery items and returns the index of the sub-array with
the highest cost.

input: 2D array

output: index (number)

1. declare a var to represent the index of the highest costing grocery list
2. declare a var to represent the list or sub array with the highest total!

3. Iterate through the 2d array
    a. declare a var to represent the currest list groceriesList[i]
    b. declare a var to save the result of the helper
    c. compare the curr cost vs our highest total
      // if currentCost > highCost
      // the highest cost var will take on the value of the currest
      // BECAUSE we have found the highest cost we have also found the index of the list that costs the most

4. return the index!
*/
function mostExpensiveGroceries(groceriesList) {
  // Your code here
  // console.log(groceriesList)
  let indexOfHighest = 0; // we will return this


  let highestCost = -Infinity;

  // [
  //x  0: [ 'cheese', 'butter', 'eggs' ], // 8
  //x  1: [ 'eggs', 'milk', 'bread', 'bread' ], // 13
  //x  2: [ 'cheese', 'bread' ], // 9
  //   3: [ 'eggs', 'butter' ] // 3
  // ]

  for (let i = 0; i < groceriesList.length; i++){
    let groceries = groceriesList[i]
    // console.log(groceries)

    let currentCost = costOfGroceries(groceries) // 9
    // console.log(currentCost)
      // 9 > 13
    if (currentCost > highestCost) {
      // 13
      highestCost = currentCost
      // console.log(highestCost)
      indexOfHighest = i;

    }
  }
  return indexOfHighest;
}


const groceriesA = ['cheese', 'butter', 'eggs']; // 8
const groceriesB = ['eggs', 'milk', 'bread', 'bread']; // 13
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

// console.log(costOfGroceries(groceriesA)); // 8
// console.log(costOfGroceries(groceriesB)); // 13
// console.log(costOfGroceries(groceriesC)); // 9
// console.log(costOfGroceries(groceriesD)); // 3

console.log(mostExpensiveGroceries(
  [groceriesA, groceriesB, groceriesC, groceriesD]
)); //=> 1
console.log(mostExpensiveGroceries(
  [groceriesA, groceriesD]
)); //=> 0
console.log(mostExpensiveGroceries(
  [groceriesA, groceriesD, groceriesC]
)); //=> 2


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  costOfGroceries,
  mostExpensiveGroceries,
};
