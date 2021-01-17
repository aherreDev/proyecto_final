// ? Helpers
const { getParamByIndex } = require('./helpers/Console');

// ? Models
const Expression = require('./models/Expression')._default;

// ? Modules
const Calculator = require('./modules/Calculator')._default;

// ? CONSTANTS
const DEFAULT_EXPRESSION = '2+2';

// ? Main function
const main = () =>{
    // NOTE: You can update the math expression only updating the next line or passing a param on the CLI (see the readme.md)
    const input_expression = getParamByIndex(0) ? getParamByIndex(0) : DEFAULT_EXPRESSION;
    new Calculator(new Expression(input_expression));
}

// * Run the project code
main();