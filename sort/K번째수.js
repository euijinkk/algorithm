function solution(array, commands) {
  let result = [];
  for (let c of commands) {
    const [start, end, target] = c;
    const slicedArr = array.slice(start - 1, end);
    const ascendingArr = slicedArr.sort((a, b) => a - b);
    result.push(ascendingArr[target - 1]);
    debugger;
  }

  return result;
}

/**
 * 풀이 시간 : 03:58 ~ 04:07
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 * array 메서드를 이어서 붙이는 것보다 변수화 하는 것이 가독성도 좋고, 디버깅도 편하다.
 * 콘솔 말고 디버깅 툴을 연습해보자. 불필요하게 콘솔찍지 말고 디버깅을 돌리자! 훨씬 편하다
 * sort의 동작원리, 시간복잡도를 이해하자.
 */
