function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }
  let slow = 0;
  let fast = slow + 1;
  let count = 1;

  while (fast < arr.length) {
    console.log(arr[slow], arr[fast]);
    if (arr[fast] === arr[slow]) {
      fast++;
    } else {
      // Moving the slow pointer to the new different value;
      slow = fast;
      fast++;
      count++;
    }
  }
  return count;
}

countUniqueValues([-2, -1, -1, 0, 1]);
