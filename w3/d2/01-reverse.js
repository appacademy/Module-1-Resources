// Recursion
// As you learned in the homework for last night, recursion is the act of a 
// function relying on the return of a call to itself in order to solve some
// problem. Let's consider the following prompt: 

// Write a recursive function reverse(string) that takes in a string and returns
// it reversed.

// Here is some code that satisfies the prompt:

function reverse(string) { // define function
    if (!string) return string // define base case
    return `${reverse(string.slice(1))}${string[0]}` // define recursive step
}

// What's really going on here? We'll break it down:
// -- Define out function, reverse, that will take in some string and return the
//    string reversed
// -- The next line is saying, if we don't have a truthy value for our string 
//    (or in other words, a non-empty string) we want to begin to construct our
//    string, but first we need to know what we get back from invoking our
//    function on our string starting after the first letter
// Let's rewrite this in clearer terms:

function betterReverse(string) { // define our function
    if (string.length === 0) return "" // define base case
    let first = string[0] // pull out first letter, store in first
    let result = betterReverse(string.slice(1)) + first // <<< Recursive step:
    // We're initializing a new variable, result, that will hold what we get 
    // back from our recursive call with our first letter added to the end of it
    return result // return our result
}

// OK that's better, but it's still a bit confusing. Maybe if we add some
// debugger statements:

function debuggedReverse(string) {
    debugger
    if (string.length === 0) return "" 
    let first = string[0] 
    debugger
    let result = debuggedReverse(string.slice(1)) + first
    debugger
    return result 
}
// Add these to your watch list: string, first, result
// As the function calls upon itself, track what's stored in each variable
// How do we construct our result?

// Let's try some sample input: 
console.log(debuggedReverse("house")); // "esuoh"
console.log(debuggedReverse("dog")); // "god"
console.log(debuggedReverse("atom")); // "mota"
console.log(debuggedReverse("q")); // "q"
console.log(debuggedReverse("id")); // "di"
console.log(debuggedReverse("")); // ""

// What if we console.log instead of debug?
console.log('----------------------------------------')
// Break for clarity

function logReverse(string){
    console.log(string)
    if (string.length === 0) return "" 
    let first = string[0] 
    console.log(first, string)
    let result = logReverse(string.slice(1)) + first
    console.log(result)
    return result 
}

console.log(logReverse("house")); // "esuoh"
console.log(logReverse("dog")); // "god"
console.log(logReverse("atom")); // "mota"
console.log(logReverse("q")); // "q"
console.log(logReverse("id")); // "di"
console.log(logReverse("")); // ""
// If those logs made sense, log your way through recursion. If you felt that
// the debugger provided more insight, give it a try!