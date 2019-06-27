class Node {
  constructor(value) {
    this.value = value;
    this.endOfWord = false;
    this.children = Array.from({length: 26}, () => null);
  }
}


class Trie {
  constructor() {
    this.root = new Node('');
  }

  insert(str) {
    let ptr = this.root;

    for (let i=0; i<str.length; i++) {
      const index = str.charCodeAt(i) - 97;
      if (ptr.children[index]) {
        ptr = ptr.children[index];
      } else {
        const node = new Node(str[i]);
        ptr.children[index] = node;
        ptr = node;
      }
    }
    ptr.endOfWord = true;
  }

  print() {
    let ptr = this.root;

    while(ptr) {
      console.log(ptr.value);
      for (let i=0; i<ptr.children; i++) {
        if (ptr.children[i]) {
          ptr = ptr.children[i];
        }
      }
    }
  }

  search(str) {
    let ptr = this.root;

    for (let i=0; i<str.length; i++) {
      const index = str.charCodeAt(i) - 97;
      if (!ptr.children[index]) {
        return false;
      } else if (ptr.value === str[i]) {
        if (i === str.length -1 && !ptr.endOfWord) {
          return false;
        } else {
          ptr = ptr.children[index];
        }
      }
    }
    return true;
  }
}

const trie = new Trie();
trie.insert('hello');
console.log(trie);
trie.print();
console.log(trie.search('hello'));
