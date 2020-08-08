
const { expect, should } = require('chai')
const getUsecase = require('../../../src/application/controllers/tweet/get')

describe('Application -> Controllers -> Tweet -> Get', () => {
    let useCase
    const mockData = [{
        "isApproved": true,
        "tweetId": 1291900695570874400,
        "text": "花咲ひよりちゃんで一緒にシコシコできる方DMまでお願いします！\n#花咲ひより\n#連れオナ https://t.co/Bz09LuFdDR",
        "name": "しんご",
        "screenName": "singo_123123"
    }]

    describe('Success path', () => {
        beforeEach(() => {
            const MockRepository = {
                getAll: () => mockData,
                getAllFromHash: () => mockData
            }

            useCase = getUsecase({
                tweetRepository: MockRepository
            })
        })

        it('should display all the records on success', async () => {
            const lists = await useCase.all()
            expect(lists).to.equal(mockData)
        })

        it('should display all records from twitter API on success', async () => {
            const lists = await useCase.allFromHash('test');
            expect(lists).to.equal(mockData);
        })
    })

    describe('Fail path', () => {
        beforeEach(() => {
            const MockRepository = {
                // eslint-disable-next-line prefer-promise-reject-errors
                getAll: () => Promise.reject('Error'),
                getAllFromHash: () => Promise.reject('Error')
            }

            useCase = getUsecase({
                tweetRepository: MockRepository
            })
        })

        it('should display error on rejection', async () => {
            let error
            try {
                await useCase.all()
            } catch (e) {
                error = e.message
            }
            expect(error).to.equal('Error')
        })

        it('should display error on Twitter API rejection', async () => {
            let error
            try {
                await useCase.allFromHash()
            } catch (e) {
                error = e.message
            }
            expect(error).to.equal('Error')
        })
    })
})