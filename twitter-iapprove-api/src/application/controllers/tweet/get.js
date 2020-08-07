module.exports = ({ tweetRepository }) => {
    const all = () => {
        return Promise
            .resolve()
            .then(() =>
                tweetRepository.getAll({
                    attributes: [
                        'id', 'isApproved', 'tweetId'
                    ]
                })
            )
            .catch(error => {
                throw new Error(error)
            })
    }

    const allFromHash = (hash, resulttype="recent", count="100" ) => {
        return Promise.resolve()
            .then(
                () => tweetRepository.getAllFromHash(hash, resulttype, count)
            ).catch(error => {
                throw new Error(error)
            })
    }

    return {
        all,
        allFromHash
    }
}