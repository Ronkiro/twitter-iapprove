const container = require('../../../container'); // we have to get the DI
const { get, post, put, remove } = require('../../controllers/tweet');

module.exports = () => {
  const { repository: {
    tweetRepository
  } } = container.cradle

  const getUseCase = get({ tweetRepository })
  const postUseCase = post({ tweetRepository })
  const putUseCase = put({ tweetRepository })
  const deleteUseCase = remove({ tweetRepository })

  return {
    getUseCase,
    postUseCase,
    putUseCase,
    deleteUseCase
  }
}