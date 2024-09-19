/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
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

console.log(reverseVowels("IceCreAm"));
