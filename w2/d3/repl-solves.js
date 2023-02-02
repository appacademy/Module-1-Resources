let names = ['brandon', 'jojo','jesse', 'anabel','braxton', 'john'];


//myForEach
// names.forEach(

//   (name, i, arr) => {
//  console.log(name, i, arr)

// })

const myForEach = (arr, cb) => {

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   cb(name, i, arr);
  }
}

myForEach(names,  (name, i, arr) => console.log(name, i, arr) )


//myMap
let upperCasedNames = names.map((name) => name.toUpperCase());//
// console.log(upperCasedNames)


const myMap = (arr, cb) => {

  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   let upperCasedName = cb(name);
   newArr.push(upperCasedName)
  }

  return newArr;
}


console.log(myMap(names, (name) => name.toUpperCase()))

//myFilter
let filteredNames = names.filter((name) => name.includes('x'))
// console.log(filteredNames)

let myFilter = (names, cb) => {
  let newArr = [];

 for(let i = 0; i < names.length; i++){
   let name = names[i]
   	// let res = cb(name)
  	 if(cb(name)){
       newArr.push(name)
     }
 }
  return newArr;
}

console.log(myFilter(names, name => name.includes('x')))


//myEvery
let bool = names.every((name) => name.includes('o'))
// console.log(res);

const myEvery = (arr, cb) => {

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
    if(cb(name) === false) {
     return false;
    }
  }

  return true;
}

console.log(myEvery(names, (name) => name.includes('o')))
