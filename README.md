## 알고리즘 Execution Time 측정

```js
console.time("getPermutations");

// 알고리즘 실행
const permutations = getPermutations([1, 2, 3, 4, 5, 6]);

// 측정할 알고리즘 끝난 후
console.timeEnd("getPermutations");
```

- n 이 무수히 커야한다.

## 문제 푸는 방법

1. 예시를 통해서 법칙 추출
2. 기능을 가진 함수로 분리하고, 세부 구현은 따로 처리하기
3. 각 함수마다 단위테스트가 필요하다
4. 각 함수를 구현할 때, 코드를 먼저 쓰지 않는다. psuedo code 로 표현이 되어야 코드로 쉽게 쓸 수 있다.
5. 코드 다 풀고 직접 리팩터링 해본다.
6. 알고리즘 전략 분석 (시간복잡도, 방법론)

   - 프롬프트 : 이 문제를 푸는 알고리즘 전략을 여러개 알려줄래?

7. GPT 와 함께 리팩터링 해본다.
