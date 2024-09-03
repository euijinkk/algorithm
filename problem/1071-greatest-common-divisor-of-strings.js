// I'll solve the problem of finding the greatest common divisor of two strings
function gcdOfStrings(str1, str2) {
  // First, get divisors of str1
  const stringDivisors1 = getStringDivisors(str1);
  // Then, get divisors of str2
  const stringDivisors2 = getStringDivisors(str2);

  // Finally, find the common divisors of str1 and str2
  const commonArr = findCommon(stringDivisors1, stringDivisors2);

  // Then, get get greatest one.
  return getMaxLengthElement(commonArr) ?? "";
}

// get the element with maximum length in the array
function getMaxLengthElement(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      return curr;
    }
    return acc;
  }, arr[0]);
}

// find common elements between two arrays
function findCommon(arr1, arr2) {
  return arr1.filter((e) => arr2.includes(e));
}

// This function gets the string divisors of a string
// It takes a string as a parameter and returns an array of strings
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

// This function gets the divisors of a number
// It takes a number as a parameter and returns an array of numbers
function getNumberDivisors(num) {
  const res = new Set();
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      res.add(i);
      res.add(num / i);
    }
  }
  return Array.from(res).sort((a, b) => a - b);
}
