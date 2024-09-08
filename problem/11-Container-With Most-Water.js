// brute force -> n^2 개 - 최대 10^10 -> 못 푼다
// greedy -> 큰거부터 찾는다.

// 큰수부터 집어서, n 번 순회한다
// 동일한 것이 있다면, 처음과 마지막만 추출한다.
// termination condition - n * 현재 수 < 현재 최대값

/**
 * Greedy Design
 * while NOT solved yet
 * step1: selection (local optimal choice)
 *  큰것부터 선택한다. 동일하다면, x 값이 제일 작은 것, 큰 것만 고른다.
 * step2: feasibility (constraints 제약조건)
 *  그 값이 max 보다 크다면, max 를 update 해준다
 * step3: solution check (termination condition)
 *  현재 가능한 조건에서 max 를 넘을 수 없다면 종료한다.
 *
 * 이 문제풀이의 단점 : greedy 같은 brute-force 라서 시간이 오래 걸린다. 2500ms
 */
function maxArea(heights) {
  let max = 0;
  const sortedHeights = [...heights].sort((a, b) => b - a);
  const maxX = heights.length - 1;

  for (height of sortedHeights) {
    const firstIndex = heights.indexOf(height);
    const lastIndex = heights.lastIndexOf(height);

    const indexes =
      firstIndex === lastIndex ? [firstIndex] : [firstIndex, lastIndex];

    for (const index of indexes) {
      const v = heights[index];
      for (let i = 0; i < heights.length; i++) {
        const x = Math.abs(index - i);
        const y = Math.min(v, heights[i]);
        const area = x * y;

        if (area > max) {
          max = area;
        }

        const maxY = height;
        if (maxX * maxY <= max) {
          return max;
        }
      }
    }
  }
}

/**
 * 양쪽에서 하나씩 이동해오는 방법. 최대 O(n)
 */
function maxArea2(H) {
  let ans = 0;
  let i = 0;
  let j = H.length - 1;

  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i));
    H[i] <= H[j] ? i++ : j--;
  }
  return ans;
}
