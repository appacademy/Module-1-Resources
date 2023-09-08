function costOfGroceries(groceries) {
  let sum = 0;
  debugger;
  for (let i = 0; i < groceries.length; i++) {
    let groceryItem = groceries[i];
    debugger;

    if (groceryItem === "butter") {
      sum += 1;
      debugger;
    } else if (groceryItem === "milk") {
      sum += 3;
      debugger;
    } else if (groceryItem === "eggs") {
      sum += 2;
      debugger;
    } else if (groceryItem === "bread") {
      sum += 4;
      debugger;
    } else if (groceryItem === "cheese") {
      sum += 5;
      debugger;
    }
  }
  debugger;
  return sum;
}

function mostExpensiveGroceries(groceriesList) {
  debugger;
  let highestCostList = 0;
  let highestIndex = 0;
  for (let i = 0; i < groceriesList.length; i++) {
    let groceryList = groceriesList[i];
    debugger;

    let currentCostList = costOfGroceries(groceryList);
    debugger;
    if (currentCostList > highestCostList) {
      debugger;
      highestCostList = currentCostList;
      highestIndex = i;
      debugger;
    }
  }
  debugger;
  return highestIndex;
}

const groceriesA = ["cheese", "butter", "eggs"];
const groceriesB = ["eggs", "milk", "bread", "bread"];
const groceriesC = ["cheese", "bread"];
const groceriesD = ["eggs", "butter"];
debugger;
console.log(
  mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD])
); //
