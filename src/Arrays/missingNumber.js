function missing(arr) {
  let sum = 0;
  let sumN = arr.length * ((arr.length + 1) / 2);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sumN - sum;
}

function duplicate(arr) {
  let sum = 0;
  let sumN = arr.length * ((arr.length + 1) / 2);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sumN, sum);

  let diff = sum - sumN;
  diff = diff < 0 ? arr.length + diff : diff + arr.length - diff;
  return diff;
}

arr = Array.from({ length: 100 }, (_, index) => index + 1);
arr[88] = 0; // Missing number: 89.
console.log(missing(arr));

function duplicates(arr) {
  let set = new Set();
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      console.log("Set has", arr[i]);
      results.push(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }
  return results;
}

function duplicatesModified(arr) {
  let set = new Set(arr);
  return [...set];
}

function repeated(arr) {}

// Configuring the array.
arr[0] = 100;
arr[88] = 89;
console.log("Duplicate", duplicate(arr));
