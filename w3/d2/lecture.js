// function reverse(string){
//     if (!string) return string
//     return `${reverse(string.slice(1))}${string[0]}`
// }

// console.log(reverse("Working?"))

function betterReverse(string){ // defining a _better_ recursive reverse
    if (string.length === 0) return "" // define basecase, when I have no more string, return empty string

    let firstChar = string[0] // create a variable with first character in it

    debugger
    let recursiveResult = betterReverse(string.slice(1)) // create variable to hold result of recursive call
    // console.log("Recursive result: ", recursiveResult)
    debugger
    let result = recursiveResult + firstChar // concatenate our recursiveResult and firstChar
    // console.log("Concatted: ", result)
    debugger
    return result // return that result

}


console.log(betterReverse("Working?"))