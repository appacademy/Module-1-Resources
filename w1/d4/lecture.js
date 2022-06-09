// let i = 0
// while (i<12000){
//     console.log("Hello World from VSCode!")
//     i++
// }

// Goal: build a function that utilizes helper functions to solve some math
// problems.
//  -- Given some input (a string and two nums), perform the correct operation
//     and return the result
//  -- Will likely use if statements
//  -- Upon meeting some condition, I want to invoke the proper function and 
//     return its result


/* function math expects a string for the parameter operation. 
Valid Operations
    -- addition
    -- subtraction
    -- multiplication
    -- division
*/
function math(num1, num2, operation){
    if (operation === "addition"){
        return add(num1, num2)
    } else if (operation === "subtraction"){
        return subtract(num1, num2)
    } else if (operation === "multiplication"){
        return multiply(num1, num2)
    } else if (operation === "division"){
        return divide(num1, num2)
    } 
    return "I'm not sure what you mean"
}

function add(banana, papaya) {
    return banana + papaya
}

let subtract = function(cat, dog){
    return cat - dog
}

let multiply = (num1, num2) => num1 * num2

function divide(num1, num2){
    // return num1/num2
    let wholeNum = Math.floor(num1/num2)
    let remainder = num1%num2
    return wholeNum + " with a remainder of " + remainder
}

console.log(math(7, 3, "division"))

