const Tweet = require('./tweet')

module.exports = ({ database, twitterService }) => {
    const tweetModel = database.models.tweet
    console.log("service", twitterService)
    return {
        tweetRepository: Tweet({ model: tweetModel, twitterService: twitterService }),
    }
}