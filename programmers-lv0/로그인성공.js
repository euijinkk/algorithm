function solution(M, N) {
  return N.reduce((acc, d) => {
    if (acc === "login" || acc === "wrong pw") {
      return acc;
    }

    if (d[0] === M[0] && d[1] === M[1]) {
      return "login";
    }
    if (d[0] === M[0]) {
      return "wrong pw";
    }
    return "fail";
  }, "fail");
}

/**
 * 풀이 시간 : 16:50 ~ 16:55
 *
 * 풀이 과정 :
 * 아이디 비밀번호 모두 일치하면 -> login
 * 아이디가 일치하는 회원이 없으면 -> fail
 * 아이디는 일치, 비밀번호는 불일치 -> wrong pw
 * M: [string, number]
 * db: [string, number][]
 *
 * 풀이 참고 및 Learning :
 * 중간에 끊는게 좋을 때는 for문을 쓰는게 좋다. reduce가 진짜 짜릿하고 좋긴한데, 최대 n번 더 순회한다는 단점이 있다. for문으로 풀어보자
 * for문을 미워히지말자 ㅋ
 *
 * Map을 사용한 풀이도 있네. Map 자료구조를 이해해보자.
 * 배열을 요소로 받는다. 1번째 배열의 요소를 key로, 2번째 배열의 요소를 value로 저장한다.
 * 문자열이 아닌 값도 키로 사용한다.
 * 키가 숫자이면 사용하기 편할 것이다.
 * 메소드만을 활용하여 값을 조회, 수정, 삭제할 수 있다. 명확하다.
 * entries가 원래 Map에만 있었다. ES8에서 Object.entries 등장.
 */

function solutionForVersion(M, N) {
  let result = "fail";
  for (d of N) {
    if (d[0] === M[0] && d[1] === M[1]) {
      result = "login";
      break;
    }
    if (d[0] === M[0]) {
      result = "wrong pw";
      break;
    }
  }

  return result;
}

function solutionMapVersion(M, N) {
  const [id, pw] = M;
  const map = new Map(N);

  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
