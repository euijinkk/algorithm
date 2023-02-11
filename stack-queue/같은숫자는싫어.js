function solution(arr) {
  const result = [];

  let prev = null;
  for (n of arr) {
    if (prev === n) {
      continue;
    }
    result.push(n);
    prev = n;
  }

  return result;
}
/**
 * 풀이 시간 : 19:14 ~ 19:22
 *
 * 풀이 과정 :
 * 연속적인 숫자는 하나만 남기고 제거
 * 이전 숫자를 기억하고, 기억 숫자와 같다면, 추가하지 않는다.
 * 풀이 참고 및 Learning :
 * reduce로 불변성을 지키면서 풀면 시간초과가 발생한다.
 * 1. 매번 객체를 불변하게 생성한다. => 객체를 고정하고, push, pop을 활용하자
 * reduce도 mutable하게 쓸 수 있다. 언제나, 새 값을 만들어줄 필요는 없다.
 */

function solutionReduceAndMutableVersion(arr) {
  return arr.reduce(
    (acc, curr) => {
      if (acc.prevNumber !== curr) {
        acc.result.push(curr);
      }
      acc.prevNumber = curr;
      return acc;
    },
    { result: [], prevNumber: null }
  ).result;
}

// Timeout
// reduce라고 무조건 불변성을 지키면 비효율적이다.
function solutionReduceAndImmutableVersion(arr) {
  return arr.reduce(
    (acc, curr) => {
      if (prevNumber === curr) {
        return { ...acc, prevNumber: curr };
      }
      return { result: [...acc.result, curr], prevNumber: curr };
    },
    { result: [], prevNumber: null }
  ).result;
}
