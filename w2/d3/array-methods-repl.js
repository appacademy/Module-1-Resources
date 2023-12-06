

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


let upperCasedNames = names.map( (name) => name.toUpperCase() )

// console.log(upperCasedNames)// [ 'BRANDON', 'MAICA', 'CHARLES', 'TREVOR' ]

// function cb('brandon') {

// 	return 'BRANDON'

// }

// let upperCasedNames = names.map( (name) => name.toUpperCase() )
const myMap = (arr, cb) => {

  // console.log(cb);// [Function (anonymous)]
  // console.log(cb());
  // console.log(cb('brandon'));// BRANDON
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    let name = arr[i];
    // console.log(name);
    let upperCasedName = cb(name);
    // console.log(name, upperCasedName);
    newArr.push(upperCasedName);
  };

  return newArr;
}

console.log(myMap(names,  (name) => name.toUpperCase()))


/*

let names = ["brandon", "maica", "charles", "trevor"];

Implement the logic using the function and the array method

myFilter - use filter to return an array of names that include 'e'

*/
// let names = ["brandon", "maica", "charles", "trevor"];
// filter
let includesE = names.filter(name => name.includes('e'))
// console.log(includesE);

const myFilter = (arr, cb) => {
	// console.log(arr, cb);
  let includesE = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];

    // console.log(cb(name))
    if(cb(name) === true){
    	includesE.push(name)
    }

  };

  return includesE
};


console.log(myFilter(names, (name => name.includes('e') )))



/*

	Use this names array

	let names = ["brandon", "maica", "charles", "trevor"];

	Implement the logic using the function and the array method

	myEvery - use every to check if every name includes a 'o'
*/

let names = ["brandon", "maica", "charles", "trevor"];

// let boolean = names.every( name => name.includes('o'));

// console.log(boolean);



const myEvery = (arr, cb) => {

  for(let i = 0; i < arr.length; i++) {
    let name = arr[i];

    // console.log(cb(name))
    if(cb(name) === false) {
      return false
    }
  }
  return true;
};

// console.log(myEvery(names, name => name.includes('o')));
