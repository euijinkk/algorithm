function isSubsequence(s, t) {
  // set i as the matching character index for s
  let i = 0;

  // Loop through the string t
  for (character of t) {
    // is the character matches the value at index i of s, increment i by 1
    if (character === s[i]) {
      i++;
    }
  }

  // if i is equal to s.length, return true, otherwise return false
  return i === s.length;
}
