
// ARROW SYNTAX
let numbers = function() {
    return 5
}
let numbers2 = () => {
    return 5
}
// **ONLY HAVE ONE PARAMETER
let numbers3 = (num) => {
    return num + 5
}
let numbers4 = num => {
    return num + 5
}
let numbers5 = (num1, num2) => {
    num1 = num1 + 10
    return num1 + num2
}
// IMPLICIT RETURN
// -Must be a single-line return
// -Omit the curly braces
let addFive = (num) => {
    return num + 5
}
let addFive2 = num => num + 5


/*
1. Higher Order Functions
    A higher order function is a function that takes a function
    as an argument, or returns a function.
2. Callback Function
    Any function that is passed as an argument to another
    function so that it can be executed in that other function
    is called as a callback function
3. Anonymous Functions
    It's a funciton without a name. When a funciton is being used as a callback, they can be declared anonymously
    by writing them directly in the invocation of the outer function
*/