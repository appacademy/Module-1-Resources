let names = ['brandon', 'jojo', 'charlie', 'braxton', 'jesse', 'drew']

// names.forEach((name, i, arr) => {
// 	console.log(name, i, arr)

// })

const myForEach = (arr, cb) => {
	for(let i = 0; i < arr.length; i++) {
     let name = arr[i];
      cb(name, i, arr)
    }
}

myForEach(names, (name, i, arr) => {
 console.log(name, i, arr);
})
