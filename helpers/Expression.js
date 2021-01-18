const { OPERATOS_WHITELIST } = require('../config/global');

module.exports = {
    isAllowedOperator: (o) => OPERATOS_WHITELIST.includes(o)
}