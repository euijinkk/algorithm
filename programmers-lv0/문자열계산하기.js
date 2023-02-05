function solution(my_string) {
  return my_string.split(" ").reduce(
    (acc, curr) => {
      if (curr === "+") {
        return {
          ...acc,
          operator: "+",
        };
      }
      if (curr === "-") {
        return {
          ...acc,
          operator: "-",
        };
      }
      if (acc.operator === "+") {
        return {
          ...acc,
          result: acc.result + Number(curr),
        };
      }
      if (acc.operator === "-") {
        return {
          ...acc,
          result: acc.result - Number(curr),
        };
      }
    },
    { result: 0, operator: "+" }
  ).result;
}

/**
 * 풀이 시간 : 13:10~14:00
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 * 바로 계산하지 않고, 리스트에 담은 후 계산하면 좋겠다.
 */

function solution(my_string) {
  const resultArray = [];

  let sign = 1;
  my_string.split(" ").forEach((s) => {
    if (s === "+") {
      sign = 1;
      return;
    }
    if (s === "-") {
      sign = -1;
      return;
    }
    resultArray.push(sign * Number(s));
  });

  return resultArray.reduce((a, b) => a + b, 0);
}
