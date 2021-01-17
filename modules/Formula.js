const Tree = require('../models/Tree')._default

class Formula {
    constructor(expression = ''){
        this.expression = expression;
        this.generateTree();
    }

    generateTree(){
        this.tree = new Tree(this.parseExpression());
    }
    parseExpression(){
        // TODO: Remove this and do the parse
        return this.expression;
    }
}

module.exports._default = Formula;