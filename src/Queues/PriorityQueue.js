(function() {
  class Node {
    constructor(value, priority) {
      this.value = value;
      this.priority = priority;
    }
  }

  class PriorityQueue {
    constructor() {
      this.values = [];
    }

    heapify() {
      let index = this.values.length - 1;
      let element = this.values[index];

      while (index > 0) {
        let element = this.values[index];
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.values[parentIndex];

        if (element.priority > parent.priority) {
          break;
        } else {
          [this.values[index], this.values[parentIndex]] = [
            this.values[parentIndex],
            this.values[index]
          ];
          index = parentIndex;
        }
      }
      console.log(this.values);
    }

    enqueue(value, priority) {
      const node = new Node(value, priority);
      this.values.push(node);
      this.heapify();
    }

    dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return min;
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
          if (element.priority > leftChild.priority) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            (swap === null && rightChild.priority > element.priority) ||
            (swap !== null && this.values[swap].priority > rightChild.priority)
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
  }

  const pq = new PriorityQueue();
  pq.enqueue("Heart patient", 100);
  pq.enqueue("Someone", 10);
  pq.enqueue("Someone Else", 0);
  console.log(pq);
  console.log(pq.dequeue());
  console.log(pq);
})();
