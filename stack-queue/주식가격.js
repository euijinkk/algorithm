/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// iterate over prices
// in a iteration, if the lower value is in after the index i, -> push (k - i - 1) into result array
// - k is the index where the first value is less than the value at i
// but in this way, the TC will be O(n^2)
// so we should think about efficient way to find the lower value

// start with [0,0,0,0,0]

function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
