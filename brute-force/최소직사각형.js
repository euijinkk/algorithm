function solution(sizes) {
  const maxOne = sizes.reduce((currentMax, currentSize) => {
    const [x, y] = currentSize;

    if (x > currentMax) {
      return x;
    }

    if (y > currentMax) {
      return y;
    }

    return currentMax;
  }, 0);

  const smallArr = sizes.map((s) => Math.min(...s));
  const secondMaxOne = Math.max(...smallArr);

  return maxOne * secondMaxOne;
}

/**
 * 풀이 시간 : 17:26 ~ 17:38
 *
 * 풀이 과정 :
 * [index0, index1] index0,1 중에서 가장 큰수를 구한다. 그걸로 한 요소를 채운다.
 * 나머지 요소는 index0, 1 중에서 작은 수 중에서, 가장 큰 수를 택한다.
 * 풀이 참고 및 Learning :
 * 너무 명령적으로 푼 것 같다. 왜 이렇게 수학적인 풀이만 생각나는거지 ㅋ.ㅋ ... 흠..~
 * 배열을 먼저 [큰수, 작은수] 버전으로 배치했다면 더 직관적인 코드가 되었을텐데.
 */
