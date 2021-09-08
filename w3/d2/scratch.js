// function foo() {
//     debugger;
//     return 2 + bar();
// }

// function bar() {
//     debugger;
//     return 6 + baz();
// }

// function baz() {
//     debugger;
//     return 3;
// }

// console.log(foo());



// Recursion

// 1. Base Case - case that we don't want to make the recursive call
// 2. Recursive Case - case that we DO want to make the recursive call
// 3. Recursive Step - the step we make towards the base case


// function sum(n) {
//     let sum = 1;

//     for (let i = 2; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sum(3));

// function recSum(n) {
//     debugger;
//     // base case
//     if (n === 1) {
//         debugger;
//         return 1;
//     }
//     // Recursive Case - n > 1
//     debugger;
//     return n + recSum(n-1); // n - 1 recursive step
// }

// console.log(recSum(3))
// // recSum(3) => return 3 + recSum(2) => return 3 + 3 => return 6
// // recSum(2) => return 2 + recSum(1) => return 2 + 1 => return 3
// // recSum(1) => return 1



function reverse(string) {
    debugger;
    // Base Case
    if (string.length <= 1){
        debugger;
        return string;
    }

    // Recursive Case = string.length > 1
    let lastLetter = string[string.length - 1];
    let restOfWord = string.slice(0,string.length - 1);

    debugger;
    // Recursive Call
    return lastLetter + reverse(restOfWord); // Recursive Step the string without the last character
}

// console.log(reverse("")) // ""
// console.log(reverse("j")) // "j"
// console.log(reverse("je")) // "e" + reverse("j") => "ej"
// console.log(reverse("jef")) // "f" + reverse("je") => "fej"
console.log(reverse("jeff")) // "f" + reverse("jef") => "fejj"