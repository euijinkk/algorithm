function solution(numbers, k) {
  return (1 + 2 * (k - 1)) % numbers.length || numbers.length;
}
