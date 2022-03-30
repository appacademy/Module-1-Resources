// IIFES

// 1. Declare a Function
// 2. Invoke it immediately 
// 3. You never use the function again

// let goodbye = module => {
//   console.log(`Goodbye, Mod ${module}.`)
// }

// goodbye("One");

let res = (module => `Goodbye, Mod ${module}.`)("One");
console.log(res);