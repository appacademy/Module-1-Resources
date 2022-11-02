let names = ['brandon', 'jojo', 'charlie', 'braxton', 'jesse', 'drew']

let newNames = names.map((name) => name.toUpperCase())
// console.log(newNames)

const myMap = (arr, cb) => {
  console.log(cb)
	let newArr = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   let res = cb(name);
    console.log(name, res)
   newArr.push(res)
  }

  return newArr;
}

console.log(myMap(names, ((name) => name.toUpperCase())))
// console.log(myMap(names, newNames))
