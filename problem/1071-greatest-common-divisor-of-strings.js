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
