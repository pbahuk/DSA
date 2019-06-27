/**
 * Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(),
 *  isFull() and an additional operation getMin() which should return minimum element from the SpecialStack.
 *  All these operations of SpecialStack must be O(1). To implement SpecialStack,
 * you should only use standard Stack data structure and no other data structure like arrays, list, .. etc.
 */

class Stack {
  constructor() {
    this.top = -1;
    this.data = [];
  }

  isEmpty() {
    return this.top === -1;
  }

  peek() {
    return this.data[this.top];
  }

  push(value) {
    this.data.push(value);
    this.top++;
  }

  pop() {
    if (this.top === -1) {
      return null;
    }
    this.top--;
    return this.data.pop();
  }
}

 class MinStack extends Stack {
   constructor() {
    super();
    this.min = new Stack();
   }

   push(value) {
     if (super.isEmpty()) {
       super.push(value);
       this.min.push(value)
     } else {
        super.push(value);
        if (value < this.min.peek()) {
          this.min.push(value);
        } else {
          this.min.push(this.min.peek());
        }
     }
   }

   pop() {
      this.min.pop();
      return super.pop();
   }

   getMinValue() {
     return this.min.peek();
   }
 }

 const minStack = new MinStack();
 console.log(minStack);
 [10, 20, 30, 5, 40, 50].forEach(element =>  minStack.push(element));
 console.log(minStack.pop());
 console.log(minStack.getMinValue());
 console.log(minStack.pop());
 console.log(minStack.pop());
 console.log(minStack.pop());
 console.log(minStack.getMinValue());




