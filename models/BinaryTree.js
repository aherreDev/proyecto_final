// ? Models
const Node = require('./Node')._default;
const Expression = require('./Expression')._default;

// ? Helpers
const { isInstanceOf } = require('../helpers/General');
const { printInfo } = require("../helpers/Console");

class Tree {
    preOrderText = [];
    postOrderText = [];

  constructor(expression) {
    if(!isInstanceOf(expression, Expression)) throw new Error('A  mathematical expressions is required');

    this.root = null;
    this.expression = expression;

    this.loadNodes();
  }

  loadNodes(){
      this.expression.toArray().forEach((c,i) =>{
          this.addRecursive(c);
      })

      printInfo('PreOrder', 'results:');
      this.preOrder();
      console.log(this.preOrderText.join(', ') + '\n');

      printInfo('PostOrder', 'results:');
      this.postOrder();
      console.log(this.postOrderText.join(', ') + '\n');
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

  preOrder(node = this.root, firstAttemp) {
    if(firstAttemp) this.preOrderText = [];

    if (!node) {
      return;
    }
    this.preOrderText.push(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node = this.root, firstAttemp) {
    if(firstAttemp) this.postOrderText = [];

    if (!node) {
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    this.postOrderText.push(node.value)
  }
}

module.exports._default = Tree;