function reverse(string){ // define function, takes in string
    debugger
    if (string.length === 0) return "" // base case
    let first = string[0]
    debugger
    let recursiveCall = reverse(string.slice(1))
    debugger
    return recursiveCall + first
}
console.log(reverse("house"))