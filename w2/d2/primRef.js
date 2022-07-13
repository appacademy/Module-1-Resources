
// Primatives copy the value
// let firstVar = 5
// let secondVar = firstVar // pass by value : 5
// firstVar = 10

// console.log(secondVar)



// References copy the location
let firstVar = [5]
let secondVar = firstVar // pass by reference : 
firstVar.push(10)

console.log(secondVar)



// Shallow vs Deep Copy
// let firstVar = [[5], [10], [15]] // [5, 10, 15]
// let secondVar = [] // pass by reference : 

// for(let i = 0; i < firstVar.length; i++){
//     secondVar.push(firstVar[i])
// }

// firstVar[0].push(10)
// console.log(firstVar)
// console.log(secondVar)