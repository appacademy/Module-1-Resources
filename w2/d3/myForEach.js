
// Replicate the built in array.forEach method. 

const array1 = ['a', 'b', 'c', 'd']; // length: 4
            //   0    1    2    3  4


let myForEach = (arr, cb) => {
    for(let i = 0; i < arr.length; i++){
        cb(arr[i], i, arr)
    }
    // Implicit: return undefined
}

array1.forEach((element, indx) => console.log(indx, element));
myForEach(array1, (element, indx, arr) => console.log(indx, element))