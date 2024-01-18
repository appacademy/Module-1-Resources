
let names = ['mark', 'john', 'todd', 'anthony', 'david'];


let myFilter = (array, callback) =>{
    let newArray = [];
    for (const element of array) {
        if(callback(element) === true)
            newArray.push(element)
    }
    return newArray;
}


let myResult = myFilter(names, name => name.includes("o"));
console.log(myResult);

console.log(['mark', 'john', 'todd', 'anthony', 'david'].filter(name => name.includes("o")))
//Timothy
// const myFilter = (str, cb) => {
// 	let newStr = '';
//   	for (let i of str) {
//     	if (cb(i)) newStr += i;
//     }
//   	return newStr;
// }

// function isNotA(char) {
//   return char !== 'a';
// }

// console.log(myFilter('banana', isNotA))


const myEvery = (arr, cb) => {
  for (let item of arr) {
    if (cb(item) === false) return false;
  }
  return true;
}

// const hasA = word => word.includes('a');

console.log(myEvery(['a', 'banana', 'and', 'an', 'apple',], word => word.includes('a'))); // true
// console.log(myEvery(['a', 'banana', 'and', 'a', 'bucket'], hasA)); // false

let user = {
 sayHi: () => console.log('hello'),
 method: myEvery
};

// console.log(user.sayHi())
console.log(user.method(['a', 'banana', 'and', 'an', 'apple',], word => word.includes('a')))
