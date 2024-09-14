/**
 * 1. 설명하면서 문제 풀기
 * 2. 알고리즘 전략 분석 (시간복잡도, 공간복잡도, 자료구조, 방법론)
 *  - 시간복잡도 : O(n^3)
 *  - 공간복잡도 : O(n^2)
 *  - 자료구조 : 리스트
 * 3. 알고리즘 개선하기
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let count = 0;
  const columns = Array.from({ length: grid.length }).map((_, i) =>
    Array.from({ length: grid.length }).map((_, j) => grid[j][i])
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (deelEqual(grid[i], columns[j])) {
        count++;
      }
    }
  }
  return count;
};

function deelEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * 배열 비교할 때, join 으로 합치고, 비교하기
 * Time Complexity -> O(n^2)
 */
var equalPairs2 = function (grid) {
  const rows = grid.map((arr) => arr.join());
  const columns = grid[0].map((col, i) => grid.map((row) => row[i]).join());
  let count = 0;
  for (let row of rows) {
    for (let column of columns) {
      if (row === column) count++;
    }
  }
  return count;
};

/**
 * hash 을 활용한 풀이
 * Time Complexity -> O(n^2)
 */
var equalPairs3 = function (grid) {
  const columns = new Map();
  const rows = new Map();
  let rowNums, colNums, rowHash, colHash;
  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    rowNums = [];
    colNums = [];

    for (let j = 0; j < grid[i].length; j++) {
      rowNums.push(grid[i][j]);
      colNums.push(grid[j][i]);
    }

    rowHash = rowNums.join(",");
    colHash = colNums.join(",");

    rows.set(rowHash, (rows.get(rowHash) || 0) + 1);
    columns.set(colHash, (columns.get(colHash) || 0) + 1);
  }

  for (const [row, value] of rows) {
    if (columns.has(row)) {
      ans += value * columns.get(row);
    }
  }

  return ans;
};
