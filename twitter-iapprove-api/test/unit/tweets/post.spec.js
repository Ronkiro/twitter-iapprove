const { expect } = require('chai')
const postUsecase = require('../../../src/application/controllers/tweet/post')

describe('Application -> Controllers -> Tweet -> Post', () => {
  let useCase

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        create: (data) => data
      }

      useCase = postUsecase({
        tweetRepository: MockRepository
      })
    })

    it('should create the records and list the data and append the default tweet', async () => {
      const body = {
        "isApproved": true,
        "tweetId": 1291900695570874400,
        "text": "花咲ひよりちゃんで一緒にシコシコできる方DMまでお願いします！\n#花咲ひより\n#連れオナ https://t.co/Bz09LuFdDR",
        "name": "しんご",
        "screenName": "singo_123123"
      }
      const lists = await useCase.create({
        body
      })
      expect(lists.isApproved).to.equal(body.isApproved)
      expect(lists.tweetId).to.equal(body.tweetId)
      expect(lists.text).to.equal(body.text)
      expect(lists.name).to.equal(body.name)
      expect(lists.screenName).to.equal(body.screenName)
    })

    

    
  })

  describe('Fail path', () => {
    const body = {
      "isApproved": true,
      "tweetId": 1291900695570874400,
      "text": "花咲ひよりちゃんで一緒にシコシコできる方DMまでお願いします！\n#花咲ひより\n#連れオナ https://t.co/Bz09LuFdDR",
      "screenName": "singo_123123"
    }

    beforeEach(() => {
      const MockRepository = {
        // eslint-disable-next-line prefer-promise-reject-errors
        create: () => Promise.reject('Error')
      }

      useCase = postUsecase({
        tweetRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      try {
        await useCase.create({ body })
      } catch (e) {
        error = e.message
      }
      expect(error).to.equal('Error')
    })
  })
})