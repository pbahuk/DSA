function isPallindrome(str) {
  console.log("String :", str, str[0], str[str.length - 1]);
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPallindrome(str.substr(1, str.length - 2));
}

isPallindrome("amanaplanacanalpanama");
