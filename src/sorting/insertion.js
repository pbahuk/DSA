function insertionSort(array) {
  let arr = [...array];

  for (let i=1; i < arr.length; i++) {
      let currentValue = arr[i];

      for (var j = i-1; j>=0 && arr[j] > currentValue; j--) {
          arr[j+1] = arr[j];
      }
      arr[j + 1] = currentValue;
  }
  return arr;
}

// var sortedArr = insertionSort([5, 1, 3, 2, 6, 9, 8]);
// console.log(sortedArr);

export default insertionSort;

