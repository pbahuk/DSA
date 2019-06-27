function selectionSort(array) {
  let arr = [...array];
  let min;

  for (let i=0; i<arr.length; i++) {
      min = i;
      for (let j=i+1; j< arr.length; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      if (min !== i) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
      }
  }
  return arr;
}

var sortedArray = selectionSort([5, 1, 3, 2, 6, 9, 8]);
console.log(sortedArray);