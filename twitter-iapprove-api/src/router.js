const statusMonitor = require('express-status-monitor')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')

const { Router } = require('express')
const { partialRight } = require('ramda')

const controller = require('./core/create_controller')
const httpLogger = require('./core/middlewares/http_logger')
const errorHandler = require('./core/middlewares/error_handler')

module.exports = ({ config, logger, database }) => {
    const router = Router()

    /* istanbul ignore if */
    if (config.env === 'development') {
        router.use(statusMonitor())
    }

    /* istanbul ignore if */
    if (config.env !== 'test') {
        router.use(httpLogger(logger))
    }

    const apiRouter = Router()

    apiRouter
        .use(cors({
            origin: [
                '*'
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }))
        .use(bodyParser.json())
        .use(compression())

    /*
     * Add your API routes here
     *
     * You can use the `controllers` helper like this:
     * apiRouter.use('/users', controller(controllerPath))
     *
     * The `controllerPath` is relative to the `interfaces/http` folder
     */
    
    apiRouter.use('/tweets', controller('tweet').router)
    apiRouter.use('/', controller('index'))
    
    router.use(`/api/${config.version}`, apiRouter)
    router.use('/', (req, res) => res.redirect(`/api/${config.version}`))

    router.use(partialRight(errorHandler, [logger, config]))

    return router
}