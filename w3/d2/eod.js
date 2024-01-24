/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

***********************************************************************/

// default param
// function range(start, end, res = []) {

//     // let arr = [];

//     // if (end <= start) return [];

//     if (start >= end) return res;

//     res.push(start);

//     return range(start+1, end, res)

// }

function range (start, end) {

    debugger
    if (start >= end) return [];

    debugger
    return [start].concat(range(start + 1, end))

}



// console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []









/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.


***********************************************************************/

function iceCreamShop(flavors, favorite){

    if (!flavors.length) return false;

    // let flavor = flavors.pop();

    if (flavors.pop() === favorite) return true;

    return iceCreamShop(flavors, favorite)

}


// console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
// console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
// console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
// console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
// console.log(iceCreamShop([], 'honey lavender')); // false



/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1.


***********************************************************************/

function fibonacci(n){

    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2)

}


// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(10)); // 55
