function solution(numbers) {
  return Number(
    numberToAlphabetMapper.reduce((acc, curr, index) => {
      return acc.replaceAll(curr, index);
    }, numbers)
  );
}

const numberToAlphabetMapper = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
