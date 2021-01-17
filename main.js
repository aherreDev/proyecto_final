const Colors = require('colors');

// ? Helpers
const { getParamByIndex, printSuccess } = require('./helpers/Console');

console.log( printSuccess('Your result is: ', getParamByIndex(0)) );