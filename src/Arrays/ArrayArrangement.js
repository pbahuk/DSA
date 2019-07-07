function arrangement(arr) {
  const result = Array.from({ length: arr.length }, (_, i) => i);
  console.log(result);
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]];
  }
}

let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
arrangement(arr);
