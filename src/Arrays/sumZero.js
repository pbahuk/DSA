function sumZero(arr) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    const sum = arr[i] + arr[j];
    if (sum === 0) {
      console.log(arr[i], arr[j]);
      i++;
      j--;
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
}

sumZero([-10, -5, -4, -3, -2, -1, 0, 1, 2, 4]);
