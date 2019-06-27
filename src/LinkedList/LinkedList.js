class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traversal() {
    let ptr = this.head;
    while(ptr) {
      console.log(ptr.value, '->');
      ptr = ptr.next;
    }
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let ptr = this.head;
      while(ptr.next) {
        ptr = ptr.next;
      }

      ptr.next = node;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      let value = this.head.value;
      this.head = null;
      return value;
    } else {
      let ptr = this.head, ptr2= null;

      while(ptr.next) {
        ptr2 = ptr;
        ptr = ptr.next;
      }

      ptr2.next = null;
      return ptr.value;
    }
  }

  shift() {
    if (!this.head) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getLength() {
    let ptr = this.head;
    let length = 0;
    while (ptr) {
      ptr = ptr.next;
      length++;
    }
    return length;
  }

  insert(value, position) {
    const length = this.getLength();

    if (position < 0 || position > this.getLength()) {
      return;
    } else {
      if (position === 0) {
        this.unshift(value);
      } else if (position === length) {
        this.push(value);
      } else {
        const node = new Node(value);
        let index = 0;
        let ptr = this.head, ptr2= null;
        while(ptr && index < position) {
          ptr2 = ptr;
          ptr = ptr.next;
          index++;
        }

        ptr2.next = node;
        node.next = ptr;
      }
    }
  }

  reverse() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      return;
    } else {
      let ptr = this.head, ptr2 = null;
      while (ptr) {
        let next = ptr.next;
        console.log('Value ::::::', ptr.value);
        console.log(ptr2);
        ptr.next = ptr2;
        ptr2 = ptr;
        ptr = next;
      }
      this.head = ptr2;
      console.log('head :::::;',this.head);
    }
  }
}

const linkedList = new LinkedList();
[100, 5, 1, 7, 4].forEach(element => linkedList.push(element));
linkedList.traversal();
linkedList.reverse();
console.log('********************');
linkedList.traversal();

