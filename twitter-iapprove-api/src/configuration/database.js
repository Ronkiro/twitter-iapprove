const path = require('path')
const dotEnvPath = path.resolve('.env')

require('dotenv').config({ path: dotEnvPath })

module.exports = {
    development: {
        'dialect': 'sqlite',
        'database': 'iapprove',
        'storage': process.env.DATABASE_URL || ":memory:",
        'dialectOptions': { },
        'user': '',
        'passwd': '',
        // 'logging': true // true = log sql
    },
}