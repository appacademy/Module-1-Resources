/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array.every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

function myEvery(array, cb) {
    //!!START
    for (let i = 0; i < array.length; i++) {
        if(cb(array[i]) === false) {
            return false;
        }
    }
    return true;
    //!!END
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myEvery;
  } catch(e) {
    return null;
  }
