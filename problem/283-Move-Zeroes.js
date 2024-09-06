function moveZeroes(nums) {
  const nonZeroIndexes = [];

  for (num of nums) {
    if (num !== 0) {
      nonZeroIndexes.push(num);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < nonZeroIndexes.length) {
      nums[i] = nonZeroIndexes[i];
    } else {
      nums[i] = 0;
    }
  }

  return nums;
}
