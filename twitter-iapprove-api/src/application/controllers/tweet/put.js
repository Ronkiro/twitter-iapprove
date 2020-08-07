const { Tweet } = require('../../../domain/tweet')

/**
  * function for getter user.
  */
module.exports = ({ tweetRepository }) => {
    // code for getting all the items
    const update = ({ id, body }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const tweet = Tweet(body)
                await tweetRepository.update(tweet, {
                    where: { id }
                })

                resolve(tweet)
            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        update
    }
}