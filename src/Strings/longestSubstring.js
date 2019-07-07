function findLongestSubstring(str) {
  console.log("Coming in");
  let i = 0,
    j = 0,
    length = 0;
  let maxLength = 1;
  let map = {};

  while (j < str.length) {
    if (!map[str[j]]) {
      map[str[j]] = j;
      length++;
    } else {
      maxLength = Math.max(maxLength, length);
      length = 0;
      i = map[str[j]] + 1;
      map = {};
      j++;
    }
  }
  return maxLength;
}

findLongestSubstring("thisisawesome");
