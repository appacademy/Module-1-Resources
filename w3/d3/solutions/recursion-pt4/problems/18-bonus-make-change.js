/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

function makeBetterChange(target, coins = [25, 10, 5, 1]) {
  //!!START
  // Don't need any coins to make 0 cents change
  if (target === 0) return [];

  // Can't make change if all the coins are too big. This is in case
  // the coins are so weird that there isn't a 1 cent piece.
  if (!coins.some(coin => coin <= target)) return null;

  // Optimization: make sure coins are always sorted descending in
  // size. We'll see why later.
  coins = coins.sort().reverse()

  let bestChange = null;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    // can't use this coin, it's too big
    if (coin > target) continue;

    // use this coin
    const remainder = target - coin;

    // Find the best way to make change with the remainder (recursive
    // call). Why `coins.slice(i)`? This is an optimization. Because
    // we want to avoid double counting; imagine two ways to make
    // change for 6 cents:
    //   (1) first use a nickel, then a penny
    //   (2) first use a penny, then a nickel
    // To avoid double counting, we should require that we use *larger
    // coins first*. This is what `coins.slice(i)` enforces; if we
    // use a smaller coin, we can never go back to using larger coins
    // later.
    const bestRemainder = makeBetterChange(remainder, coins.slice(i));

    // We may not be able to make the remaining amount of change (e.g.,
    // if coins doesn't have a 1 cent piece), in which case we shouldn't
    // use this coin.
    if (bestRemainder === null) continue;

    // Otherwise, the best way to make the change **using this coin**,
    // is the best way to make the remainder, plus this one coin.
    const thisChange = [coin].concat(bestRemainder);

    // Is this better than anything we've seen so far?
    if (bestChange === null || thisChange.length < bestChange.length) {
      bestChange = thisChange;
    }
  }
  return bestChange;
  //!!END
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}
