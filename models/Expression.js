const math = require('mathjs-expression-parser');

class Expresion {
    constructor(text='0+0', variables={}){
        this.text = text;
        this.variables = variables;
    }

    getResults(){
        const { text: expr, variables } = this
        return math.eval(expr, variables);
    }

    toArray(){
        return this.text.split('');
    }
}

module.exports._default = Expresion;