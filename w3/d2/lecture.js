// Write a recursive function reverse(string) that takes in a string and returns
// it reversed.

// function reverse(string){
//     if(!string) return string
//     return `${reverse(string.slice(1))}${string[0]}`
// }

// function reverse(string){ // define our function
//     debugger
//     if (string.length === 0) return "" // define base case
//     debugger
//     let first = string[0]  //pull out our first letter and store for later
//     debugger
//     let result = reverse(string.slice(1)) // <<< Recursive step:
//     debugger
//     // Holding the result of our recursive call, concatenated with our first
//     // letter to build our desired result
//     return result
// }

// console.log(reverse("Is it working?"))

function logReverse(string){
    console.log(string)
    if(string.length === 0) return ""
    let first = string[0]
    console.log(first, string)
    let result = logReverse(string.slice(1))
    console.log(first, string, result)
    return result
}

console.log(logReverse("Is it working?"))