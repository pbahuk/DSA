function maxSubarraySum(arr, count) {
  if (count > arr.length) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += arr[i];
  }
  let maxWindowSum = sum;
  console.log(sum);

  for (let i = 0, j = count; j < arr.length; i++, j++) {
    sum = sum - arr[i] + arr[j];
    console.log("Subtracting", arr[i], "Adding", arr[j]);
    console.log("Comparing :", maxWindowSum, sum, i, j);
    maxWindowSum = Math.max(maxWindowSum, sum);
  }
  return maxWindowSum;
}

maxSubarraySum([900, 100, 200, 300, 400], 2);
