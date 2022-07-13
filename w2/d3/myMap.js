const array1 = [1, 4, 9, 16];

// const array1 = [1, 4, 9, 16];
//             //  0  1  2  3
//             //     ^

// const newArr = [2, 8]
//             //  0  1

// Our implimentation
const myMap = (arr, cb) => {
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr[i] = cb(arr[i], i, arr)
    }
    return newArr
}

// Built in (Expected behavior)
console.log(
    array1.map(x => x * 2) // Returns [2, 8, 18, 32]
);

// Our testing
console.log(
    myMap(array1, x => x * 2) // Returns [2, 8, 18, 32]
);







// As a developer using code a developer wrote for us (Library)
array1.map(x => x * 2) // Returns [2, 8, 18, 32]

// As a developer writing code for other developers
function map(){

    undefined
}
















