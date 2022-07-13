const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let array = [4, 6, 78, 23, 56, arr[i]] // length: 6
         //  0  1   2   3   4  5       6

const myFilter = (arr, cb = word => true) => {
    const newArr = [] // 0

    // iterates through all the elements
    for(let i = 0; i < arr.length; i++){
        // Test if the element at i passes the filter test
        if(cb(arr[i], i, arr)){ // Returns true or false
            let newIndx = newArr.length
            newArr[newIndx] = arr[i]
        }
    }
    return newArr
}

// Reference Implementation
console.log(
    words.filter(word => word.length > 6) // cb returns true or false
);

// Test Case
console.log(
    myFilter(words, word => word.length > 6)
);















// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
// //             true      false     true      false     false
// // let filterReturn = ['apple', 'grapes']

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//   return arr.filter()
//   //           ^
//   //  contains |
//   // let filterReturn = ['apple', 'grapes']
// }

// console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']