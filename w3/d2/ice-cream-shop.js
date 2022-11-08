/*

Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

  Base case: if(flavors.length === 0) return false;
  Base case2: if(flavors.pop() === favorite) return true;
  Recursive: return icecreamshop(flavors, favorite);
*/

//mels solution
function iceCreamShop(flavors, favorite) {
  // Your code here
  //you can have multiple base cases
  if(flavors.length === 0) return false;
  if(flavors.pop() === favorite) return true;

  return iceCreamShop(flavors, favorite)
}

//mark solution
// function iceCreamShop(flavors, favorite) {
//   if (flavors.length === 0) {
//     return false;
//   }

//   if (flavors[0] === favorite) {
//     return true;
//   } else {
//     return (favorites = iceCreamShop(flavors.slice(1), favorite));
//   }
// }

//efren solution
function iceCreamShop(flavors, favorite) {
  if (flavors.length === 0) return false
  if (flavors[0] === favorite) return true
  flavors.shift()

return iceCreamShop(flavors, favorite)
}
/*
  icecreamshop => func([vanilla', 'strawberry'], 'blue moon');
    icecreamnshop => func(['strawberry'], 'blue moon')
      icecreamshop => func([]) return false
*/

//dylan solution
// function iceCreamShop(flavors, favorite) {

//   if ((favorite.includes(flavors.pop()))) return true;

//   if (flavors.length > 0) return iceCreamShop(flavors, favorite)

//   return false;
// }
