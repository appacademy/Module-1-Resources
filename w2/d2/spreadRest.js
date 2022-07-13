// Rest Syntax
// function myFunc(param1 = "arg1", ...allTheRest){
//     // do stuff                   ["arg2", "arg3", "arg4", "arg5", "arg6"]
// }

// myFunc("arg1", "arg2", )

// console.log("arg1", "arg2", "arg3", "arg4", "arg5", "arg6")




// Spread Syntax
// let firstVar = [[5], [10], [15]] // [5, 10, 15]
// let secondVar = [] // pass by reference : 

// for(let i = 0; i < firstVar.length; i++){
//     secondVar.push([...firstVar[i]])
// }

// firstVar[0].push(10)
// console.log(firstVar)
// console.log(secondVar)





let object = { game: { name: "Boggle", rating: "10" } };

let {
game: { rating }
} = object;

console.log(rating); // => ???