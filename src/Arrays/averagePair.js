function averagePair(arr, value) {
  let beg = 0,
    end = arr.length - 1;

  while (beg < end) {
    const average = (arr[beg] + arr[end]) / 2;
    if (average === value) {
      return true;
    } else if (average < value) {
      beg++;
    } else {
      end--;
    }
  }
  return false;
}

averagePair([-1, 0, 3, 4, 5, 6], 4.1);
