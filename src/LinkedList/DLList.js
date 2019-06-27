class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DLList {
  constructor() {
    this.head = null;
  }

  print() {
    console.log('*********************************');
    let ptr = this.head;
    while(ptr) {
      console.log(ptr.value);
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
      node.prev = ptr;
    }
  }

  pop() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    } else {
      let ptr = this.head;
      while(ptr.next) {
        ptr = ptr.next;
      }
      // Last Node;
      ptr.prev.next = null;
      return ptr.value;
    }
  }

  getLength() {
    let length = 0;
    if (!this.head) {
      length = 0;
    } else {
      let ptr = this.head;
      while(ptr) {
        ptr = ptr.next;
        length++;
      }
    }
    return length;
  }

  shift() {
    if (!this.head) {
      return;
    }
    let ptr = this.head;
    this.head = this.head.next;
    ptr.next.prev = ptr.prev;
    // Removing the links.
    ptr.next = null;
    ptr.prev = null;
  }

  remove(value) {
    if (!this.head) {
      return;
    } else {
      let ptr = this.head, index = 0, length = this.getLength();
      while(ptr) {
        if (ptr.value === value) {
          break;
        }
        ptr = ptr.next;
        index++;
      }

      if (index === 0) {
        this.shift();
      } else if (index === length - 1) {
        this.pop();
      } else {
        ptr.next.prev = ptr.prev;
        ptr.prev.next = ptr.next;
        ptr.next = null;
        ptr.prev = null;
      }
    }
  }
}

const DLL = new DLList();
[10, 20, 30, 40, 50].forEach(element => DLL.push(element));
console.log(DLL.getLength());
DLL.print();
DLL.remove(30);
DLL.print();