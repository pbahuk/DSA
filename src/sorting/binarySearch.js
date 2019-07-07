function binarySearch(arr, val) {
  let beg = 0,
    end = arr.length - 1;

  while (beg <= end) {
    const mid = Math.floor((beg + end) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (val < arr[mid]) {
      end = mid - 1;
    } else {
      beg = mid + 1;
    }
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 7);
