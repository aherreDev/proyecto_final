const BinaryTree = require("../models/BinaryTree")._default;
const Expression = require("../models/Expression")._default;

// ? Helpers
const { isInstanceOf } = require('../helpers/General');
const { printSuccess } = require("../helpers/Console");

class Calculator {
  constructor(expression) {
    console.log(expression.constructor.name)
    if (!isInstanceOf(expression, Expression))
      throw new Error("A  mathematical expressions is required");

    this.expression = expression;
    this.binaryTree = new BinaryTree(this.expression);
    
    this.calculateResult();
  }

  calculateResult(){
    this.result = this.expression.getResults();
    printSuccess('El resultado es: ', this.result);
  }
}

module.exports._default = Calculator;
