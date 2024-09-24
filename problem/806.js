/**
 * 1. Solving
 * 2. Algorithm anaysis
 *  - Time Complexity :
 *  - Space Complexity :
 *  - Data structure :
 * 3. Improve algorithm
 */

// 1. map alphabet and weight
// 2. iterate over "s" from 0 to the end,
//  - get arr at last index.
//  - calculate sum of weight in that array
//  - calculate ASCII code of character.
//  - if sum (ASCII + sum of weight) > 100 -> make new line and push the character
//  - if not, push it into currentIndex
// 3. return the all lines and the width of the last line.

const Aascii = "a".charCodeAt(0);
function getPixels(widths, s) {
  // 1. map alphabet and weight
  // it is also in ASCII

  const result = [[]];
  // 2. iterate over "s" from 0 to the end,
  let currentLineNumber = 0;
  for (const character of s) {
    const currentLine = result[currentLineNumber] ?? [];
    // calculate sum of currentLine
    const summation = currentLine.reduce((acc, curr) => {
      return acc + widths[curr.charCodeAt(0) - Aascii];
    }, 0);

    const currentASCII = character.charCodeAt(0);

    if (widths[currentASCII - Aascii] + summation <= 100) {
      result[currentLineNumber].push(character);
    } else {
      currentLineNumber++;
      result[currentLineNumber] = [character];
    }
  }

  const theWidthOfLineLine = result[result.length - 1].reduce((acc, curr) => {
    return acc + widths[curr.charCodeAt(0) - Aascii];
  }, 0);

  return [result.length, theWidthOfLineLine];
}
