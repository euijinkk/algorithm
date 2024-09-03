// 문제 푸는 방법
// 1. 예시를 통해서 법칙 추출
// 2. 기능을 가진 함수로 분리하고, 세부 구현은 따로 처리하기
// 3. 각 함수마다 단위테스트가 필요하다
// 4. 각 함수를 구현할 때, 코드를 먼저 쓰지 않는다. psuedo code 로 표현이 되어야 코드로 쉽게 쓸 수 있다.
// 5. 코드 다 풀고 직접 리팩터링 해본다.
// 6. GPT 와 함께 리팩터링 해본다.

function gcdOfStrings(str1, str2) {
  const stringDivisors1 = getStringDivisors(str1);
  const stringDivisors2 = getStringDivisors(str2);

  const commonArr = findCommon(stringDivisors1, stringDivisors2);
  return getMaxLengthElement(commonArr) ?? "";
}

function getMaxLengthElement(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      return curr;
    }
    return acc;
  }, arr[0]);
}

function findCommon(arr1, arr2) {
  return arr1.filter((e) => arr2.includes(e));
}

function getStringDivisors(str) {
  const res = [];
  const divisorsOfNumber = getNumberDivisors(str.length);

  for (num of divisorsOfNumber) {
    const strDivisor = str.slice(0, num);
    if (strDivisor.repeat(str.length / num) === str) {
      res.push(strDivisor);
    }
  }
  return res;
}

function getNumberDivisors(num) {
  const res = [];
  for (let i = 1; i <= num; i++) {
    if (num / i === Math.round(num / i)) {
      res.push(i);
    }
  }
  return res;
}
