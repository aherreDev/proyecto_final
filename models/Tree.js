const _ = require('lodash');

const Node = require("./Node")._default;

const { isAllowedOperator } = require('../helpers/Expression');

class Tree {
  constructor(root, left, right) {
    this.root = Node(root, null, null, null);
    this.left = this.parseExpressionToNodes(left, true);
    this.right = this.parseExpressionToNodes(right, false);
    console.log(this.right.right);
  }

  // ? Public
  parseExpressionToNodes(expression, isLeft){
    // ? Data prepocesing
    if(expression.length === 1) return Node(expression, null, null, null);
    if(isLeft) expression = _.reverse( expression.split('') ).join('')

    let lastNode = null
    expression.split('').forEach((c, i) =>{
      let fatherNode = lastNode ? null : null;
      if(isAllowedOperator(c)){
        lastNode.right = Node(c, fatherNode, null, null);
      }else {
        if(!lastNode) {
          lastNode = Node(c, fatherNode, null, null);
          return false;
        }
        if(lastNode.left) {
          lastNode.right = Node(c, fatherNode, null, null);
        }else {
          lastNode.left = Node(c, fatherNode, null, null);
        }
      }
    });
    return lastNode;
  }

  // ? Private
  _setNodes(nodesArray){
    [
      'contenido *',
      ['contenido','izquierda', 'derecha'],
      'derecha'
    ]
  }
}

module.exports._default = Tree;
