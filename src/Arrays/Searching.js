function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    let mid = (start + end) / 2;

    if (arr[mid] === element) {
      index = mid;
      break;
    } else if (arr[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return index;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var index = findElement(arr, 3);
console.log(index);
