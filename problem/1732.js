/**
 * 1. 설명하면서 문제 풀기
 * 2. 알고리즘 전략 분석 (시간복잡도, 공간복잡도, 자료구조, 방법론)
 *  - 시간복잡도 : O(n)
 *  - 공간복잡도 : O(n) -> O(1) 가능
 *  - 자료구조 :
 *  - 알고리즘 방법론 : Brute force
 * 3. 알고리즘 개선하기
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0;
  const absHeight = [altitude];

  for (num of gain) {
    altitude = altitude + num;
    absHeight.push(altitude);
  }

  return Math.max(...absHeight);
};

/**
 * 공간복잡도 O(1)
 */
var largestAltitude2 = function (gain) {
  let altitude = 0;
  let maxAltitude = 0;

  for (num of gain) {
    altitude = altitude + num;
    if (altitude > maxAltitude) {
      maxAltitude = altitude;
    }
  }

  return maxAltitude;
};
