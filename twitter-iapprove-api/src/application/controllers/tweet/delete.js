
module.exports = ({ tweetRepository }) => {
    // code for getting all the items
    const remove = ({ id }) => {
        return Promise
            .resolve()
            .then(() =>
                tweetRepository.update({
                    isDeleted: 1
                }, {
                    where: { id }
                })
            )
            .catch((error) => {
                throw new Error(error)
            })
    }

    return {
        remove
    }
}