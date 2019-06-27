function merge(arr1, arr2) {
  let result = [];
  let i = 0, j =0;

  while(i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
          result.push(arr1[i]);
          i++;
      } else {
          result.push(arr2[j]);
          j++;
      }
  }
  while(i<arr1.length) {
      result.push(arr1[i]);
      i++;
  }
  while(j<arr2.length) {

      result.push(arr2[j]);
      j++;
  }
  return result;
}

function mergeSort(array) {
  if (array.length === 1) {
      return array;
  }

  let mid = Math.floor(array.length / 2);

  console.log(mid, array.slice(0, mid), array.slice(mid));
  let leftSorted = mergeSort(array.slice(0, mid));
  let rightSorted = mergeSort(array.slice(mid));

  console.log('Merging :::::::',leftSorted, rightSorted);
  return merge(leftSorted, rightSorted);
}


var array = [5, 1, 3, 2, 6, 9, 8];
var sortedArr = mergeSort([5, 1, 3, 2, 6, 9, 8]);
console.log(sortedArr);
