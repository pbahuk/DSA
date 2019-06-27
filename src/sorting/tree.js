class Node {
  constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
      }
}

  class BinaryTree {
      constructor() {
          this.root = null;
      }

      insert(value) {
          const node = new Node(value);
          if (!this.root) {
              this.root = node;
          } else {
              let ptr = this.root;

              while(true) {
                  if (ptr.value <= value) {
                          if (ptr.left) {
                                  ptr = ptr.left;
                          } else {
                                  ptr.left = node;
                                  break;
                          }
                  } else if(ptr.value > value) {
                      if (ptr.right) {
                                  ptr = ptr.right;
                          } else {
                                  ptr.right = node;
                                  break;
                          }
                  }
              }
          }
      }

      inorder() {
          function inorderTraversal(ptr) {
              if (!ptr) {
                  return;
              }

              inorderTraversal(ptr.left);
              console.log(ptr.value);
              inorderTraversal(ptr.right);
          }

          inorderTraversal(this.root);
      }
  }

  var binrayTree = new BinaryTree();
  console.log('Coming here');
  var array = [5, 1, 3, 2, 6, 9, 8];
  array.forEach(element => {
      binrayTree.insert(element);
  });
  console.log(binrayTree);
  binrayTree.inorder();