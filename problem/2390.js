/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// brute-force design
// 1. iterate over s
// 2. if encounter character '*', remove the left index.
//  - ex) leet**cod*e
//  - first * -> 4 index. -> remove left one 't' and '*' -> lee*cod*e
//  - next iteration -> index 3 (4-1)
//  - if encounter * -> remove the values at i and i-1 and adjust i -> i-1
// 3. return ths string
// O(n)
// array and splice methods -> O(n)
// O(n^2)
// O(10^10)

// second design
// 1. find the indices of all *
// 2. remove the value of the index(*) and index - 1 (for all)
// max lengh of string -> O(10^5)
// max count of * is O(10^5 / 2)
// the time complexity of this algorithm is O(n) and operation times 10^5 / 2
// shift method. O(n^2)

// 3. brute-force design by using stack, pop method
// 1. to iterate over s from end to the 0
// 2. push character into the result array
// - if it encounters *, do not push it into the array and also for index - 1
// O(n)

/**
 * analyze
 *
 * 1. the TC : O(n)
 * 2. the SC : O(n)
 */
function removeStars(s) {
  const result = []; // maximum is n length
  const stringStack = s.split(""); // n length

  let shouldNotPushCount = 0;
  // the while condition was wrong
  while (stringStack.length > 0) {
    // 2. push character into the result array
    // - if it encounters *, do not push it into the array and also for index - 1
    const character = stringStack.pop();

    if (character === "*") {
      shouldNotPushCount = shouldNotPushCount + 1;
      continue;
    }

    if (shouldNotPushCount > 0) {
      shouldNotPushCount = shouldNotPushCount - 1;
      continue;
    }

    result.push(character);
  }

  return result.reverse().join("");
}

console.log(removeStarsFromstring("leet**cod*e"));
