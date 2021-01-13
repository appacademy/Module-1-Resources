/** Arrow Functions
 * 
 * - Arrow functions are always anonymous.
 * - Syntax: (ele) => { return ele }
 *      - Note, if you have a one line arrow function, you can 
 *        omit the `return` becuase js will add it for you. 
 */

// function sayHello(name) {
//     return 'hello ' + name;
// };

/** your code here */

console.log( sayHello('Rose') ); // ?


// --------------------------------------------------------------------

// function myFilter(array, cb) {
//     let filtered = [];
//     array.forEach( function(ele, i) {
//         if (cb(ele)) {
//             filtered.push(ele)
//         }
//     });
//     return filtered;
// };

/* your code here */

console.log( myFilter( [1, 2, 3], el => el === 1 ) ); // ?