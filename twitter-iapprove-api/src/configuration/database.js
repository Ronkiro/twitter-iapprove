const path = require('path')
const dotEnvPath = path.resolve('.env')

require('dotenv').config({ path: dotEnvPath })

module.exports = {
    development: {
        'dialect': 'sqlite',
        'database': 'iapprove',
        'storage': process.env.DATABASE_URL || ":memory:",
        'dialectOptions': {},
        'user': '',
        'passwd': '',
        // 'logging': true // true = log sql
    },
    test: {
        'dialect': 'sqlite',
        'database': 'iapprove',
        'storage': process.env.DATABASE_URL || ":memory:",
        'dialectOptions': {},
        'user': '',
        'passwd': '',
        logging: false,
    },
    production: {
        'dialect': 'sqlite',
        'database': 'iapprove',
        'storage': process.env.DATABASE_URL || ":memory:",
        'dialectOptions': {},
        'user': '',
        'passwd': '',
        logging: true,
        'ssl': true,
        'dialectOptions': {
            'ssl': {
                'require': true
            }
        }
    }

}