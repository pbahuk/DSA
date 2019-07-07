(function() {
  class BinaryHeap {
    constructor() {
      this.values = [41, 39, 33, 18, 27, 12];
    }

    heapify() {
      let index = this.values.length - 1;

      while (index > 0) {
        const element = this.values[index];
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.values[parentIndex];

        if (element <= parent) {
          break;
        } else {
          this.values[parentIndex] = element;
          this.values[index] = parent;

          index = parentIndex;
        }
      }
      console.log(this.values);
    }

    insert(value) {
      this.values.push(value);
      this.heapify();
    }

    sinkDown() {
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];

      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (element < leftChild) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && this.values[swap] < rightChild)
          ) {
            swap = rightChildIndex;
          }
        }

        if (!swap) {
          break;
        } else {
          [this.values[index], this.values[swap]] = [
            this.values[swap],
            this.values[index]
          ];
          index = swap;
        }
      }
    }

    extractMax() {
      // Swapping of values.
      const max = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }

      return max;
    }
  }

  let heap = new BinaryHeap();
  heap.insert(55);
  console.log("Here", heap);
  console.log(heap.extractMax());
  console.log(heap);
  console.log(heap.extractMax());
  console.log(heap);

  //        0   1   2   3    4   5
  // Data: [41, 39, 33, 18, 27, 12]
  // Insert 55;
})();
