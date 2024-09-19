/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity : O(n), but in practice, performs 2n operations,
 *  - Space Complexity : O(n)
 *  - Data structure : Set, List
 * 3. Improve algorithm
 */

const vowels = new Set(["a", "e", "i", "o", "u"]);
var reverseVowels = function (s) {
  const arr = s.split("");
  const vowelsFromString = [];

  for (let i = 0; i < arr.length; i++) {
    const character = arr[i];
    const isVowel = vowels.has(character.toLowerCase());
    if (isVowel) {
      vowelsFromString.push(character);
    }
  }

  let sequence = vowelsFromString.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const character = arr[i];
    const isVowel = vowels.has(character.toLowerCase());
    if (isVowel) {
      arr[i] = vowelsFromString[sequence];
      sequence--;
    }
  }

  return arr.join("");
};

/**
 * 2n 번 연산을 어떻게 n번으로 줄일 수 있을까?
 * -> two-pointer 사용하여, n operations 로 바꾼다.
 */

var reverseVowels2 = function (s) {
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");

  while (left < right) {
    const isLeftVowels = vowels.has(arr[left].toLowerCase());
    const isRightVowels = vowels.has(arr[right].toLowerCase());
    if (isLeftVowels && isRightVowels) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      ++left;
      --right;
    }
    if (!isLeftVowels) {
      ++left;
    }
    if (!isRightVowels) {
      --right;
    }
  }
  return arr.join("");
};

console.log(reverseVowels("IceCreAm"));
