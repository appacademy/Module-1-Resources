//recursion!
// Write a recursive function reverse(string) that takes in a string and returns
// that string reversed

// given some string, write a recursive function that reverses and returns that string


function reverse(string){ // define function
    if (!string) return string // define base case
    return `${reverse(string.slice(1))}${string[0]}` //define recursive step
}

function betterReverse(string){
    debugger
    if (string.length === 0) return ""
    // console.log(string)
    debugger
    const first = string[0]
    // console.log(first)
    debugger
    let recurse = betterReverse(string.slice(1))
    // console.log(result)
    debugger
    let result = recurse + first
    // console.log(result)
    debugger
    return result
}



// console.log(betterReverse("banana"))

const obnoxiousReverse = string => string.length > 0 ? `${reverse(string.slice(1))}${string[0]}` : ""

console.log(obnoxiousReverse("Truly obnoxious"))