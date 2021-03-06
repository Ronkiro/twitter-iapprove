const swaggerJSDoc = require('swagger-jsdoc')
const Status = require('http-status')
const { Router } = require('express')

module.exports = () => {
    const router = Router()

    // swagger definition
    const swaggerDefinition = {
        info: {
            title: 'Twitter IApprove API Explorer',
            version: '1.0.0',
            description: 'Available REST Endpoints of Twitter IApprove RESTful API'
        },
        host: `${process.env.API_SWAGGER}:${process.env.PORT}/api/${process.env.APP_VERSION}`,
        basePath: '/'
    }

    // options for the swagger docs
    const options = {
        // import swaggerDefinitions
        swaggerDefinition: swaggerDefinition,
        // path to the API docs
        apis: ['src/interfaces/http/modules/**/*.js']
    }

    // initialize swagger-jsdoc
    const swaggerSpec = swaggerJSDoc(options)

    /**
     * @swagger
     * /:
     *   get:
     *     tags:
     *       - Status
     *     description: Returns API status
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: API Status
     */
    router.get('/', (req, res) => {
        res.status(Status.OK).json({ status: 'API working' })
    })

    router.get('/swagger.json', (req, res) => {
        res.status(Status.OK).json(swaggerSpec)
    })

    return router
}