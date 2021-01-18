const Tree = require('../models/Tree')._default
const { printError } = require('../helpers/Console')

const { OPERATOS_WHITELIST, OPERATOS_BLACKLIST } = require('../config/global');

class Formula {
    // ? Attributes
    splitExpression = [];
    tree = null;
    result = 6;

    // ? Constructor
    constructor(expression = '') {
        this.expression = expression;
        if(!this.generateTree()) printError('Invalid expression', 'please try again');
    }

    ////////////
    // PUBLIC
    ///////////
    generateTree() {
        const parsedExpression = this.parseExpression();
        if(!parsedExpression) return false;

        this.tree = new Tree(...this.splitExpression);
        console.log(this);
        return this.tree
    }

    parseExpression() {
        // TODO: Remove this and do the parse
        if(!this._validExpression(this.expression)) return false

        this._getRoot(this.expression);
        return this.splitExpression.length > 0;
    }

    ////////////
    // PRIVATE
    ///////////
    _validExpression(expression){
        let isValid = true;
        OPERATOS_BLACKLIST.forEach(operator => {
            if(expression.includes(operator)) isValid = false;
        })
        return isValid;
    }

    _getRoot(expression){
        // ? Find valid operators
        let operatorsPosition = [];
        expression.split('').forEach((c, i) => {
            if(OPERATOS_WHITELIST.includes(c)) operatorsPosition.push(i)
        });

        // ? Get middle operator information
        let totalOperators = operatorsPosition.length;
        let middlePosition = totalOperators % 2 == 0
            ? totalOperators / 2
            : Math.round(totalOperators / 2)
        let middleOperator = expression[middlePosition]

        // ? Get left and right branches
        let left = expression.slice(0, middlePosition);
        let right = expression.slice(middlePosition + 1, expression.length);
        
        // ? Update splitExpression attributes
        this.splitExpression.push(middleOperator);
        this.splitExpression = this.splitExpression.concat(left, right);
    }
}

module.exports._default = Formula;