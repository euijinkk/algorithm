/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// 1. declare and implement findColor function
// 2. check if findColor(c1) findColor(c2) are equal

// column - odd = from white , even = from black
// a = 1 => odd, b = 2 => event

// row
// if column is odd ->
// if row is odd -> white,
// if row is even -> black

// if first is even -> odd -> black, even -> white
// if row is odd -> black,
// if row is even -> white

// 3274
function findColor(coordinate) {
  const column = coordinate[0];
  const row = Number(coordinate[1]);

  const columnNumber = column.charCodeAt(0) - "a".charCodeAt(0) + 1;

  if (columnNumber % 2 !== 0) {
    if (row % 2 !== 0) {
      return "white";
    }
    return "black";
  }

  if (row % 2 !== 0) {
    return "black";
  }
  return "white";
}

// TC: O(1)
// SC: O(1)
function checkTwoChessboards(coordinate1, coordinate2) {
  return findColor(coordinate1) === findColor(coordinate2);
}
