// recursive reverse string
// -- given some string, recursively build the reverse string
// -- base case probably has something to do with length
// ????

// function badReverse(string){
//     if (!string) return string
//     return `${badReverse(string.slice(1))}${string[0]}`
// }

// console.log(badReverse("Is it working?"))

function betterReverse(string) {
    debugger
    if (string.length === 0) return "";
    else {
        // console.log("string: ", string)
        const first = string[0];
        debugger
        // console.log("first:  ", first)
        const recurse = betterReverse(string.slice(1));
        // console.log("recurse:", recurse)
        debugger
        return recurse.concat(first);
    }
}

console.log(betterReverse("Is it working?"))
