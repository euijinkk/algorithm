function searchInsert(nums, target) {
  // set left and right positions
  let left = 0;
  let right = nums.length - 1;

  // continue searching while left pointer is less than or equal to right pointer
  while (left <= right) {
    // calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // If the target is found at the middle index, return the middle index
    if (nums[mid] === target) {
      return mid; // Target found, return the index.
      // if target is greater than the value at the middle index, adjust the left pointer to mid + 1
    } else if (nums[mid] < target) {
      left = mid + 1; // Move the left boundary to the right of mid.
      // or, adjust the right pointer to mid - 1
    } else {
      right = mid - 1; // Move the right boundary to the left of mid.
    }
  }

  // If the target is not found, return the insetion position
  return left;
}
