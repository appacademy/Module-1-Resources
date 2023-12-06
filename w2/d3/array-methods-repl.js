

// function logNames(name, i, arr){
//   console.log(name, i, arr)
// }

// let logNames = function (name, i, arr){
//   console.log(name, i, arr)
// }

// let logNames = (name, i, arr) => {
//   console.log(name, i, arr)
// }

// names.forEach(logNames)

// names.forEach((name, i, arr) => {
//   console.log(name, i, arr)
// });

let names = ["brandon", "maica", "charles", "trevor"];

// arr = names = ["brandon", "maica", "charles", "trevor"]
// cb = (name, i, arr) => { console.log(name, i, arr)}
const myForEach = (arr, cb) => {
	// console.log(arr, cb);// [ 'brandon', 'maica', 'charles', 'trevor' ] [Function (anonymous)]

  for(let i = 0; i < names.length; i++) {
    let name = names[i];
   	cb(name, i, arr)
  }

}

myForEach(names,(name, i, arr) => {
  console.log(name, i, arr)
})


