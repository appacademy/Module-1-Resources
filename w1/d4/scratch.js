// Helper Functions

/* 
1. Pretend a user inputs a number - see if that number is between 1 and 60
2. Pretend a user inputs a number - see if that number is between 5 and 12

3. Helper Function - intake 2 numbers and an input and sees if the input is
those two numbers
*/

let userInput = "13";

let betweenTwoNums = function(min, max, input) {
    let numInput = Number(input);

    if (numInput >= min && numInput <= max) return true;
    else return false;
}

let betweenOneAndSixty = function(input) {
    // if the number is between 1 & 60 return the number
    // otherwise print out "This number is not between 1 & 60"
    if (betweenTwoNums(1, 60, input)) {
        return input;
    } else {
        return "This number is not between 1 & 60"
    }
}

let betweenFiveAndTwelve = function(input) {
    if (betweenTwoNums(5,12,input)) {
        return input;
    } else {
        return "You got the wrong number, buddy!"
    }
}

console.log(betweenOneAndSixty(userInput));
console.log(betweenFiveAndTwelve(userInput));
