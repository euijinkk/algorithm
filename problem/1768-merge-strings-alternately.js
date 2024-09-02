function mergeAlternately(word1, word2) {
  // Initialize an empty string to store the result
  const res = "";

  // Determine the maximum length between the two words.
  const maxLength = Math.max(word1.length, word2.length);

  // Loop through each index up to the maximum length
  for (let i = 0; i < maxLength; i++) {
    // If the current index is within the bounds of word1, add the character to the result
    if (i < word1.length) {
      res = res + word1[i];
    }
    if (i < word2.length) {
      res = res + word2[i];
    }
  }

  // Return the final merged string
  return res;
}
