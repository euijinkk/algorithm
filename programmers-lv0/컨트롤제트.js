function solution(s) {
  return s.split(" ").reduce(
    (acc, curr) => {
      if (curr === "Z") {
        return {
          result: acc.result - acc.prevNumber,
          prevNumber: 0,
        };
      }
      return {
        result: acc.result + Number(curr),
        prevNumber: Number(curr),
      };
    },
    {
      result: 0,
      prevNumber: 0,
    }
  ).result;
}

/**
 * 풀이 시간 : 14:49~14:54
 *
 * 풀이 과정 :
 * 이전 숫자를 기억해두기.
 * Z가 나오면 이전 숫자를 뺴주기
 *
 * 풀이 참고 및 Learning :
 * stack 으로 생각하면 편하다. 바로 연산을 하지 말고, stack에 하나씩 push 하면서 Z가 나오면 빼준다.
 * 최종적으로 stack에 있는 숫자를 모두 더해주면 된다.
 */

function solutionByReference(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
