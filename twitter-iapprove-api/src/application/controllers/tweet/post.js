const { Tweet } = require('../../../domain/tweet')
module.exports = ({ tweetRepository }) => {
    // code for getting all the items
    const create = ({ body }) => {
        return Promise
            .resolve()
            .then(() => {
                const entity = Object.assign({}, body);
                const tweet = Tweet(entity)
                return tweetRepository.create(tweet)
            })
            .catch((error) => {
                throw new Error(error)
            })
    }

    return {
        create
    }
}