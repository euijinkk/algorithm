function solution(s) {
  return s.split("").reduce(
    (acc, curr, i) => {
      if (curr === "(") {
        acc.개수[0] += 1;
      }
      if (curr === ")") {
        acc.개수[1] += 1;
      }
      const [여는괄호갯수, 닫는괄호갯수] = acc.개수;
      if (여는괄호갯수 < 닫는괄호갯수) {
        acc.result = false;
      }
      if (i === s.split("").length - 1 && curr === "(") {
        acc.result = false;
      }

      return acc;
    },
    { 개수: [0, 0], result: true }
  ).result;
}

function solution(s) {
  let count = 0;

  for (paren of s) {
    if (paren === "(") {
      count++;
    }
    if (paren === ")") {
      count--;
    }

    if (count < 0) {
      return false;
    }
  }

  if (count !== 0) {
    return false;
  }

  return true;
}

/**
 * 풀이 시간 : 12:18 ~ 12:45
 *
 * 풀이 과정 :
 * 올바른 괄호의 정의는?
 * ) 가 더 많아지면 안 된다.
 * 마지막이 )로 끝나야 한다.
 * 총 갯수가 맞아야 한다.
 *
 * 풀이 참고 및 Learning :
 * for of 생각보다 가독성도 좋다.
 */
