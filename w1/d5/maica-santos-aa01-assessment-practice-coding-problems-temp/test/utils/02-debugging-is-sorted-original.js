function isSorted(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      return false;
    }
  }
  return true;
}