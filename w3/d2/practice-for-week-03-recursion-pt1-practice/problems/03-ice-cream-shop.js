/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

/*
Plan:
-look at each flavor
-see if it matches our fave
--if match, return true
--if no match, continue check

Base Case:
-if array of flavors is empty, return false

Recursive Step:
-pull out an element (e.g. pop) to compare
-recurse if don't find a match
*/


function iceCreamShop(flavors, favorite) {
  if (flavors.length === 0) return false; //base case
  let flavor = flavors.pop(); //take a single flavor to compare, recursive step
  if (flavor === favorite) return true; //if match, return true
  return iceCreamShop(flavors, favorite)
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}