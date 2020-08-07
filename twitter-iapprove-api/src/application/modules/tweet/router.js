const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
    getUseCase,
    postUseCase,
    putUseCase,
    deleteUseCase,
    logger,
    response: { Success, Fail }
}) => {
    const router = Router()
    /**
   * @swagger
   * /tweets:
   *   get:
   *     tags:
   *       - Tweets
   *     description: Returns a list of Tweets
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: An array of Tweets
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/tweet'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
    router
        .get('/', (req, res) => {
            getUseCase
                .all(req, res)
                .then(data => {
                    res.status(Status.OK).json(Success(data))
                })
                .catch((error) => {
                    logger.error(error) // we still need to log every error for debugging
                    res.status(Status.BAD_REQUEST).json(
                        Fail(error.message))
                })
        })

    router.get('/:hash', (req, res) => {
        const query = require('url').parse(req.url, true).query;
        getUseCase
            .allFromHash(req.params.hash,
                query.resulttype,
                query.count)
            .then(data => {
                res.status(Status.OK).json(Success(data))
            })
            .catch((error) => {
                logger.error(error) // we still need to log every error for debugging
                res.status(Status.BAD_REQUEST).json(
                    Fail(error.message))
            })
    })

    /**
   * @swagger
   * /tweet:
   *   post:
   *     tags:
   *       - Tweet
   *     description: Create new tweet
   *     security:
   *       - JWT: []
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Tweet's Entity
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/tweet'
   *     responses:
   *       200:
   *         description: Successfully Created
   *         schema:
   *           $ref: '#/definitions/tweet'
   *       401:
   *         $ref: '#/responses/Unauthorized'
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
    router
        .post('/', (req, res) => {
            postUseCase
                .create({ body: req.body })
                .then(data => {
                    res.status(Status.OK).json(Success(data))
                })
                .catch((error) => {
                    logger.error(error) // we still need to log every error for debugging
                    res.status(Status.BAD_REQUEST).json(
                        Fail(error.message))
                })
        })
    /**
     * @swagger
     * /tweets:
     *   put:
     *     tags:
     *       - Tweets
     *     description: Update Tweet
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         description: Tweet's ID to update
     *         type: string
     *       - name: body
     *         description: Tweet's Entity
     *         in: body
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/tweet'
     *     responses:
     *       200:
     *         description: Successfully Updated
     *         schema:
     *           $ref: '#/definitions/tweet'
     *       401:
     *         $ref: '#/responses/Unauthorized'
     *       400:
     *         $ref: '#/responses/BadRequest'
     */
    router
        .put('/:id', (req, res) => {
            putUseCase
                .update({ id: req.params.id, body: req.body })
                .then(data => {
                    res.status(Status.OK).json(Success(data))
                })
                .catch((error) => {
                    logger.error(error) // we still need to log every error for debugging
                    res.status(Status.BAD_REQUEST).json(
                        Fail(error.message))
                })
        })

    /**
     * @swagger
     * /tweets:
     *   delete:
     *     tags:
     *       - Tweets
     *     description: Delete Tweet
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         description: Tweet's ID to delete
     *         type: string
     *     responses:
     *       200:
     *         description: Successfully Deleted
     *         schema:
     *           $ref: '#/definitions/tweet'
     *       401:
     *         $ref: '#/responses/Unauthorized'
     */
    router
        .delete('/:id', (req, res) => {
            deleteUseCase
                .remove({ id: req.params.id })
                .then(data => {
                    res.status(Status.OK).json(Success(data))
                })
                .catch((error) => {
                    logger.error(error) // we still need to log every error for debugging
                    res.status(Status.BAD_REQUEST).json(
                        Fail(error.message))
                })
        })

    return router
}