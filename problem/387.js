/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// 1. iterate for s
// 2. in a iteration, findLastIndex
// 3. comapare current Index and the value from findLastIndex

// TC: O(n^2)

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];
    const firstIndex = s.indexOf(currentCharacter);
    const lastIndex = s.lastIndexOf(currentCharacter);

    if (firstIndex === lastIndex) {
      return i;
    }
  }

  return -1;
};

// TC : O(n),
// operation times : 2n
// hash map 으로 풀기
var firstUniqChar = function (s) {
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    hashMap.set(currentCharacter, (hashMap.get(currentCharacter) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    if (hashMap.get(currentCharacter) === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("aabb"));
