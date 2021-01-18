const Colors = require('colors');

// ? Helpers
const { getParamByIndex, printSuccess } = require('./helpers/Console');

// ? Modules
const Formula = require('./modules/Formula')._default;

const expressionParam = getParamByIndex(0);
const formula = new Formula(expressionParam);

printSuccess('The result was:', formula.result);
