
function costOfGroceries(groceries) {

  let sum = 0;
  for (let i = 0; i < groceries.length; i++) {
    let item = groceries[i];
    if (item === 'butter') sum += 1;
    else if (item === 'eggs') sum += 2;
    else if (item === 'milk') sum += 3;
    else if (item === 'bread') sum += 4;
    else if (item === 'cheese') sum += 5;
  }

  return sum;
}


function mostExpensiveGroceries(groceriesList) {

  let winner = 0;
  // This is the index of the first sub-array

  for (let i = 1; i < groceriesList.length; i++) {
    // In here, "i" is the index of the sub-arrays
    // We decide to start with index 1 because
    // we're first going to compare array at 0 to array at 1

    let list = groceriesList[i];
    // "list" is the sub-array at index "i"

    let sum = costOfGroceries(list);
    // "sum" is the total cost of the array called "list"

    let winnerArr = groceriesList[winner];
    // winnerArr is the sub-array at index "winner"
    // which started out at 0, but we're planning
    // to change if need be

    let winnerSum = costOfGroceries(winnerArr);
    // This is the total cost of the current winner sub-array

    if (sum > winnerSum) {
      // Here, we're comparing the total costs
      // of the current sub-array of the lopp
      // and the current winning sub-array
      winner = i;
      // And so, if the sub-array we're dealing with in the loop
      // is more expensive than the current winter
      // then that sub-array becomes the new winner
    }
  }

  return winner;
  // We return the index of whoever the winner is
}
