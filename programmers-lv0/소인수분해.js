function solution(n) {
  const answerSet = new Set();
  let temp = n;
  let i = 2;
  while (temp > 1) {
    if (Number.isInteger(temp / i)) {
      answerSet.add(i);

      temp /= i;
      i = 2;
    } else {
      i++;
    }
  }

  return [...answerSet];
}
