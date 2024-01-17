/*
Refactoring Iteration
Given the function below that iterates through an object and prints all values
associated with keys that are vowels using Object.keys(), refactor the code
to use the for...in pattern to iterate through the object.



Key point here is to note how there are multiple ways to iterate through an
object that are interchangeable. Comment out the original function to run your refactored function.
*/

const obj = {
    a: "get",
    b: "all",
    c: "of",
    d: "the",
    e: "values"
}

// const printValues = obj => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for(let key of Object.keys(obj)) {
//         if(vowels.indexOf(key) >= 0) {
//             console.log(obj[key]);
//         }
//     }
// }

const printValuesRefactored = obj => {
    // Write your solution here.
	const vowels = ['a', 'e', 'i', 'o', 'u'];
  	for (let key in obj) {
    	if(vowels.indexOf(key) >= 0) {
            console.log(obj[key]);
        }
    }
}

// printValues(obj);               // get values
printValuesRefactored(obj);     // get values
