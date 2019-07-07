/**
 * HardCore JavaScript solution. Functional programming.
 */
Array.prototype.rotate = function(d) {
  return this.push(...this.splice(0, d));
};

let arr = [1, 2, 3, 4, 5];
arr.rotate(3);
console.log(arr);

/**
 * function: rotate
 * Doing single rotation d times.
 */
function rotate(arr, d) {
  for (let i = 0; i < d; i++) {
    const element = arr[0];
    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = element;
  }
}

arr = [1, 2, 3, 4, 5];
rotate(arr, 3);
console.log(arr);

/**
 * Extension of part 2: using gcd
 */
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function gcdRotate(arr, d) {
  let n = arr.length;
  let g_c_d = gcd(arr.length, d);
  for (let i = 0; i < g_c_d; i++) {
    let temp = arr[i];
    let j = i;

    while (1) {
      let k = j + d;
      if (k >= n) {
        k = k - n;
      }
      if (k === i) {
        break;
      }
      arr[j] = arr[k];

      j = k;
    }
    arr[j] = temp;
  }
}

arr = [1, 2, 3, 4, 5];
gcdRotate(arr, 3);
console.log(arr);

/**
 * Reversal through individual arrays.
 * arr: [1, 2, 3, 4, 5, 6, 7]
 * Reverse A: [2, 1]
 * Reverse B: [7, 6, 5, 4, 3]
 * Combined: [2, 1, 7, 6, 5, 4, 3], Reverse: [3, 4, 5, 6, 7, 1, 2]
 */
Array.prototype.reversalRotate = function(d) {
  function reverse(arr, start, end) {
    for (let i = start, j = end; i <= end && i < j; i++, j--) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  reverse(this, 0, d - 1);
  reverse(this, d, this.length - 1);
  reverse(this, 0, arr.length - 1);
  return this;
};

arr = [1, 2, 3, 4, 5, 6, 7];
arr.reversalRotate(2);
console.log(arr);

/**
 * For Searching in a sorted rotated array, find the starting of rotation
 * by using a recursive algorithm and then call binray search by calling BinarySearch on individual parts of array.
 */

function findPair(arr, K) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      index = i;
      break;
    }
  }
  console.log(index);
  let n = arr.length;
  let left = index + 1,
    right = index;
  while (left !== right) {
    if (arr[left] + arr[right] === K) {
      console.log(arr[left], arr[right]);
      break;
    } else if (arr[left] + arr[right] < K) {
      left = (left + 1) % n;
    } else {
      right = (n + right - 1) % n;
    }
  }
}

arr = [1, 2, 3, 4, 5, 6, 7];
arr.reversalRotate(2);
findPair(arr, 5);
