function findMaxAverage(nums, k) {
  // declare a variable 'previousSumValue' to store previous sum of k length
  let previousSumValue = sum(nums.slice(0, k));

  // initialize 'ax' with the sum of the first k elements
  let max = previousSumValue;

  // Loop through the array starting from k up to the end
  // The loop starts at index k because the first k elements have already been summed.
  for (let i = k; i < nums.length; i++) {
    // Update the sum by adding the next element and subtracting the element that falls out of the sliding window.
    const sumValue = previousSumValue + nums[i] - nums[i - k];
    // if sumValue is greater than current max, update max
    if (sumValue > max) {
      max = sumValue;
    }
    // update previousSumValue
    previousSumValue = sumValue;
  }

  return max / k;
}

function sum(nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
