// Arrays are ordered collections of data. Much like the strings we learned
// about, arrays have indices attached to each position within the array. We can
// access the value stored at each index by keying into it with the index.


let animal = 'cats';
// 0 1 2 3
// c a t s

let arr = [1,2,3,4,5];

// console.log(arr);
//arrats can hold any data types, they do not have to be the same

let arr2 = [1, true, 'cool', [[0]]];
// console.log(arr2);

// console.log(arr2[0]);//1
// console.log(arr2[2]);//3
// console.log(arr2[arr2.length - 1])//[ 'wow another array' ]
console.log(arr2[3][0][0])//indexing into array, then indexing into the nested array


console.log('string'.length)//6
console.log(arr2.length)//4


//.indexOf
console.log(arr2.indexOf(1))//0
console.log(arr2.indexOf('cool'))//2

//.concat
let nums1 = [1,2,3]
let nums2 = [4,5,6];
let nums3 = [7,8,9];

// console.log(nums1 + nums2)//1,2,34,5,6
console.log(nums1.concat(nums3, nums2));


//checking the type of a data type
// typeof can be useful debbugging
console.log(typeof 12)//number
console.log(typeof 'hello')//string
console.log(typeof true)//boolean
console.log(typeof [])//object

console.log(Array.isArray([]))//true

//prompt sum all tehv alues of an array

function sumArray(array) {
  console.log('The input array', array);
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    console.log('Sum at the start of the array is', sum);
    let currentNum = array[i];
    console.log('The current index is', i);
    console.log('the current number is', currentNum);
    sum += currentNum;
    console.log('Sum at the end of the loop', sum)
  }

  return sum;

}

console.log(sumArray([1,2,3]))//6
