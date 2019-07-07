function intersection(arr1, arr2) {
  console.log(arr1, arr2);
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      console.log("Match found:", arr1[i], arr2[j]);
      i++;
      j++;
    }
  }
}

arr1 = [21, 22, 34, 35, 41];
arr2 = [11, 21, 34, 45, 61];
result = intersection(arr1, arr2);
console.log(result);
