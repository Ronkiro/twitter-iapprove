const Tweet = require('./tweet')

module.exports = ({ database, twitterService }) => {
    const tweetModel = database.models.tweet
    return {
        tweetRepository: Tweet({ model: tweetModel, twitterService: twitterService }),
    }
}