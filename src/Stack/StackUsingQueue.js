/***
 * Queue: Array for stack.
 */
class Queue {
  constructor() {
    this.front = -1;
    this.rear = -1;
    this.data = [];
  }

  print() {
    if (this.front === -1) {
      console.log('EMPTY QUEUE !!');
      return;
    }
    for (let i=this.front; i<=this.rear; i++) {
      console.log(this.data[i]);
    }
  }

  isEmpty() {
    return this.front === -1 && this.rear == -1;
  }

  enqueue(value) {
    if (this.front === -1) {
      this.front++;
      this.rear++;
    } else {
      this.rear++
    }
    this.data[this.rear] = value;
  }

  dequeue() {
    let value;
    if (this.front === -1 || this.rear === -1) {
      console.log('EMPTY QUEUE');
      return;
    } else if (this.front === this.rear) {
      value = this.data.shift();
      this.front = -1;
      this.rear = -1;
    } else {
      value = this.data.shift();
      this.front++;
    }
    return value;
  }
}

class Stack {
  constructor() {
    // q1: Main holder of values.
    this.q1 = new Queue();

    // q2: Retriever of values.
    this.q2 = new Queue();
    this.top = -1;
  }

  printState() {
    console.log(this.top, this.q1, this.q2);
  }

  push(value) {
    this.q1.enqueue(value);
    this.top++;
  }

  pop() {
    if (this.top === -1) {
      console.log('EMPTY STACK');
      return;
    }

    // Finding tbe value and pushing it to the retriever array.
    for(let i=0; i<this.top; i++) {
      this.q2.enqueue(this.q1.dequeue());
    }
    const value = this.q1.dequeue();
    while(!this.q2.isEmpty()) {
      this.q1.enqueue(this.q2.dequeue());
    }
    this.top--;
    return value;
  }
}

const stack = new Stack();
[10, 20, 30, 40, 50].forEach(element => stack.push(element));
console.log(stack.printState());
console.log(stack.pop());
console.log(stack.printState());





