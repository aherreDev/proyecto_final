const Node = require('./Node')._default;

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  add(value) {
    if (this.isEmpty()) {
      this.root = new Node(value);
      return;
    }

    let aux = this.root;

    while (aux) {
      if (value < aux.value) {
        if (aux.left) {
          aux = aux.left;
        } else {
          aux.left = new Node(value);
          return;
        }
      } else {
        if (aux.right) {
          aux = aux.right;
        } else {
          aux.right = new Node(value);
          return;
        }
      }
    }
  }

  addRecursive(value, node = this.root) {
    if (!node) {
      this.root = new Node(value);
      return;
    }

    if (value < node.value) {
      if (node.left) {
        return this.addRecursive(value, node.left);
      }
      node.left = new Node(value);
      return;
    } else {
      if (node.right) {
        return this.addRecursive(value, node.right);
      }
      node.right = new Node(value);
      return;
    }
  }

  preOrder(node = this.root) {
    if (!node) {
      return;
    }
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node = this.root) {
    if (!node) {
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
}

module.exports._default = Tree;