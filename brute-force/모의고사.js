function solution(answers) {
  const one = [1, 2, 3, 4, 5]; // 5
  const two = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10

  const 정답횟수 = answers.reduce(
    (acc, curr, index) => {
      if (curr === one[index % one.length]) {
        acc[0] += 1;
      }

      if (curr === two[index % two.length]) {
        acc[1] += 1;
      }

      if (curr === three[index % three.length]) {
        acc[2] += 1;
      }

      return acc;
    },
    [0, 0, 0]
  );

  return findMaxIndexes(정답횟수);
}

function findMaxIndexes(arr) {
  const max = Math.max(...arr);
  return arr.reduce((acc, curr, index) => {
    if (curr >= max) {
      return [...acc, index + 1];
    }
    return acc;
  }, []);
}

/**
 * 풀이 시간 : 17:48~18:!2
 *
 * 풀이 과정 :
 * [1,2,3,4,5]
 * [2,1,2,3,2,4,2,5]
 * [3,3,1,1,2,2,4,4,5,5]
 * 풀이 참고 및 Learning :
 * findMaxIndexes util 함수를 잘못 구현해서 테스트가 통과안되었다.
 * 그래도 반례를 잘 찾은 것 같다. 반례가 잘 안잡힐때는,,, 일단 여러가지 테스트케이스를 추가하면서 테스트 돌려보면 찾을 수 있다/
 */
