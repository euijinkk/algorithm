function solution(spell, dic) {
  let result = 2;
  for (word of dic) {
    const isAllIncluded = spell.every(
      (s) =>
        word.includes(s) && word.match(new RegExp(s, "g") ?? []).length === 1
    );

    if (isAllIncluded) {
      result = 1;
      break;
    }
  }
  return result;
}

/**
 * 풀이 시간 : 17:37~17:42
 *
 * 풀이 과정 :
 * spell 모두가 존재하는 dic의 요소가 있으면 1 없으면 2
 * dic 배열의 각 요소를 순회하면서, 각 요소에 대해 spell을 순회하면서 includes 하고 있는지 확인한다. every로.
 * reduce 를 써도 좋지만, 중간에 배열을 멈출 수 없다는 점에서 아쉬운 점이 있다.
 * 하지만 코드는 reduce가 훨씬 깔끔하긴 하다. 이 문제는 배열 요소가 10개 이하이기 때문에 실무라고 생각하면 reduce가 좋을 것이다.
 * 막상 짜보니까 깔끔하진 않다. 이 경우는 for문이 낫겠다.
 * 풀이 참고 및 Learning :
 * 문제를 대충 읽었군. 알파벳을 한번씩만 사용하고 있어야 한다.
 * match method => 일치 여부를 판단한다. 정규식을 활용하면 개수도 출력 가능
 * RegExp 객체 => 변수를 활용하여 정규식을 생성할 때
 */

function reduceVersion(spell, dic) {
  return dic.reduce((status, word) => {
    if (status === 1) {
      return 1;
    }

    const isAllIncluded = spell.every((s) => word.includes(s));
    if (isAllIncluded) {
      return 1;
    }

    return 2;
  }, 2);
}
