/* Arrow Functions */

/* Code along with Rose to refactor the following functions */
/*********** Problem 1 ***********/
function sayHello(name) {
    return 'hello ' + name;
}

/** Your Code Here */

/** Test Cases **/
console.log(sayHello('Rose')); // 'hello Rose'

/*********** Problem 2 ***********/
function myFilter(array, cb) {
    let filtered = [];
    array.forEach(function (ele, i) {
        if (cb(ele)) {
            filtered.push(ele);
        }
    });
    return filtered;
}

/** Your Code Here */

/** Test Cases **/
console.log(myFilter([1, 2, 3], (el) => el === 1)); // [1]
