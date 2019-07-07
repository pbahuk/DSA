function findMajority(arr) {
  let majIndex = 0;
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[majIndex]) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majIndex = i;
        count = 1;
      }
    }
  }

  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[majIndex]) {
      count++;
      if (count > arr.length / 2) {
        break;
      }
    }
  }

  return arr[majIndex];
}

let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(findMajority(arr));
