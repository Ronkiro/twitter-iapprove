const { expect, use } = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const deleteUsecase = require('../../../src/application/controllers/tweet/delete')

use(sinonChai)

describe('Application -> Controllers -> Tweet -> Delete', () => {
    let useCase
    let method

    describe('Success path', () => {
        beforeEach(() => {
            const MockRepository = {
                destroy: () => { }
            }

            method = sinon.spy(MockRepository, 'destroy')
            useCase = deleteUsecase({
                tweetRepository: MockRepository
            })
        })

        it('should have called delete method of tweetRepository', async () => {
            await useCase.remove({ id: 1 })
            // eslint-disable-next-line
            expect(method).to.have.been.called
        })

        it('should have called deleteAll method of tweetRepository', async () => {
            await useCase.removeAll()
            // eslint-disable-next-line
            expect(method).to.have.been.called
        })
    })

    describe('Fail path', () => {
        beforeEach(() => {
            const MockRepository = {
                // eslint-disable-next-line prefer-promise-reject-errors
                destroy: () => Promise.reject('Error')
            }

            useCase = deleteUsecase({
                tweetRepository: MockRepository
            })
        })

        it('should display error on rejection -> remove', async () => {
            let error
            try {
                await useCase.remove({ id: 1 })
            } catch (e) {
                error = e.message
            }
            expect(error).to.equal('Error')
        })

        it('should display error on rejection -> removeAll', async () => {
            let error
            try {
                await useCase.removeAll()
            } catch (e) {
                error = e.message
            }
            expect(error).to.equal('Error')
        })
    })
})