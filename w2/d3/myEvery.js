let names = ['brandon', 'jojo', 'charlie', 'braxton', 'jesse', 'drew']

let res = names.every((name) => name.includes('o'));//false
// console.log(res)

const myEvery = (arr, cb) => {
	for(let i = 0; i < arr.length; i++) {
     let name = arr[i];
      if(cb(name) === false) {
       return false;
      }
    }
  return true;
}

let cb = (name) => name.includes('o')
console.log(myEvery(names, cb))
