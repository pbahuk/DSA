(function() {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    enqueue(value) {
      const node = new Node(value);

      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
      this.length++;
    }

    dequeue() {
      if (!this.first) return;
      const node = this.first;

      if (this.first === this.last) {
        this.first = null;
        this.last = null;
        node.next = null;
      } else {
        this.first = node.next;
        node.next = null;
      }
      this.length--;
      return node;
    }
  }

  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);

  console.log(q);
  console.log(q.dequeue());
  console.log(q.dequeue());
  console.log(q);
})();
