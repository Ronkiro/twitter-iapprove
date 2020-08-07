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
        // .use(cors({
        //     origin: "*",
        //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        // }))
        .use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
        
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);
        
            // Pass to next layer of middleware
            next();
        })
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