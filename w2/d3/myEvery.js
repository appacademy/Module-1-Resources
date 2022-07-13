const isBelowThreshold = (currentValue) => currentValue < 40;


const array1 = [1, 30, 39, 29, 10, 13];


console.log(array1.every(isBelowThreshold));
console.log(myEvery(array1, isBelowThreshold))
// console.log(myEvery(array1, aDifferentCallback))
// expected output: true


function myEvery(arr, cb){
    for(let i = 0; i < arr.length; i++){
        if(!cb(arr[i], i, arr)){
            return false
        }
    }
    return true
}

