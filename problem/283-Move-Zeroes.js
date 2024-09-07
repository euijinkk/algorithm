/**
 * O(2n)
 */
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

/**
 * O(n)
 */
function moveZeroes2(nums) {
  let i = 0; // Pointer to track the position of the next non-zero element

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap using array destructuring
      i++;
    }
  }
}
