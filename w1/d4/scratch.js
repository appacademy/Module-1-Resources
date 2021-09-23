let userInput = "13";

let betweenTwoNums = function (min, max, input) {
    let numInput = Number(input);
    if (numInput >= min && numInput <= max) return true;
    else return false;
}

let betweenOneAndSixty = function (input) {
    if (betweenTwoNums(1, 60, input)) return input;
    else return "Not a number between 1 and 60."
}

let betweenFiveAndTwelve = function (input) {
    if (betweenTwoNums(5, 12, input)) return input;
    else return "Not a number between 5 and 12."
}

console.log(betweenOneAndSixty(userInput))
console.log(betweenFiveAndTwelve(userInput));