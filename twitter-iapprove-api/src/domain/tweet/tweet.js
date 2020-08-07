const t = require('tcomb')
const { compose } = require('ramda')
const { cleanData } = require('../helper')

const Tweet = t.struct({
    id: t.maybe(t.String),
    isApproved: t.maybe(t.Boolean),
    createdAt: t.maybe(t.Date),
    updatedAt: t.maybe(t.Date)
})

module.exports = compose(
    cleanData,
    Tweet
)