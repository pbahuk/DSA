class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function bucketSort(array) {
  const BUCKET_SIZE = 10;
  const buckets = new Array(BUCKET_SIZE);
  buckets.forEach((bucket, index) => bucket[index] = null);

  array.forEach(element => {
    const index = Math.floor(element/ BUCKET_SIZE);
    const node = new Node(element);

    if (!buckets[index]) {
      buckets[index] = node;
    } else {
      let ptr = buckets[index];
      let ptr2 = null;

      while(ptr && ptr.value < element) {
        ptr2 = ptr;
        ptr = ptr.next;
      }
      if (ptr === buckets[index]) {
        buckets[index] = node;
      } else {
        ptr2.next = node;
      }
      node.next = ptr;
    }
  });
  console.log(buckets);

  const result = buckets.reduce((acc, bucket) => {
    let ptr = bucket;
    const elements = [];
    while(ptr) {
      elements.push(ptr.value);
      ptr = ptr.next;
    }
    return acc.concat(elements);
  }, [])

  return result;
}

const array = [22, 45, 12, 8, 10, 6, 72, 81, 33, 18, 50, 14];
const sortedArray = bucketSort(array);
console.log('result', sortedArray);