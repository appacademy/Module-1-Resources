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
    /**
     * base case: 1 or less elements = sorted!
     * 
     * take any ele (typically last)
     * divide up nums according to ele
     * less than ele, to the left
     * greater than or equal to ele, to the right
     * 
     * if left is sorted and right is sorted
     * -> sort recursively
     * put left, ele, right for full sorted array
    */

    if (nums.length <= 1) return nums;

    let last = nums.pop()
    let left = nums.filter(el => el < last)
    let right = nums.filter(el => el >= last)

    let leftSorted = sort(left)
    let rightSorted = sort(right)

    return leftSorted.concat([last]).concat(rightSorted)
}

console.log(sort([4,1,6,3,1,7,5])); // [1, 1, 3, 4, 5, 6, 7]
/**
 * ele = 5
 * left = [4,1,3,1] => [1,1,3,4]
 * right = [6,7]
 * left + ele + right = full sorted array
 */

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;