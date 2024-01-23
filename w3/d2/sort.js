/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums) {
  // 1. Check the base case: If `nums` is empty, then return []
  if(!nums.length) return [];

// 2. Otherwise, find the smallest element in `nums`
// let largestNum = -Infinity;
// let largestI = 0;
// for(let i = 0; i < nums.length; i++){
//   let num = nums[i];
//   // console.log(num);
//   if(largestNum < num) {
//     largestNum = num;
//     largestI = i
//   }
// }
 let largestNum = Math.max(...nums);
 let index = nums.indexOf(largestNum);

 nums.splice(index, 1)
 let largest = [];
 largest.push(largestNum)

 sort(nums) + sort(nums)
   return sort(nums).concat(largest)
  // return [...sort(nums), largestNum];
}
/*

sort([])            => []
sort([7])           => [7].concat([])    => [7]
sort([6,7])         => [6].concat([7])   => [6,7]
sort([4,6,7]        => [4].concat([6,7]))   => [4,6,7]
sort([4,6,3,7])     => [3].concat([4,6,7])  => [3,4,6,7]
sort([4,6,3,1,7])   => [1].concat([3,4,6,7])  => [1,3,4,6,7]

sort([4,1,6,3,1,7]) => [1].concat([1,3,4,6,7])  => [1,1,3,4,6,7]
*/

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
