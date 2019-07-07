(function() {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    constructor(val) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      const node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
      return this;
    }
    shift() {
      if (!this.head) return;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        const nextNode = this.head.next;
        nextNode.prev = null;
        this.head = nextNode;
      }

      this.length--;
      return this;
    }

    unshift(val) {
      const node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.length++;
      return this;
    }

    reverse() {
      if (!this.head) return;
      if (this.head === this.tail) {
        return this;
      } else {
        let ptr = this.head,
          ptr2 = null;
        while (ptr) {
          console.log("Node :=>", ptr.val);
          const nextNode = ptr.next;

          ptr.next = ptr2;
          ptr.prev = nextNode;

          ptr2 = ptr;
          ptr = nextNode;
          console.log("Changes :=>", ptr);
        }
        this.head = ptr2;
      }
      return this;
    }

    print() {
      if (!this.head) {
        console.log("EMPTY LIST");
      } else {
        const array = [];
        let ptr = this.head;
        while (ptr) {
          array.push(ptr.val);
          ptr = ptr.next;
        }
        console.log(array.join(" <-> "));
      }
    }
  }

  let list = new DoublyLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.print();
  list = list.reverse();
  list.print();
})();
