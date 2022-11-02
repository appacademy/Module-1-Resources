let names = ['brandon', 'jojo', 'charlie', 'braxton', 'jesse', 'drew']

let res = names.filter((name) => name.includes('x'));
// console.log(res)

const myFilter = (arr, cb) => {
	let res = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
    console.log(cb(name))
    if(cb(name) === true) {
       res.push(name)
    }
  }

  return res;
}

console.log(myFilter(names, (name) => name.includes('x')))
