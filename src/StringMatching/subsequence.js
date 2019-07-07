function isSubsequence(str1, str2) {
  for (var i = 0, j = 0; i < str1.length && j < str2.length; ) {
    console.log(str1[i], str2[j]);
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  if (i < str1.length) {
    return false;
  }
  return true;
}

isSubsequence("hello", "hello world");
