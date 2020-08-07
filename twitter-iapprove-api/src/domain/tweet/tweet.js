const t = require('tcomb')
const { compose } = require('ramda')
const { cleanData } = require('../helper')

const Tweet = t.struct({
    id: t.maybe(t.String),
    isApproved: t.maybe(t.Boolean),
    tweetId: t.maybe(t.Integer),
    text: t.maybe(t.String),
    name: t.maybe(t.String),
    screenName: t.maybe(t.String),
    createdAt: t.maybe(t.Date),
    updatedAt: t.maybe(t.Date)
})

module.exports = compose(
    cleanData,
    Tweet
)