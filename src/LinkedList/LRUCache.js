class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(key, value) {
    const node = new Node(key, value);
    if (!this.head) {
      this.head = node;
    } else {
      let ptr = this.head;
      while (ptr.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = node;
    }
  }

  pop() {
    if (!this.head) {
      console.log("Empty List");
      return;
    }
    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  unshift(key, value) {
    const node = new Node(key, value);
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  shift() {
    if (!this.head) {
      console.log("Nothing to shift");
      return;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  delete(key) {
    if (!this.head) {
      console.log("Empty List, nothing to be deleted");
      return;
    } else {
      let index = 0;
      let ptr = this.head;
      while (ptr.next && ptr.key !== key) {
        ptr = ptr.next;
        index++;
      }

      if (index === 0) {
        const value = this.shift();
        return value;
      } else {
        let ptr = this.head,
          ptr2 = null;

        while (ptr.next && ptr.key !== key) {
          ptr2 = ptr;
          ptr = ptr.next;
        }
        console.log(ptr, ptr2);
        ptr2.next = ptr.next;
        return ptr.value;
      }
    }
  }
}

class LRUCache {
  constructor() {
    this.list = new LinkedList();
  }

  get(key) {
    const value = this.list.delete(key);
    this.list.push(key, value);
    return value;
  }

  initialise(key, value) {
    this.list.push(key, value);
  }

  put(key, value) {
    this.list.delete(key);
    this.list.push(key, value);
  }
}

const lru = new LRUCache();
lru.initialise("a", 1);
lru.initialise("b", 2);
lru.initialise("c", 3);
lru.get("b");
lru.get("a");
