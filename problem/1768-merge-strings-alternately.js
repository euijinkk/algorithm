function mergeAlternately(word1, word2) {
  const maxLength = Math.max(word1.length, word2.length);
  const res = "";

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      res = res + word1[i];
    }
    if (i < word2.length) {
      res = res + word2[i];
    }
  }

  return res;
}
