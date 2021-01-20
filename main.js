// ? Helpers
const { getParamByIndex } = require('./helpers/Console');

// ? Models
const Expression = require('./models/Expression')._default;

// ? Modules
const Calculator = require('./modules/Calculator')._default;

// ? Main function
const main = () =>{
    // NOTE: Uou can update the math expression only updating the next line or passing a param on the CLI (see the readme.md)
    const input_expression = getParamByIndex(0) ? getParamByIndex(0) : '2+2';
    new Calculator(new Expression(input_expression));
}

// * Run the project code
main();