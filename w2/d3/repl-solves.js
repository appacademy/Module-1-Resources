let names = ["brandon", "jesse", "anabel", "charles", "trevor"];

names.forEach((name, i, arr) => {
 // console.log(name, i , arr);
})


const myForEach = (arr, cb) => {
	// console.log(arr, cb);
  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   cb(name, i, arr);
  }
}


myForEach(names, (name, i, arr) => console.log(name, i, arr))

let upperCasedNames = names.map( (name) => name.toUpperCase() )
// console.log(upperCasedNames)

const myMap = (arr, cb) => {
	// console.log(arr, cb)
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   let upperCasedName = cb(name);
    // console.log(upperCasedName)
   newArr.push(upperCasedName)
  }

  return newArr;
}



console.log(myMap(names, (name) => name.toUpperCase()))


let filteredNames = names.filter( (name) => name.includes('o') )
// console.log(filteredNames)

const myFilter = (arr, apple) => {
// console.log(arr, cb)

  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
    console.log(apple(name))
  	if(apple(name) === true) {
     newArr.push(name)
    }
  }
  return newArr;
};


console.log(myFilter(names, (name) => name.includes('o')))




let res = names.every( name => name.includes('o') )
// console.log(res);


const myEvery = (arr, cb) => {
	// console.log(arr, cb);

  for(let i = 0; i < arr.length; i++) {
    let name = arr[i];

    if(cb(name) === false){
     return false;
    }

  }

  return true;
}


console.log(myEvery(names, (name) => name.includes('o')));
