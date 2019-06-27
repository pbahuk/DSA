import insertionSort from './insertion';


function bucketSort(array) {
  // min: 6, max: 81, Buckets: 10
  const BUCKET_SIZE = 10;
  const buckets = new Array(10);
  for (let i=0; i< buckets.length; i++) {
    buckets[i] = [];
  }

  array.forEach(element => {
    const index = Math.floor(element / BUCKET_SIZE);

    buckets[index].push(element);
    buckets[index] = insertionSort(buckets[index]);
  });
  console.log('buckets: ', buckets);

  const result = buckets.reduce((acc, element) => {
    return acc.concat(element)
  }, []);
  return result;
}

const array = [22, 45, 12, 8, 10, 6, 72, 81, 33, 18, 50, 14];
const sortedArray = bucketSort(array);
console.log('result', sortedArray);