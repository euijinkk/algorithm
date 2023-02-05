function solution(balls, share) {
  return combination(balls, share);
}

function combination(n, r) {
  return permutation(n, r) / factorial(r);
}

function permutation(n, r) {
  let result = 1;
  for (i = n; i > n - r; i--) {
    result *= i;
  }
  return result;
}

function factorial(n) {
  return permutation(n, n);
}

/**
 * 풀이 시간 : 15:02~15:11
 *
 * 풀이 과정 :
 * 3C2,5C3 등 Combination을 구한다.
 * NCR = NPR / R!
 * NPR = Nx(N-1) ... (N-R+1)
 * R! = Rx(R-1) ... 1
 *
 * 풀이 참고 및 Learning :
 * permutation와 combination을 정의에 맞게 잘 구현했는지 보자.
 * 팩토리얼은 재귀로 구현하는 것이 좋아보인다. 재귀에 아직 익숙하지 않다.
 */

function factorialByRecursion(n) {
  return n === 0 ? 1 : num * factorialByRecursion(n - 1);
}
