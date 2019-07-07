function shellSort(array) {
  let arr = [...array];
  let n = arr.length;

  for (let gap = Math.floor(n / 2); gap >= 1; gap = Math.floor(gap / 2)) {
    console.log("gap", gap);
    for (let i = 0; i + gap < arr.length; i++) {
      console.log("Comparing", arr[i], arr[i + gap]);
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        console.log(arr);
      }
    }
  }

  return arr;
}

// var array = [10, 7, 6, 3, 5, 1, 2, 4, 8, 9];
// var array = [77, 62, 14, 9, 30, 21, 80, 25, 70, 55];
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log("Unsorted array", array);
var sortedList = shellSort(array);
console.log(sortedList);
