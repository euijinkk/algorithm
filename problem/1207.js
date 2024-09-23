/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// 1. hash map -> find occurrences of the numbers
// 2. get all values from hash map
// 3. convert it into Set and compare the size of Set and the size of (2) arrays

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // 1. hash map -> find occurrences of the numbers
  const occurrencesHashMap = new Map();
  for (const num of arr) {
    const occurrence = occurrencesHashMap.get(num);
    occurrencesHashMap.set(num, (occurrence ?? 0) + 1);
  }
  // 2. get all values from hash map
  // 3. convert it into Set and compare the size of Set and the size of (2) arrays
  return new Set(occurrencesHashMap.values()).size === occurrencesHashMap.size;
};

// 1. Time Complexity : O(n)
// 2. Space Complexity : O(n)
