class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  print() {
    if (!this.top) {
      console.log('EMPTY STACK');
      return;
    }

    let ptr = this.top;
    while(ptr) {
      console.log(ptr.value);
      ptr = ptr.next;
    }
  }

  push(value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (!this.top) {
      console.log('EMPTY STACK !!');
      return;
    }
    const top = this.top;
    this.top = this.top.next;
    return top.value;
  }
}


class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  printState() {
    console.log('STACK 1:', this.s1, 'STACK 2:', this.s2);
  }

  print() {
    console.log('*');
    this.s1.print();
  }

  enqueue(value) {
    const s1 = this.s1, s2 = this.s2;
    while(!s1.isEmpty()) {
      s2.push(s1.pop())
    }
    s1.push(value);
    while(!s2.isEmpty()) {
      s1.push(s2.pop());
    }
  }

  dequeue() {
    return this.s1.pop();
  }
}

const queue = new Queue();
[10, 20, 30, 40, 50].forEach(element => queue.enqueue(element));
console.log(queue.printState());
queue.print();
console.log(queue.dequeue());
queue.print();
