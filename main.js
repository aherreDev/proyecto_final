require('./modules/Calculator');
const math = require('mathjs-expression-parser');

const expr = '1-2*2+5';

console.log('---------------')

console.log('Results: \r')
console.log(math.eval(expr, {}))

console.log('---------------')
