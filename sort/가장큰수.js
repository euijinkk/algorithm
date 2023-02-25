function solution(numbers) {
  const numbers2 = numbers
    .map((v) => v + "")
    .sort((a, b) => {
      console.log(a + b, b + a);
      return b + a - (a + b);
    });

  console.log("numbers2", numbers2);
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9]);
solution([3, 30, 34, 5, 9]);

/**
 * 풀이 시간 : 15:39
 *
 * 풀이 과정 :
 * 정수를 이어붙여서 만들 수 있는 가장 큰 수
 * numbers를 조합한 수를 만들어본다. n! 개 이다. 최대 10만개니까 팩토리얼 돌리면 안 된다
 * 규칙을 발견해야한다.
 * 앞자리가 큰 수대로 배치한다.
 * 앞자리가 같다면, 이후 자리수가 더 큰수를 배치한다.
 * 3, 30을 어떻게 배치하지? 303 , 330
 * 3, 33, 30, 둘쨰자리가 누가 큰지 비교
 * 3333, 334, 셋째자리가 누가 큰지 비교
 * 32, 31, 3
 * 풀이 참고 및 Learning :
 */
