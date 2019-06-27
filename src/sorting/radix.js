function getDigit(num, index) {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function getMaxdigits(array) {
  let max = array.reduce((acc, element) => acc > element ? acc : element);

  let digits = 0;
  while(max) {
    max = Number.parseInt(max / 10);
    digits++;
  }
  return digits;
}

function radixSort(array) {
  const BUCKET_SIZE = 10;
  const digits = getMaxdigits(array);

  for (let i=0; i< digits; i++) {
    let buckets = Array.from({length: BUCKET_SIZE}, () => []);

    for (let j =0; j< array.length; j++) {
      const index = getDigit(array[j], i);
      buckets[index].push(array[j]);
    }

    // Retrieving the array back.
    array = buckets.reduce((acc, bucket) => {
      return acc.concat(bucket);
    }, []);
  }
  return array;
}

const array = [10, 15, 1, 60, 5, 100, 25, 50];
const sortedArray = radixSort(array);
console.log('result', sortedArray);