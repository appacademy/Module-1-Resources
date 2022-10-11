// Reverse string
// Write a recursive function that takes in a string and returns that string
// reversed

// function reverse(string){
//     if(!string) return string
//     // console.log(string)
//     return `${reverse(string.slice(1))}${string[0]}`
// }

function reverse(string){ // define our function
    debugger;
    if (string.length === 0) return string;
    const first = string[0];
    debugger
    // console.log(first)
    const result = reverse(string.slice(1));
    debugger
    // console.log(result)
    return  result + first;
}

console.log(reverse("Working?"))