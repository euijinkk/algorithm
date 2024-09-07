/**
 * O(2n)
 */
function moveZeroes(nums) {
  // Declare the nonZeroIndexes variable as an empty array
  const nonZeroIndexes = [];

  // Iterate through the nums array
  for (num of nums) {
    // If num is not 0, push it to nonZeroIndexes
    if (num !== 0) {
      nonZeroIndexes.push(num);
    }
  }

  // Loop through the length of nums
  for (let i = 0; i < nums.length; i++) {
    // If i is less than the length of nonZeroIndexes, assign the value at index i to nums
    if (i < nonZeroIndexes.length) {
      nums[i] = nonZeroIndexes[i];
    } else {
      // Otherwise, fill it with 0
      nums[i] = 0;
    }
  }

  return nums;
}

/**
 * O(n)
 */
function moveZeroes2(nums) {
  // set i as pointer to track the position of the next non-zero element
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap using array destructuring
      i++;
    }
  }

  return nums;
}
