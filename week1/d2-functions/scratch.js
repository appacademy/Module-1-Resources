// let array = [];

// // console.log(array);

// array.push(4);
// array.push(5);
// array.push(6);
// array.push("sup");
// array.push(10);

// console.log(array); // => [4, 5, 6, 'sup']

// console.log(array[0]); // => 4
// console.log(array[array.length - 1]); // => 'sup'
// // // console.log(array[3]); // => 'sup'

// console.log(array.length); // => 4

// // nums = [1, 2, 3]
// function doubler(nums) {
//     let newNums = [];
//     for (let i = 0; i < nums.length; i++) {
//         let currentElement = nums[i]; // 1
//         let doubledElement = currentElement * 2;
//         newNums.push(doubledElement);
//     }

//     return newNums;
// }

function averageOfFour(num1, num2, num3, num4) {
    let sum = num1 + num2 + num3 + num4;
    let avg = sum / 4;
    return avg;
}