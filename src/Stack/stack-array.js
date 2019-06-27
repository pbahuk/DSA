class Stack {
  constructor() {
    this.top = -1;
    this.data = [];
  }

  print() {
    if (this.top === -1) {
      console.log('Stack is empty');
      return;
    }
    for (let i=this.top; i>=0; i--) {
      console.log(this.data[i]);
    }
  }

  size() {
    return this.top + 1;
  }

  push(value) {
    this.data.push(value);
    this.top++;
  }

  getTop() {
    if (this.top === -1) {
      return null;
    }
    return this.data[this.top];
  }

  pop() {
    if (this.top === -1) {
      return null;
    }
    this.top--;
    return this.data.pop();
  }
}

const stack = new Stack();
[].forEach(element => stack.push(element));

console.log(stack, stack.size());
console.log(stack.pop());
console.log(stack, stack.size());