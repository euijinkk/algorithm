/**
 * 1. 설명하면서 문제 풀기
 * 2. 알고리즘 전략 분석 (시간복잡도, 공간복잡도, 자료구조, 방법론)
 *  - 시간복잡도 :
 *  - 공간복잡도 :
 *  - 자료구조 :
 * 3. 알고리즘 개선하기
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
