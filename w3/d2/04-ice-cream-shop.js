// Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
// array of ice cream flavors available at the ice cream shop, as well as the
// user's favorite ice cream flavor. Recursively find out whether or not the 
// shop offers their favorite flavor.

// This problem isn't asking us to perform any arithmetic, instead, we need to
// compare what we have against what we're looking for.

// Function should accept two parameters: the flavors of the ice cream shop, and 
// the favorite flavor that we're hoping they have.

// How can we find out if they have our favorite flavor?

// Plan:
// - Define a function that accepts two parameters -- an array of flavors and a
//   singular flavor to check those against
// - Recursively look at each flavor in our array and see if it matches our
//   given favorite. If it does, return true. If it does not, continue to check

// Base Case:
// - If array of flavors has no more flavors to check, return false
// Recursive step:
// - Pull out an element from our array and compare it to our favorite. Recurse
//   our function if we don't find a match

// A solve with mutating our input array:
const iceCreamShop = (flavors, favorite) => {
    if (flavors.length === 0) return false
    const last = flavors.pop()
    if (last === favorite) return true
    return iceCreamShop(flavors, favorite)
}

// Notice our solve isn't progressing through slices of our array, but is 
// instead popping off the last element to check against our favorite. 

// What is our recursive step?

// How are we meeting our base case?