module.exports = ({ tweetRepository }) => {
    const all = () => {
        return Promise
            .resolve()
            .then(() =>
                tweetRepository.getAll({
                    attributes: [
                        'id', 'isApproved'
                    ]
                })
            )
            .catch(error => {
                throw new Error(error)
            })
    }

    const allFromHash = () => {
        return Promise.resolve()
            .then(
                () => tweetRepository.getAllFromHash({
                    attributes: [
                        'id', 'isApproved', 'createdAt', 'updatedAt'
                    ]
                })
            ).catch(error => {
                throw new Error(error)
            })
    }

    return {
        all,
        allFromHash
    }
}