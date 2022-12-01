//myForEach
let names = ['brandon', 'jojo','jesse', 'charlie','braxton', 'david'];

// names.forEach((name, i, arr) => {
//  console.log(name, i, arr)
// })

let myForEach = (arr, cb) => {

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   cb(name, i, arr);
  }
}

myForEach(names, (name, i, arr) => console.log(name, i, arr))

//myMap

// let names = ['brandon', 'jojo','jesse', 'charlie','braxton', 'david'];


// let upperCasedNames = names.map((name) => name.toUpperCase());
// console.log(upperCasedNames)//[ 'BRANDON', 'JOJO', 'JESSE', 'CHARLIE', 'BRAXTON', 'DAVID' ]

let myMap = (arr, cb) => {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   let res = cb(name, arr, i);
   newArr.push(res)
  }

  return newArr;
}

console.log(myMap(names, name => name.toUpperCase()))//[ 'BRANDON', 'JOJO', 'JESSE', 'CHARLIE', 'BRAXTON', 'DAVID' ]


//myFilter
// let names = ['brandon', 'jojo','jesse', 'charlie','braxton', 'david'];

let res = names.filter((name) => name.includes('x'))

// console.log(res)

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
// let names = ['brandon', 'jojo','jesse', 'choarlie','braxton', 'daviod'];

// let res = names.every((name) => name.includes('o'))
// console.log(res)

let myEvery = (arr, cb) => {

 for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   if(cb(name) === false){
   return false;
   }
 }
  return true;
}


console.log(myEvery(names, (name) => name.includes('o')))
