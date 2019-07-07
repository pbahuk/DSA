function sameFrequency(num1, num2) {
  const map = {};
  while (num1) {
    const digit = num1 % 10;
    map[digit] = map[digit] ? map[digit] + 1 : 1;
    num1 = Math.floor(num1 / 10);
  }
  console.log(map);

  while (num2) {
    const digit = num2 % 10;
    if (!map[digit]) {
      return false;
    }
    map[digit] = map[digit] - 1;
    num2 = Math.floor(num2 / 10);
  }
  console.log(map);
  return true;
}

sameFrequency(182, 281);
