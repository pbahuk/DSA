function bubbleSort(array) {
  let arr = [...array];
  let swapped = true;

  for (let i=0; i< arr.length && swapped; i++) {
      swapped = false;
      for(let j=0; j< arr.length - 1 - i; j++) {
          console.log(arr[j], arr[j+ 1]);
          if (arr[j] > arr[j + 1]) {
              swapped = true;
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
      }
      console.log(swapped);
  }
  return arr;
}

let arr = [5, 1,  2, 3, 4];
let sortedArr = bubbleSort(arr);
console.log(sortedArr, arr);