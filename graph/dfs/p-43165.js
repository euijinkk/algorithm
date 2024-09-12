function solution(numbers, target) {
  let answer = 0;

  function dfs(current, level) {
    if (level === numbers.length) {
      if (current === target) {
        answer++;
      }
      return;
    }
    dfs(current + numbers[level], level + 1);
    dfs(current - numbers[level], level + 1);
  }
  dfs(0, 0);

  return answer;
}
