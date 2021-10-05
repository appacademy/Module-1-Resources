// [1,2,3] => [3,2,1]

const reverseArr = (arr, newArray=[]) => {
    // create a new array and mutate it
    newArray.push(arr[1]);
    // base case
    if (!arr.length) return [];

    // recursive case => if the array has a length
    let lastEle = arr.pop();
    console.log(newArray);
    // recursive step
    return [lastEle, ...reverseArr(arr, newArray)];
}

// console.log(reverseArr())
// console.log(reverseArr([])); // []
// console.log(reverseArr([1])); // [1, ...reverseArr([])] => [1, ...[]] => [1]
// console.log(reverseArr([1,2])); // [2, ...reverseArr([1])] => [2, ...[1]] => [2, 1]
console.log(reverseArr([1,2,3,4])); // [3, ...reverseArr([1,2])] => [3, ...[2, 1]] => [3,2,1]