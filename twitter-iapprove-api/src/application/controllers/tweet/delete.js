
module.exports = ({ tweetRepository }) => {
    const remove = ({ id }) => {
        return Promise
            .resolve()
            .then(() =>
                tweetRepository.destroy({
                    where: { id }
                })
            )
            .catch((error) => {
                throw new Error(error)
            })
    }

    const removeAll = () => {
        return Promise
            .resolve()
            .then(() =>
                tweetRepository.destroy({
                    truncate: true
                })
            )
            .catch((error) => {
                throw new Error(error)
            })
    }

    return {
        remove,
        removeAll
    }
}