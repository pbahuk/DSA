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

  print() {
    if (!this.top) {
      console.log('EMPTY STACK !!');
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
    top.next = null;
    return top.value;
  }

  size() {
    let length = 0;
    if (!this.top) {
      length = 0;
    } else {
      let ptr = this.top;
      while(ptr) {
        ptr = ptr.next;
        length++;
      }
    }
    return length;
  }
}

const stack = new Stack();
[10, 20, 30, 40, 50].forEach(element => stack.push(element));
stack.print();
console.log(stack.size());

