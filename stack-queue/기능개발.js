function solution(progresses, speeds) {
  const leftDays = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  return leftDays.reduce(
    (acc, curr, i) => {
      if (curr <= acc.기준 && acc.result.length > 0) {
        acc.result[acc.result.length - 1] += 1;
      } else {
        acc.result.push(1);
        acc.기준 = curr;
      }
      return acc;
    },
    { result: [], 기준: leftDays[0] }
  ).result;
}

/**
 * 풀이 시간 : 19:42 ~ 18:20
 *
 * 풀이 과정 :
 * 작업의 진도 - pregresses
 * 작업의 속도 - speeds
 * 각각의 작업당 걸리는 날을 배여로 저장한다.
 * 다음 요소가 앞 요소보다 작으면, 현재 요소에 1을 더하고, 아니면 다음 요소에 1을 더한다.
 * 풀이 참고 및 Learning :
 * 예외 케이스 생각 못 하고 구현해서 오래걸렸다.
 * for문이 더 가독성이 좋나? 고민이네
 * 이 문제가 왜 풀려있었지? 우테코 준비할 때 풀었었나? 1년도 전에, 개발 잘 못할 때 풀었던 것 같은데, 생각보다 잘 풀었었네
 * 신기하다.. 역시 알고리즘 공부를 안하다보니까 문제해결능력이 더 성장한지는 모르겠다. 사실상 해결력은 머물러 있는 것 같다. 하지만 가독성은 훨씬 좋아졌다.
 *
 */
