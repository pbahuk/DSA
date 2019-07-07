(function() {
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const node = new Node(value);

      if (!this.root) {
        this.root = node;
        return this;
      } else {
        let ptr = this.root;

        while (true) {
          if (value <= ptr.value) {
            if (ptr.left) {
              ptr = ptr.left;
            } else {
              ptr.left = node;
              break;
            }
          } else {
            if (ptr.right) {
              ptr = ptr.right;
            } else {
              ptr.right = node;
              break;
            }
          }
        }
        return this;
      }
    }

    find(value) {
      if (!this.root) return;
      let ptr = this.root;

      while (ptr) {
        if (value === ptr.value) {
          return ptr;
        } else if (value < ptr.value) {
          ptr = ptr.left;
        } else {
          ptr = ptr.right;
        }
      }
    }

    BFS() {
      if (!this.root) return;
      const q = [],
        data = [];
      let node;

      // Pushing the first element.
      q.push(this.root);

      while (q.length) {
        node = q.shift();
        data.push(node.value);

        if (node.left) {
          q.push(node.left);
        }
        if (node.right) {
          q.push(node.right);
        }
      }
      console.log(data);
    }

    DFSPreOrder() {
      if (!this.root) return;
      let data = [];

      function preOrderHelper(node) {
        data.push(node.value);
        if (node.left) {
          preOrderHelper(node.left);
        }
        if (node.right) {
          preOrderHelper(node.right);
        }
      }

      preOrderHelper(this.root);
      console.log("Pre Order :=>", data);
    }

    DFSPostOrder() {
      if (!this.root) return;
      const data = [];

      function postOrderHelper(node) {
        if (node.left) {
          postOrderHelper(node.left);
        }
        if (node.right) {
          postOrderHelper(node.right);
        }
        data.push(node.value);
      }
      postOrderHelper(this.root);
      console.log("Post Order :=>", data);
    }

    DFSInOrder() {
      if (!this.root) return;
      let data = [];

      function inOrderHelper(node) {
        if (node.left) {
          inOrderHelper(node.left);
        }
        data.push(node.value);
        if (node.right) {
          inOrderHelper(node.right);
        }
      }

      inOrderHelper(this.root);
      console.log("IN Order :=>", data);
    }
  }

  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(7);
  tree.insert(11);
  tree.insert(16);
  tree.insert(100);
  console.log(tree);
  tree.BFS();
  tree.DFSPreOrder();
  tree.DFSPostOrder();
  tree.DFSInOrder();
})();

//      10
//   5     13
// 2  7  11   16
