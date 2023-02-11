function solution(keyinput, board) {
  // 11 -> 5까지 가능.
  const [maxAbsX, maxAbsY] = board.map((n) => (n - 1) / 2);

  return keyinput.reduce(
    (acc, curr) => {
      if (curr === "right") {
        if (maxAbsX > acc[0]) {
          acc[0] += 1;
        }
      }

      if (curr === "left") {
        if (maxAbsX > -acc[0]) {
          acc[0] -= 1;
        }
      }

      if (curr === "up") {
        if (maxAbsY > acc[1]) {
          acc[1] += 1;
        }
      }

      if (curr === "down") {
        if (maxAbsY > -acc[1]) {
          acc[1] -= 1;
        }
      }

      return acc;
    },
    [0, 0]
  );
}

/**
 * 풀이 시간 : 16:36 ~ 16:44
 *
 * 풀이 과정 :
 * board는 최대 크기. keyinput은 이동
 * 일단 keyinput만으로 풀고, board를 조건문으로 단다.
 * 풀이 참고 및 Learning :
 */
