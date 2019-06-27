class Node {
  constructor(value) {
    this.value = value;
    this.next = this;
  }
}

class CLList {
  constructor() {
    this.head = null;
  }

  print() {
    if (!this.head) {
      return;
    } else {
      let ptr = this.head;
      do {
        console.log(ptr.value);
        ptr = ptr.next;
      }while(ptr !== this.head)
    }
  }

  getLength() {
    let length = 0;
    if (!this.head) {
      length = 0;
    } else {
      let ptr = this.head;
      do {
        length++;
        ptr = ptr.next;
      } while(ptr !== this.head)
    }
    return length;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let ptr = this.head;
      while(ptr.next !== this.head) {
        ptr = ptr.next;
      }

      ptr.next = node;
      node.next = this.head;
    }
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let ptr = this.head;
      // finding the last node.
      while(ptr.next !== this.head) {
        ptr = ptr.next;
      }
      ptr.next = node;
      node.next = this.head;
      this.head = node;
    }
  }

  insert(value, index) {
    const length = this.getLength();
    if (index < 0) {
      index = 0;
    } else if (index > length - 1) {
      index = length - 1;
    }

    if (index === 0) {
      this.unshift(value);
    } else if (index === length - 1) {
      this.push(value);
    } else {
      const node = new Node(value);
      let ptr = this.head, ptr2 = null, i=0;
      while(ptr.next !== this.head && i<index) {
        ptr2 = ptr;
        ptr = ptr.next;
        i++;
      }
      ptr2.next = node;
      node.next = ptr;
    }
  }

  getIndex(value) {
    let ptr = this.head, index = 0, found=false;
     do {
      if (ptr.value === value) {
        found = true;
        break;
      }
      ptr = ptr.next;
      index++;
    }while(ptr !== this.head)
    return found ? index : -1;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
    const length = this.getLength();
    const index = this.getIndex(value);
    console.log(index);

    if (index === 0) {
      this.shift();
    } else if (index === length - 1) {
      this.pop();
    } else {
      
    }

  }
}


const CLL = new CLList();
[10, 20, 30, 40, 50].forEach(element => CLL.push(element));
console.log(CLL.getIndex(50));