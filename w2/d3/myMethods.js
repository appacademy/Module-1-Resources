// what does forEach return? -> undefined
// calls the callback on each element, passing in the element, the index and the arr

const myForEach = (arr, cb) => {
	for(let i = 0; i < arr.length; i++){
    	let ele = arr[i]
        cb(ele, i, arr)
    }
}

let myArr = [1,2,3,4]
// myForEach(myArr, console.log)
myArr.forEach(console.log)
// myArr.forEach((ele, i, arr) => console.log(ele, i, arr))

// what does map return? -> same length array, after executing the callback on each element

const myMap = (arr, cb) => {
	let result = [];
    for (let i =0; i < arr.length; i++){
        let ele = arr[i]
    	result.push(cb(ele, i, arr))
    }
    return result
}

let myArr = [1,2,3,4]
// let myCallBack = num => num * 2
console.log(myMap(myArr, function (banana, index){
	return banana ** index;
}))

// returns a new array with only the elements that will return true when passed as args to our callback

const myFilter = (arr, cb) => {
	let result = []
    for (let i = 0; i < arr.length; i++){
    	let ele = arr[i]
		if (cb(ele, i, arr)) result.push(ele)
    }
    return result
}

let myArr = [1,2,3,4,5]
let isEven = num => num % 2 === 0;
// let isEvenIndex = (num, index) => index % 2 === 0
console.log(myFilter(myArr, (num) => num % 2 !== 0))

// 7 Falsy Values 
// undefined
// null
// 0
// 0n
// ""
// false
// NaN

// should return true or false
// checks to see, whether all elements in the array return true when provided to callback
const myEvery = (arr, cb) => {
	for (let i = 0; i < arr.length; i++){
    	if (cb(arr[i], i, arr) === false) return false
    }
    return true;
}

let myArr = [1,2,3,4]
// console.log(myEvery(myArr, num => num < 4))
// console.log(myEvery(myArr, "Not a callback!"))

// myReduce? accumulator? 

const myReduce = (arr, cb, accum = arr[0])=> {
	for (let i = accum === arr[0] ? 1 : 0; i < arr.length; i++){
    	accum = cb(accum, arr[i], i, arr)
    }
    return accum
}

console.log(myReduce(myArr, (accum, num) => {
	accum.push(num*4)
    return accum;
}, []))